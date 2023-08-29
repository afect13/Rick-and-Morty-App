import { useEffect } from 'react';

import { addedHistoryLink } from '../../features';
import { useAppDispatch } from '../../store';

export const useAddToHistory = (searchResult: string): void => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addedHistoryLink(searchResult));
  }, [dispatch, searchResult]);
};
