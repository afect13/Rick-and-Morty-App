import { RootState } from '../../store';

export const getFavorites = (state: RootState) => state.favorites.favorites;
export const getFavoritesIsLoad = (state: RootState) => state.favorites.isLoaded;
