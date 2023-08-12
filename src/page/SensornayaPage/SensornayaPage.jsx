import MainTable from 'components/MainTable/MainTable';
import Container from 'components/Container/Container';
import MainLeftPanel from 'components/MainLeftPanel/MainLeftPanel';
import { MainWrapper } from './SensornayaPage.styled';

function SensornayaPage() {
  return (
    <>
      <Container>
        <MainWrapper>
          <MainLeftPanel />
          <MainTable />
        </MainWrapper>
      </Container>
    </>
  );
}

export default SensornayaPage;
