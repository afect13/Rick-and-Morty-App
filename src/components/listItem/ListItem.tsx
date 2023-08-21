import { Link } from 'react-router-dom';

import { Button } from '../../components';

interface Props {
  isFavorites: boolean;
}

export const ListItem = ({ isFavorites }: Props) => {
  //  TODO: Получить  имя фото и id (Если History фото не надо)
  return (
    <li className="flex justify-between mx-auto  bg-zinc-200 rounded-lg p-2.5 w-[500px] mb-8">
      {isFavorites && (
        <div className="pr-4 border-zinc-900/20 border-r">
          {/* Картинка */}
          <img className="w-20 h-20 rounded-full" src="" alt=""></img>
        </div>
      )}
      <div className="flex items-center">
        {/* Имя в Link */}
        <Link to="/" className="my-2 text-center text-2xl font-bold underline tracking-tight text-blue-600"></Link>
      </div>
      <div className="flex items-center pl-4 border-zinc-900/20 border-l">
        <Button type={'button'} name={'Remove'} bgColor="bg-red-600" withBorder={true} />
      </div>
    </li>
  );
};
