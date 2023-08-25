import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from './layouts/MainLayout/MainLayout';
import MainPage from './page/MainPage/MainPage';
import SensornayaPage from './page/SensornayaPage/SensornayaPage';
import LogopedPage from './page/LogopedPage/LogopedPage';
import CorrectionPage from './page/CorrectionPage/CorrectionPage';
import ChildrenPage from './page/ChildrenPage/ChildrenPage';
import FinancialPage from './page/FinancialPage/FinancialPage';
import NotFoundPage from './page/NotFoundPage/NotFoundPage';
import WelcomePage from 'page/WelcomePage/WelcomePage';
import AuthPage from 'page/AuthPage/AuthPage';
import RestrictedRoute from 'route/RestrictedRoute';
import { PrivateRoute } from 'route/PrivateRoute';
import { useDispatch } from 'react-redux';
import { currentThunk } from 'redux/auth/authOperetion';
import Lesson from 'page/Lesson/Lesson';

function App() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentThunk());
  }, [dispatch]);

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    handleRouteChange();
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route
          index
          element={<RestrictedRoute component={<WelcomePage />} />}
        />
        <Route
          path="/auth/:id"
          element={<RestrictedRoute component={<AuthPage />} />}
        />
        <Route path="/" element={<PrivateRoute component={<MainLayout />} />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/lesson/:lessonId" element={<Lesson />} />
          <Route path="/sensornaya" element={<SensornayaPage />} />
          <Route path="/logoped" element={<LogopedPage />} />
          <Route path="/correction" element={<CorrectionPage />} />
          <Route path="/children" element={<ChildrenPage />} />
          <Route path="/financial" element={<FinancialPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
