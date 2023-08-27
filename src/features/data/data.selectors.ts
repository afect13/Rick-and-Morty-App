import { RootState } from '../../store';

export const getHistoryData = (state: RootState) => state.data.history;
export const getFavoritesData = (state: RootState) => state.data.favorites;
export const getIsLoadingData = (state: RootState) => state.data.isLoading;
export const getErrorData = (state: RootState) => state.data.error;
export const getLoadingButton = (state: RootState) => state.data.target;
export const getLoadingButtonAllRemove = (state: RootState) => state.data.isAllRemove;
