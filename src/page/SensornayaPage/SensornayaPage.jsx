import MainTable from 'ui/MainTable/MainTable';
import Container from 'components/Container/Container';
import { MainWrapper } from 'components/ContainerMain/ContainerMain.styled';

import { Lessons_List } from 'assets/constants/mainConstans';
import DayPickerDrawer from 'ui/MainDayPicker/DayPickerDrawer/DayPickerDrawer';

function SensornayaPage() {
  return (
    <>
      <Container>
        <DayPickerDrawer />
        <MainWrapper>
          <MainTable lessonsData={Lessons_List} />
        </MainWrapper>
      </Container>
    </>
  );
}

export default SensornayaPage;
