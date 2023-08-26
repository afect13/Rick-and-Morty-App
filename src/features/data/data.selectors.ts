import { RootState } from '../../store';

export const getHistoryData = (state: RootState) => state.data.history;
export const getFavoritesData = (state: RootState) => state.data.favorites;
export const getIsLoadingData = (state: RootState) => state.data.isLoading;
export const getErrorData = (state: RootState) => state.data.error;
