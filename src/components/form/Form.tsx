import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import * as yup from 'yup';

import { Button, LoadingIndicator } from '../../components';
import { getErrorAuth, getIsLoadingAuth, signin, signup } from '../../features/';
import { useAppDispatch } from '../../store';
import { schema } from '../../utils';

type Props = {
  inputType: 'Signup' | 'Signin';
};

type FormData = yup.InferType<typeof schema>;

export const Form = ({ inputType }: Props) => {
  const dispatch = useAppDispatch();
  const loading = useSelector(getIsLoadingAuth);
  const authError = useSelector(getErrorAuth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const { email, password } = data;
    if (inputType === 'Signup') {
      dispatch(signup({ email, password }));
    }
    if (inputType === 'Signin') {
      dispatch(signin({ email, password }));
    }
  };
  return (
    <div className="mx-auto w-[400px]">
      <div className="w-full  bg-zinc-100 border border-zinc-100 p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-2 text-lg font-medium text-zinc-700">
              Your email
            </label>
            <input
              {...register('email')}
              type="email"
              name="email"
              id="email"
              className="bg-zinc-50 border border-zinc-300 text-zinc-700 text-sm block w-full p-2.5 focus:outline-none focus:ring focus:ring-zinc-400"
              placeholder="name@mail.com"
            />
            <p className="text-sm text-red-600">{errors.email?.message}</p>
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-lg font-medium text-zinc-700">
              Your password
            </label>
            <input
              {...register('password')}
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-zinc-50 border border-zinc-300 text-zinc-700 text-sm  block w-full p-2.5 focus:outline-none focus:ring focus:ring-zinc-400"
            />
            <p className="text-sm text-red-600">{errors.password?.message}</p>
          </div>
          <p className="text-lg text-center text-red-600">{authError}</p>
          <Button
            type={'submit'}
            withBorder={false}
            name={inputType === 'Signup' ? 'Signup' : 'Signin'}
            bgColor="bg-green-700"
            widthParms="w-full "
          >
            {loading && <LoadingIndicator />}
          </Button>
        </form>
      </div>
    </div>
  );
};
