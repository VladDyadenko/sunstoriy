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

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    handleRouteChange();
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route path="/auth/:id" element={<h4>AuthPage</h4>} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path="sensornaya" element={<SensornayaPage />} />
          <Route path="logoped" element={<LogopedPage />} />
          <Route path="correction" element={<CorrectionPage />} />
          <Route path="children" element={<ChildrenPage />} />
          <Route path="financial" element={<FinancialPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
