import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectAuth } from 'redux/auth/authSelector';

export const AdminRoute = ({
  redirectTo = '/',
  component: Component,
  ...routerProps
}) => {
  const { token, isRefreshing, user } = useSelector(selectAuth);

  const shouldRedirect =
    !token || isRefreshing || (user && user.role !== 'admin');

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
