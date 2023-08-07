import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Suspense } from "react";
import { Outlet } from "react-router";
import LeftHeader from "../../components/Header/LeftHeader/LeftHeader";
import { styled } from "styled-components";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <MainSection>
          <LeftHeader />
          <Suspense fallback={<p>Loading...</p>}>
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
  padding-top: 10px;
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
