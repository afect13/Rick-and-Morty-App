import { ErrorBoundary } from 'react-error-boundary';
import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import { ErrorFallback } from './components';
import { Character, Favorites, History, Main, NotFound, Search, Signin, Signup } from './pages';

import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import { Loading } from './components';
import { Main } from './pages';

const Character = lazy(() => import('./pages/').then(({ Character }) => ({ default: Character })));
const Search = lazy(() => import('./pages/').then(({ Search }) => ({ default: Search })));
const Favorites = lazy(() => import('./pages/').then(({ Favorites }) => ({ default: Favorites })));
const History = lazy(() => import('./pages/').then(({ History }) => ({ default: History })));
const Signin = lazy(() => import('./pages/').then(({ Signin }) => ({ default: Signin })));
const Signup = lazy(() => import('./pages/').then(({ Signup }) => ({ default: Signup })));
const NotFound = lazy(() => import('./pages/').then(({ NotFound }) => ({ default: NotFound })));


const router = createBrowserRouter([
  {
    path: '',
    element: (
      <Suspense fallback={<Loading />}>
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
            <Favorites />
          </ErrorBoundary>
        ),
      },
      {
        path: '/history',
        element: (
          <ErrorBoundary fallback={<ErrorFallback />}>
            <History />
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
            <Signin />
          </ErrorBoundary>
        ),
      },
      {
        path: '/signup',
        element: (
          <ErrorBoundary fallback={<ErrorFallback />}>
            <Signup />
          </ErrorBoundary>
        ),
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
export default router;
