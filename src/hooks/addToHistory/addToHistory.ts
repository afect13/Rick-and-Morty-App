import { useEffect } from 'react';

import { addToHistory, setSearch } from '../../features';
import { useAppDispatch } from '../../store';

export const useAddToHistory = (searchResult: string): void => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addToHistory(searchResult));
    dispatch(setSearch(searchResult));
  }, [dispatch, searchResult]);
};
