import MainDayPicker from 'ui/MainDayPicker/MainDayPicker';
import { MainLeftContainer } from './MainLeftPanel.styled';
import TeacherPanel from 'ui/TeachersPanel/TeacherPanel';

function MainLeftPanel({ teachersData }) {
  return (
    <MainLeftContainer>
      <MainDayPicker />
      <TeacherPanel teachersData={teachersData} />
    </MainLeftContainer>
  );
}

export default MainLeftPanel;
