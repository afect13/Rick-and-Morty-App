import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { CharacterCard, Loading, NoResultsMessage, PageContent } from '../../components';
import { getFavoritesIsLoad, setSearch, useSearchCharacterQuery } from '../../features';
import { useAddToHistory } from '../../hooks';

const Search = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const favoritesIsLoad = useSelector(getFavoritesIsLoad);
  const searchResult = String(searchParams.get('q'));
  const { data: character, isError, isLoading, isSuccess } = useSearchCharacterQuery(searchResult);
  useAddToHistory(searchResult);
  dispatch(setSearch(searchResult));
  return (
    <PageContent title={'Search Result'}>
      {isLoading && <Loading />}
      {isError && <NoResultsMessage message={'No results found'} />}
      {isSuccess &&
        favoritesIsLoad &&
        character.map((c) => <CharacterCard key={c.id} id={c.id} name={c.name} image={c.image} />)}
    </PageContent>
  );
};
export default Search;
