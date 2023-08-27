import { useSelector } from 'react-redux';

import { Button, FavoritesList, LoadingIndicator, PageContent } from '../../components';
import { Loading } from '../../components';
import {
  clearSpecificArray,
  getData,
  getEmail,
  getFavoritesData,
  getLoadingButtonAllRemove,
  useGetFavoritesCharactersQuery,
} from '../../features';
import { useAppDispatch } from '../../store';

export const Favorites = () => {
  const dispatch = useAppDispatch();
  const favorites = useSelector(getFavoritesData);
  const email = useSelector(getEmail);
  const loading = useSelector(getLoadingButtonAllRemove);
  const favoritesNotEmpty = favorites.length > 0;
  const {
    data: characters,
    isLoading,
    isSuccess,
  } = useGetFavoritesCharactersQuery(favorites, {
    skip: !favoritesNotEmpty,
  });
  const handleRemoveAll = async () => {
    if (email) {
      await dispatch(clearSpecificArray({ email, arrayIs: 'favorites' }));
      dispatch(getData(email));
    }
  };

  const favoritesList = (
    <>
      <ul className="w-full">
        {isSuccess && characters?.map((c) => <FavoritesList key={c.id} id={c.id} image={c.image} name={c.name} />)}
      </ul>
      <div className="flex w-full justify-center">
        <Button
          onClick={handleRemoveAll}
          type={'button'}
          widthParms={'w-[125px]'}
          name={'Remove all'}
          bgColor={'bg-red-600'}
          withBorder={false}
        >
          {loading && <LoadingIndicator />}
        </Button>
      </div>
    </>
  );
  return (
    <PageContent title={'Favorites'}>
      {favoritesNotEmpty ? isLoading ? <Loading /> : favoritesList : <div>favorites not found</div>}
    </PageContent>
  );
};
