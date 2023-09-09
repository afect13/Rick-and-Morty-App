import { useSelector } from 'react-redux';

import { CharacterCard, Loading, PageContent } from '../../components';
import { getFavoritesIsLoad, useGetCharactersQuery } from '../../features';

const Main = () => {
  const { data, isLoading, isSuccess, isError } = useGetCharactersQuery();
  const favoritesIsLoad = useSelector(getFavoritesIsLoad);
  return (
    <PageContent title={'Main'}>
      {isLoading && <Loading />}
      {isError && <div>Error...</div>}
      {isSuccess &&
        favoritesIsLoad &&
        data.map((c) => <CharacterCard key={c.id} name={c.name} id={c.id} image={c.image} />)}
    </PageContent>
  );
};
export default Main;
