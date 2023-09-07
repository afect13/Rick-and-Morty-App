import { RootState } from '../../store';

export const getAlertParams = (state: RootState) => state.global.alert;
export const getSearch = (state: RootState) => state.global.search;
