import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getIsAuthenticated } from '../../features';

type Props = {
  children: ReactNode;

  forAuth: boolean;
};
export const AuthRedirect = ({ forAuth, children }: Props): JSX.Element => {
  const userIsAuth = useSelector(getIsAuthenticated);
  if (userIsAuth && forAuth) {
    return <div>{children}</div>;
  }
  if (!userIsAuth && !forAuth) {
    return <div>{children}</div>;
  }
  return <Navigate to={forAuth ? '/signup' : '/'} />;
};
