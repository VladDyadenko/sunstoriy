import MainTable from 'ui/MainTable/MainTable';
import { Lessons_List_Logoped } from 'assets/constants/mainConstans';
import { MainWrapper } from 'components/ContainerMain/ContainerMain.styled';
import Container from 'components/Container/Container';
import DayPickerDrawer from 'ui/MainDayPicker/DayPickerDrawer/DayPickerDrawer';

const LogopedPage = () => {
  return (
    <>
      <Container>
        <DayPickerDrawer />
        <MainWrapper>
          <MainTable lessonsData={Lessons_List_Logoped} />
        </MainWrapper>
      </Container>
    </>
  );
};

export default LogopedPage;
