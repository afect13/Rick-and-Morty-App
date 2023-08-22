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
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    ),
    children: [
      { path: '/', element: <Main /> },
      { path: '/character/:charId', element: <Character /> },
      { path: '/favorites', element: <Favorites /> },
      { path: '/history', element: <History /> },
      { path: '/search', element: <Search /> },
      { path: '/signin', element: <Signin /> },
      { path: '/signup', element: <Signup /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
export default router;
