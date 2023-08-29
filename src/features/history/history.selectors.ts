import { RootState } from '../../store';

export const getHistory = (state: RootState) => state.history.history;
export const getIsLoadingGlobalHistory = (state: RootState) => state.history.isLoading;
export const getErrorHistory = (state: RootState) => state.history.error;
export const getIsLoadingByLinkHistory = (state: RootState) => state.history.isLoadingByLink;
