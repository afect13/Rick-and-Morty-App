import { RootState } from '../../store';

export const getAlertParams = (state: RootState) => state.global.alert;
export const getSearch = (state: RootState) => state.global.search;
export const getSuggestionsIs = (state: RootState) => state.global.suggestionsIs;
