import { useEffect } from 'react';

import { setSearch } from '../../features';
import { useAppDispatch } from '../../store';

export const usePersistSearchValue = (searchResult: string): void => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setSearch(searchResult));
  }, [dispatch, searchResult]);
};
