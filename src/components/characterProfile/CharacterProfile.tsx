import classNames from 'classnames';

import { Button } from '../../components';

interface Props {
  image: string;
  name: string;
  status: string;
  species: string;
  location: { name: string };
  gender: string;
}

export const CharacterProfile = ({ image, name, status, species, location, gender }: Props) => {
  const statusColor = classNames('w-3 h-3 rounded-full mr-2', {
    ['bg-red-700']: status === 'Dead',
    ['bg-green-700']: status === 'Alive',
    ['bg-gray-500']: status === 'unknown',
  });
  const isFavorites = true;
  return (
    <div className="flex w-full max-w-[700px] mx-auto rounded-lg p-4 bg-zinc-100">
      <div className=" w-2/4">
        <img className="w-full rounded-2xl p-2" src={image} alt={name}></img>
      </div>
      <div className="flex flex-col w-3/4 border-zinc-900/20 border-l">
        <h2 className="m-2 text-left text-2xl font-bold text-gray-700">{name}</h2>
        <div className="flex items-center m-2">
          <div className={statusColor}></div>
          <p className="text-left text-lg font-bold text-gray-700">{`${status} - ${species}`}</p>
        </div>
        <div className="m-2">
          <p className="text-left text-sm  text-gray-500">Last known location:</p>
          <p className=" text-left text-lg  text-gray-700">{location.name}</p>
        </div>
        <div className="m-2">
          <p className="text-left text-sm  text-gray-500">Gender:</p>
          <p className=" text-left text-lg  text-gray-700">{gender}</p>
        </div>
        <div className="flex w-full my-1 mx-2">
          {isFavorites ? (
            <Button type={'button'} withBorder={false} bgColor={'bg-green-700'} name={'Add To Favorites'}></Button>
          ) : (
            <Button type={'button'} withBorder={false} bgColor={'bg-red-700'} name={'Remove From Favorites'}></Button>
          )}
        </div>
      </div>
    </div>
  );
};
