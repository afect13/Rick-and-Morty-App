import { useSearchParams } from 'react-router-dom';

import { CharacterCard, Loading, NoResultsMessage, PageContent } from '../../components';
import { useSearchCharacterQuery } from '../../features';
import { useAddToHistory } from '../../hooks';

export const Search = () => {
  const [searchParams] = useSearchParams();
  const searchResult = String(searchParams.get('q'));
  const { data: character, isError, isLoading, isSuccess } = useSearchCharacterQuery(searchResult);
  useAddToHistory(searchResult);
  return (
    <PageContent title={'Search Result'}>
      {isLoading && <Loading />}
      {isError && <NoResultsMessage message={'No results found'} />}
      {isSuccess && character.map((c) => <CharacterCard key={c.id} id={c.id} name={c.name} image={c.image} />)}
    </PageContent>
  );
};
