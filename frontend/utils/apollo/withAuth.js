import { useContext, useEffect } from 'react';
import { UserContext } from 'context/UserContext';

const withAuth = Component => props => {
  const { user } = useContext(UserContext);

  useEffect(() => {}, [user]);

  return <Component {...props} />;
};

export default withAuth;
