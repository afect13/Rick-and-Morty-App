import { RootState } from '../../store';

export const getHistory = (state: RootState) => state.history.history;
export const getIsLoadingHistory = (state: RootState) => state.history.isLoading;
export const getErrorHistory = (state: RootState) => state.history.error;
export const getLoadingButtonHistory = (state: RootState) => state.history.currentBtn;
export const getLoadingButtonAllRemoveHistory = (state: RootState) => state.history.AllRemoveBtn;
