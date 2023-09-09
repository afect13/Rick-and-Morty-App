import { RootState } from '../../store';

export const getHistory = (state: RootState) => state.history.history;
export const getHistoryIsLoad = (state: RootState) => state.history.isLoaded;
