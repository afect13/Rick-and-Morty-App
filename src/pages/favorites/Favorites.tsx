import { useSelector } from 'react-redux';

import { Button, FavoritesItem, LoadingIndicator, PageContent } from '../../components';
import { Loading } from '../../components';
import {
  getFavorites,
  getIsLoadingByIdFavorites,
  getIsLoadingGlobalFavorites,
  removeAllFavorites,
  useGetFavoritesCharactersQuery,
} from '../../features';
import { useAppDispatch } from '../../store';

export const Favorites = () => {
  const dispatch = useAppDispatch();
  const favorites = useSelector(getFavorites);
  const loadingById = useSelector(getIsLoadingByIdFavorites);
  const loadingGlobal = useSelector(getIsLoadingGlobalFavorites);
  const favoritesNotEmpty = favorites.length > 0;
  const {
    data: characters,
    isLoading,
    isSuccess,
  } = useGetFavoritesCharactersQuery(favorites, {
    skip: !favoritesNotEmpty,
  });
  const handleRemoveAll = async () => {
    dispatch(removeAllFavorites());
  };
  const favoritesList = (
    <>
      <ul className="w-full">
        {isSuccess && characters?.map((c) => <FavoritesItem key={c.id} id={c.id} image={c.image} name={c.name} />)}
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
          {loadingGlobal && !loadingById && <LoadingIndicator />}
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
