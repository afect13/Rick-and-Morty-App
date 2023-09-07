import { useState } from 'react';
import { useSelector } from 'react-redux';

import { getFavorites, toggleFavorites } from '../../features';
import { useAppDispatch } from '../../store';

type ToggleFavorites = {
  isLoading: boolean;
  isFavorite: boolean;
  handleToggleFavorite: () => void;
};
export const useToggleFavorite = (id: number): ToggleFavorites => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const isFavorite = useSelector(getFavorites)?.includes(id);

  const handleToggleFavorite = async () => {
    setIsLoading(true);
    await dispatch(toggleFavorites(id));
    setIsLoading(false);
  };
  return { isLoading, isFavorite, handleToggleFavorite };
};
