import MainTable from 'components/Sensornaya/MainTable/MainTable';
import Container from 'components/Container/Container';
import TimeLessons from 'components/Sensornaya/TimeLessons/TimeLessons';
import { MainWrapper } from 'components/Sensornaya/MainTable/MainTable.styled';

function SensornayaPage() {
  return (
    <>
      <Container>
        <MainWrapper>
          <TimeLessons />
          <MainTable />
        </MainWrapper>
      </Container>
    </>
  );
}

export default SensornayaPage;
