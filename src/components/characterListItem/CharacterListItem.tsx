import { Link } from 'react-router-dom';

import { Button } from '../../components';

export const CharacterListItem = () => {
  //  TODO: Получить через пропс имя фото id
  return (
    <li className="flex justify-between mx-auto  bg-zinc-200 rounded-lg p-2.5 w-[500px] mb-8">
      <div className="pr-4 border-zinc-900/20 border-r">
        <img
          className="w-20 h-20 rounded-full"
          src="https://rickandmortyapi.com/api/character/avatar/78.jpeg"
          alt="Cowboy Rick"
        ></img>
      </div>
      <div className="flex items-center">
        <Link to="/" className="my-2 text-center text-2xl font-bold underline tracking-tight text-blue-600">
          Cowboy Rick
        </Link>
      </div>
      <div className="flex items-center pl-4 border-zinc-900/20 border-l">
        <Button type={'button'} name={'Remove'} bgColor="bg-red-600" withBorder={true} />
      </div>
    </li>
  );
};
