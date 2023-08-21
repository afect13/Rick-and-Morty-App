import { Link } from 'react-router-dom';

export const CharacterCard = () => {
  //TODO: Принимать через пропсы ссылку картинки, имя,id для Link
  return (
    <Link to="/" className="block w-full max-w-[280px] bg-zinc-100 ease-in duration-200 hover:scale-105 ">
      {/* Картинка */}
      <img className="w-full" src="" alt=""></img>
      {/* Имя персонажа */}
      <h5 className="my-2 text-center text-sm font-bold tracking-tight text-gray-900"></h5>
    </Link>
  );
};
