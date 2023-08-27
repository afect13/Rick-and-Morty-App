import classNames from 'classnames';
import { useSelector } from 'react-redux';

import { Button, LoadingIndicator } from '../../components';
import { addedTarget, getData, getEmail, getFavoritesData, getLoadingButton, mutationData } from '../../features';
import { useAppDispatch } from '../../store';

interface Props {
  image: string;
  name: string;
  status: string;
  species: string;
  location: { name: string };
  gender: string;
  id: number;
}

export const CharacterProfile = ({ image, name, status, species, location, gender, id }: Props) => {
  const dispatch = useAppDispatch();
  const favorites = useSelector(getFavoritesData);
  const email = useSelector(getEmail);
  const loading = useSelector(getLoadingButton);
  const isFavorite = favorites.includes(id);
  const handleToggleFavorite = async () => {
    if (email) {
      dispatch(addedTarget(id));
      const param = isFavorite ? 'remove' : 'add';
      await dispatch(mutationData({ email, data: id, param, arrayIs: 'favorites' }));
      dispatch(getData(email));
    }
  };
  const statusColor = classNames('w-3 h-3 rounded-full mr-2', {
    ['bg-red-700']: status === 'Dead',
    ['bg-green-700']: status === 'Alive',
    ['bg-gray-500']: status === 'unknown',
  });

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
          <Button
            onClick={handleToggleFavorite}
            type={'button'}
            withBorder={false}
            widthParms={'w-[215px]'}
            bgColor={isFavorite ? 'bg-red-700' : 'bg-green-700'}
            name={isFavorite ? 'Remove From Favorites' : 'Add To Favorites'}
          >
            {loading === id && <LoadingIndicator />}
          </Button>
        </div>
      </div>
    </div>
  );
};
