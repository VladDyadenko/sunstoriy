import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectAuth } from 'redux/auth/authSelector';

export const PrivateRoute = ({
  redirectTo = '/auth/signin',
  component: Component,
  ...routerProps
}) => {
  const { token, isRefreshing } = useSelector(selectAuth);

  const shouldRedirect = !token && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
