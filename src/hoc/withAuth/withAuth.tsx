import { checkAuth } from '../../features';
import { useAppDispatch } from '../../store';

export const withAuth = (WrappedComponent: React.ComponentType) => {
  const WrappedWithAuth = () => {
    const dispatch = useAppDispatch();
    dispatch(checkAuth());
    return <WrappedComponent />;
  };

  return WrappedWithAuth;
};
