import { RootState } from '../../store';

export const getAccessToken = (state: RootState) => state.auth.accessToken;
export const getIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const getIsLoading = (state: RootState) => state.auth.isLoading;
export const getError = (state: RootState) => state.auth.error;
