import Loader from 'components/Loader/Loader';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { styled } from 'styled-components';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <MainSection>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </MainSection>
      </main>
      <Footer />
    </>
  );
};

const MainSection = styled.section`
  display: flex;
  margin: 0 auto;
  gap: 10px;
  padding: 10px 0 100px 0;
  background-color: transparent;

  max-width: var(--small-screen);

  @media (min-width: 768px) {
    max-width: var(--medium-screen);
  }

  @media (min-width: 1280px) {
    max-width: var(--large-screen);
  }
`;
export default MainLayout;
