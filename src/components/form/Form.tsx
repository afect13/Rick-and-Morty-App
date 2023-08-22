import { Button } from '../../components';

interface Props {
  type: 'Signup' | 'Signin';
}

export const Form = ({ type }: Props) => {
  return (
    <div className="mx-auto w-[400px]">
      <div className="w-full  bg-zinc-100 border border-zinc-100 p-8">
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-zinc-700">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-zinc-50 border border-zinc-300 text-zinc-700 text-sm  block w-full p-2.5 focus:outline-none focus:ring focus:ring-zinc-400"
              placeholder="name@mail.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-zinc-700">
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-zinc-50 border border-zinc-300 text-zinc-700 text-sm  block w-full p-2.5 focus:outline-none focus:ring focus:ring-zinc-400"
              required
            />
          </div>
          <Button type={'submit'} withBorder={false} name={type} bgColor="bg-green-700" widthParms="w-full "></Button>
        </form>
      </div>
    </div>
  );
};
