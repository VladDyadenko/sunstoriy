import MainDayPicker from 'components/MainDayPicker/MainDayPicker';
import { MainLeftContainer } from './MainLeftPanel.styled';
import TeacherPanel from 'ui/TeachersPanel/TeacherPanel';

function MainLeftPanel() {
  return (
    <MainLeftContainer>
      <MainDayPicker />
      <TeacherPanel />
    </MainLeftContainer>
  );
}

export default MainLeftPanel;
