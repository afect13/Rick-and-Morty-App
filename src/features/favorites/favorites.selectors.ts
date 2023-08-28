import { RootState } from '../../store';

export const getFavorites = (state: RootState) => state.favorites.favorites;
export const getIsLoadingFavorites = (state: RootState) => state.favorites.isLoading;
export const getErrorFavorites = (state: RootState) => state.favorites.error;
export const getLoadingButtonFavorites = (state: RootState) => state.favorites.currentBtn;
export const getLoadingButtonAllRemoveFavorites = (state: RootState) => state.favorites.AllRemoveBtn;
