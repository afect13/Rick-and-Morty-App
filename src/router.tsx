import { ErrorBoundary } from 'react-error-boundary';
import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import { ErrorFallback } from './components';
import { Character, Favorites, History, Main, NotFound, Search, Signin, Signup } from './pages';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
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
