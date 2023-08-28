import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { CharacterCard, Loading, PageContent } from '../../components';
import { addedHistoryLink, useSearchCharacterQuery } from '../../features';
import { useAppDispatch } from '../../store';

export const Search = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const searchResult = String(searchParams.get('q'));
  const { data: character, isError, isLoading, isSuccess } = useSearchCharacterQuery(searchResult);
  useEffect(() => {
    dispatch(addedHistoryLink(searchResult));
  }, [dispatch, searchResult]);
  return (
    <PageContent title={'Search Result'}>
      {isLoading && <Loading />}
      {isError && (
        <div className="flex justify-center w-full">
          <h2 className="text-center p-32 text-red-500 text-3xl">Character not Found</h2>
        </div>
      )}
      {isSuccess && character.map((c) => <CharacterCard key={c.id} id={c.id} name={c.name} image={c.image} />)}
    </PageContent>
  );
};
