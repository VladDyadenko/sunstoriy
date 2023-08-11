import MainTable from 'components/Sensornaya/MainTable/MainTable';
import Container from 'components/Container/Container';
import { MainWrapper } from 'components/Sensornaya/MainTable/MainTable.styled';

function SensornayaPage() {
  return (
    <>
      <Container>
        <MainWrapper>
          <MainTable />
        </MainWrapper>
      </Container>
    </>
  );
}

export default SensornayaPage;
