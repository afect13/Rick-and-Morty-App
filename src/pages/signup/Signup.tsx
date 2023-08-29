import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Form, PageContent } from '../../components';
import { getIsAuthenticated } from '../../features';

export const Signup = () => {
  const userIsAuth = useSelector(getIsAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (userIsAuth) {
      return navigate('/');
    }
  }, [userIsAuth, navigate]);
  return (
    <PageContent title={'Sign Up'}>
      <Form inputType={'Signup'} />
    </PageContent>
  );
};
