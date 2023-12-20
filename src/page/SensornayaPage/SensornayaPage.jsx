import MainTable from 'ui/MainTable/MainTable';
import Container from 'components/Container/Container';
import { MainWrapper } from 'components/ContainerMain/ContainerMain.styled';

// import { Lessons_List } from 'assets/constants/mainConstans';
import FilterLesson from 'components/FilterLesson/FilterLesson';
import { useSelector } from 'react-redux';
import { selectLessonsSensornaya } from 'redux/sensornaya/sensornayaSelector';

function SensornayaPage() {
  const lessonsChosePeriod = useSelector(selectLessonsSensornaya);

  return (
    <>
      <Container>
        <FilterLesson />
        <MainWrapper>
          {lessonsChosePeriod.length > 0 && (
            <MainTable lessons={lessonsChosePeriod} />
          )}
        </MainWrapper>
      </Container>
    </>
  );
}

export default SensornayaPage;
