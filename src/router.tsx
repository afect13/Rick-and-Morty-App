import { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import { AuthRedirect, ErrorFallback, FallbackLayout } from './components';

const Main = lazy(() => import('./pages/main/Main'));
const Search = lazy(() => import('./pages/search/Search'));
const Favorites = lazy(() => import('./pages/favorites/Favorites'));
const History = lazy(() => import('./pages/history/History'));
const Signin = lazy(() => import('./pages/signin/Signin'));
const Signup = lazy(() => import('./pages/signup/Signup'));
const Character = lazy(() => import('./pages/character/Character'));
const NotFound = lazy(() => import('./pages/notFound/NotFound'));
const router = createBrowserRouter([
  {
    path: '',
    element: (
      <Suspense fallback={<FallbackLayout />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: (
          <ErrorBoundary fallback={<ErrorFallback />}>
            <Main />
          </ErrorBoundary>
        ),
      },
      {
        path: '/character/:charId',
        element: (
          <ErrorBoundary fallback={<ErrorFallback />}>
            <Character />
          </ErrorBoundary>
        ),
      },
      {
        path: '/favorites',
        element: (
          <ErrorBoundary fallback={<ErrorFallback />}>
            <AuthRedirect forAuth={true}>
              <Favorites />
            </AuthRedirect>
          </ErrorBoundary>
        ),
      },
      {
        path: '/history',
        element: (
          <ErrorBoundary fallback={<ErrorFallback />}>
            <AuthRedirect forAuth={true}>
              <History />
            </AuthRedirect>
          </ErrorBoundary>
        ),
      },
      {
        path: '/search',
        element: (
          <ErrorBoundary fallback={<ErrorFallback />}>
            <Search />
          </ErrorBoundary>
        ),
      },
      {
        path: '/signin',
        element: (
          <ErrorBoundary fallback={<ErrorFallback />}>
            <AuthRedirect forAuth={false}>
              <Signin />
            </AuthRedirect>
          </ErrorBoundary>
        ),
      },
      {
        path: '/signup',
        element: (
          <ErrorBoundary fallback={<ErrorFallback />}>
            <AuthRedirect forAuth={false}>
              <Signup />
            </AuthRedirect>
          </ErrorBoundary>
        ),
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
export default router;
