import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectAuth } from 'redux/auth/authSelector';

export const PrivateRoute = ({
  redirectTo = '/',
  component: Component,
  ...routerProps
}) => {
  const { token, isRefreshing } = useSelector(selectAuth);

  const shouldRedirect = !token && !isRefreshing && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
