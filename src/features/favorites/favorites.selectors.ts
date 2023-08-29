import { RootState } from '../../store';

export const getFavorites = (state: RootState) => state.favorites.favorites;
export const getIsLoadingGlobalFavorites = (state: RootState) => state.favorites.isLoading;
export const getErrorFavorites = (state: RootState) => state.favorites.error;
export const getIsLoadingByIdFavorites = (state: RootState) => state.favorites.isLoadingById;
