import { useEffect } from 'react';

import { checkAuth } from '../../features';
import { useAppDispatch } from '../../store';

export const withAuth = (WrappedComponent: React.ComponentType) => {
  const WrappedWithAuth = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(checkAuth());
    }, [dispatch]);
    return <WrappedComponent />;
  };

  return WrappedWithAuth;
};
