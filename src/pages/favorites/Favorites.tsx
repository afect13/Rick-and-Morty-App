import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button, FavoritesItem, Loading, LoadingIndicator, NoResultsMessage, PageContent } from '../../components';
import {
  getFavorites,
  getFavoritesIsLoad,
  removeAllFromFavorites,
  useGetFavoritesCharactersQuery,
} from '../../features';
import { useAppDispatch } from '../../store';

const Favorites = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const favorites = useSelector(getFavorites);
  const favoritesIsLoad = useSelector(getFavoritesIsLoad);
  const favoritesNotEmpty = favorites.length > 0;
  const {
    data: characters,
    isLoading: isLoadingCharacters,
    isSuccess,
  } = useGetFavoritesCharactersQuery(favorites, {
    skip: !favoritesNotEmpty,
  });
  const handleRemoveAll = async () => {
    setIsLoading(true);
    await dispatch(removeAllFromFavorites());
    setIsLoading(false);
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
          {isLoading && <LoadingIndicator />}
        </Button>
      </div>
    </>
  );
  return (
    <PageContent title={'Favorites'}>
      {favoritesNotEmpty ? (
        isLoadingCharacters ? (
          <Loading />
        ) : (
          favoritesList
        )
      ) : (
        favoritesIsLoad && <NoResultsMessage message={'Favorites Not Found'} />
      )}
    </PageContent>
  );
};
export default Favorites;
