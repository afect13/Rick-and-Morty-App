import { RootState } from '../../store';

export const getAlertParams = (state: RootState) => state.global.alert;
