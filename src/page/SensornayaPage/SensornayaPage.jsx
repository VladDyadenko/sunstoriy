import MainTable from 'ui/MainTable/MainTable';
import Container from 'components/Container/Container';
import { MainWrapper } from 'components/ContainerMain/ContainerMain.styled';

import { Lessons_List } from 'assets/constants/mainConstans';
import FilterLesson from 'components/FilterLesson/FilterLesson';

function SensornayaPage() {
  return (
    <>
      <Container>
        <FilterLesson />
        <MainWrapper>
          <MainTable lessonsData={Lessons_List} />
        </MainWrapper>
      </Container>
    </>
  );
}

export default SensornayaPage;
