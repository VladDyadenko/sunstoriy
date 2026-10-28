import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { currentThunk } from 'redux/auth/authOperetion';
import axios from 'axios';

const GoogleAuthCallback = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const accessToken = searchParams.get('token');
  const isAuthAttempted = useRef(false);

  useEffect(() => {
    if (accessToken && !isAuthAttempted.current) {
      isAuthAttempted.current = true;

      // Токен уже содержит Bearer
      axios.defaults.headers.common.Authorization = accessToken;

      // Запрашиваем данные пользователя и передаем токен
      dispatch(currentThunk(accessToken))
        .unwrap()
        .then(() => {
          navigate('/');
        })
        .catch(() => {
          navigate('/auth/signin');
        });
    }
  }, [dispatch, navigate, accessToken]);

  return null;
};

export default GoogleAuthCallback;
