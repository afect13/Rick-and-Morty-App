import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Form, PageContent } from '../../components';
import { getIsAuthenticated } from '../../features';

export const Signup = () => {
  const navigate = useNavigate();
  const auth = useSelector(getIsAuthenticated);
  if (auth) navigate('/');
  return (
    <PageContent title={'Sign Up'}>
      <Form type={'Signup'} />
    </PageContent>
  );
};
