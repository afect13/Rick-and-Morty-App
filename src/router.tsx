import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import { Favorites, History, Main, NotFound, Search, Signin, Signup } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Main /> },
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
