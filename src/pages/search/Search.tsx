import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { CharacterCard, Loading, PageContent } from '../../components';
import { getData, getEmail, getHistoryData, mutationData, useSearchCharacterQuery } from '../../features';
import { useAppDispatch } from '../../store';

export const Search = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const search = String(searchParams.get('q'));
  const email = useSelector(getEmail);
  const history = useSelector(getHistoryData);
  const { data: character, isError, isLoading, isSuccess } = useSearchCharacterQuery(search);
  useEffect(() => {
    const addToHistory = async () => {
      if (email && !history.includes(search) && search) {
        await dispatch(mutationData({ email, data: search, param: 'add', arrayIs: 'history' }));
        dispatch(getData(email));
      }
    };
    addToHistory();
  }, [dispatch, email, history, search]);
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
