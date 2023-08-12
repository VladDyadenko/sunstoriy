import MainLeftPanel from 'ui/MainLeftPanel/MainLeftPanel';
import MainTable from 'ui/MainTable/MainTable';
import {
  Lessons_List_Logoped,
  TEACHERS_SENSORNAYA,
} from 'assets/constants/mainConstans';
import { MainWrapper } from 'components/ContainerMain/ContainerMain.styled';
import Container from 'components/Container/Container';

const LogopedPage = () => {
  return (
    <>
      <Container>
        <MainWrapper>
          <MainLeftPanel teachersData={TEACHERS_SENSORNAYA} />
          <MainTable lessonsData={Lessons_List_Logoped} />
        </MainWrapper>
      </Container>
    </>
  );
};

export default LogopedPage;
