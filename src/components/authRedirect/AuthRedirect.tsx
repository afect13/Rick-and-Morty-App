import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getAuthCheckIsPassed, getIsAuthenticated } from '../../features';

type Props = {
  children: ReactNode;

  forAuth: boolean;
};
export const AuthRedirect = ({ forAuth, children }: Props) => {
  const userIsAuth = useSelector(getIsAuthenticated);
  const authChecked = useSelector(getAuthCheckIsPassed);
  if (userIsAuth && forAuth) {
    return <div>{children}</div>;
  }
  if (!userIsAuth && !forAuth) {
    return <div>{children}</div>;
  }
  if (authChecked) {
    return <Navigate to={forAuth ? '/signup' : '/'} />;
  } else {
    return null;
  }
};
