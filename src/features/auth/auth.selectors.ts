import { RootState } from '../../store';

export const getIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const getEmail = (state: RootState) => state.auth.email;
export const getIsLoadingAuth = (state: RootState) => state.auth.isLoading;
export const getErrorAuth = (state: RootState) => state.auth.error;
export const getAuthCheckIsPassed = (state: RootState) => state.auth.checkIsPassed;
