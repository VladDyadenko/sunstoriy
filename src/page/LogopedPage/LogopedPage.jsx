import MainTable from 'ui/MainTable/MainTable';
import { MainWrapper } from 'components/ContainerMain/ContainerMain.styled';
import Container from 'components/Container/Container';
import DayPickerDrawer from 'ui/MainDayPicker/DayPickerDrawer/DayPickerDrawer';

const LogopedPage = () => {
  return (
    <>
      <Container>
        <DayPickerDrawer />
        <MainWrapper>
          <MainTable />
        </MainWrapper>
      </Container>
    </>
  );
};

export default LogopedPage;
