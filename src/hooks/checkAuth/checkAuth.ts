import { useEffect } from 'react';

import { checkAuth } from '../../features';
import { useAppDispatch } from '../../store';

let authIsChecked = false;
export const useCheckAuth = (): void => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!authIsChecked) {
      authIsChecked = true;
      dispatch(checkAuth());
    }
  }, [dispatch]);
};
