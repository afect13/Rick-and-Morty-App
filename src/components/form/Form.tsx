import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import * as yup from 'yup';

import { ReactComponent as LoadingSvg } from '../../assets/svg/loading.svg';
import { Button } from '../../components';
import { getIsLoading, signin, signup } from '../../features/';
import { useAppDispatch } from '../../store';

interface Props {
  type: 'Signup' | 'Signin';
}

const schema = yup
  .object({
    email: yup
      .string()
      .required('Please enter your email')
      .email('Please enter a valid email addres')
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Please enter a correct email addres'),
    password: yup
      .string()
      .required('Please enter your password')
      .min(8, 'Password must be 8 characters long')
      .matches(/[0-9]/, 'Password requires a number')
      .matches(/[a-z]/, 'Password requires a lowercase letter')
      .matches(/[A-Z]/, 'Password requires an uppercase letter'),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export const Form = ({ type }: Props) => {
  // TODO: Обработать ошибки, модальное или тостеры, настроить редирект при входе
  const dispatch = useAppDispatch();
  const loading = useSelector(getIsLoading);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (type === 'Signup') {
      await dispatch(signup({ email: data.email, password: data.password }));
    }
    if (type === 'Signin') {
      await dispatch(signin({ email: data.email, password: data.password }));
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
          <Button type={'submit'} withBorder={false} name={type} bgColor="bg-green-700" widthParms="w-full ">
            {loading && (
              <div className="flex items-center justify-center">
                <LoadingSvg className="h-6 w-6 fill-white" />
              </div>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};
