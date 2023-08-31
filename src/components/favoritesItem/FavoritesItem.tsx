import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Button, LoadingIndicator } from '..';
import { getIsLoadingByIdFavorites, removeFromFavorites } from '../../features';
import { useAppDispatch } from '../../store';

interface Props {
  name: string;
  id: number;
  image: string;
}

export const FavoritesItem = ({ id, image, name }: Props) => {
  const dispatch = useAppDispatch();
  const loadingById = useSelector(getIsLoadingByIdFavorites);
  const handleRemoveFavorite = async () => {
    dispatch(removeFromFavorites(id));
  };
  return (
    <li className="flex justify-between mx-auto  bg-zinc-200 rounded-lg p-2.5 w-[500px] mb-8">
      <div className="pr-4 border-zinc-900/20 border-r">
        <img className="w-20 h-20 rounded-full" src={image} alt={name}></img>
      </div>
      <div className="flex items-center">
        <Link
          to={`/character/${id}`}
          className="my-2 text-center text-2xl font-bold underline tracking-tight text-blue-600"
        >
          {name}
        </Link>
      </div>
      <div className="flex items-center pl-4 border-zinc-900/20 border-l">
        <Button
          onClick={handleRemoveFavorite}
          type={'button'}
          widthParms={'w-[90px]'}
          name={'Remove'}
          bgColor="bg-red-600"
          withBorder={true}
        >
          {loadingById === id && <LoadingIndicator />}
        </Button>
      </div>
    </li>
  );
};
