import { useEffect } from 'react';

import { addToHistory } from '../../features';
import { useAppDispatch } from '../../store';

export const useAddToHistory = (searchResult: string): void => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addToHistory(searchResult));
  }, [dispatch, searchResult]);
};
