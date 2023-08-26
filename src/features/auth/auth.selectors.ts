import { RootState } from '../../store';

export const getAccessToken = (state: RootState) => state.auth.accessToken;
export const getIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const getEmail = (state: RootState) => state.auth.email;
export const getIsLoadingAuth = (state: RootState) => state.auth.isLoading;
export const getErrorAuth = (state: RootState) => state.auth.error;
