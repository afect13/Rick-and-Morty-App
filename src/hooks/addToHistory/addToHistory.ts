import { addToHistory } from '../../features';
import { useAppDispatch } from '../../store';

export const useAddToHistory = (searchResult: string): void => {
  const dispatch = useAppDispatch();
  dispatch(addToHistory(searchResult));
};
