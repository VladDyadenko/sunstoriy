import { TEACHERS_SENSORNAYA } from 'assets/constants/mainConstans';
import {
  ColorMarker,
  InfoContainer,
  TacherCheck,
  TeacherInfo,
  TeacherTitle,
  WrapperTeacher,
} from './TeacherPanel.styled';

function TeacherPanel() {
  return (
    <WrapperTeacher>
      <TeacherTitle>Cпеціалісти:</TeacherTitle>
      <ul>
        {TEACHERS_SENSORNAYA.map(
          ({ teacherName, teacherSurname, teacherColor }) => (
            <li>
              <InfoContainer>
                <TeacherInfo>{teacherName}</TeacherInfo>
                <TeacherInfo>{teacherSurname}</TeacherInfo>
              </InfoContainer>
              <ColorMarker aria-current={teacherColor} />
              <TacherCheck type="checkbox" />
            </li>
          )
        )}
      </ul>
    </WrapperTeacher>
  );
}

export default TeacherPanel;
