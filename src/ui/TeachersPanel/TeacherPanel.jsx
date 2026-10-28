import {
  ColorMarker,
  InfoContainer,
  TacherCheck,
  TeacherInfo,
  TeacherTitle,
  WrapperTeacher,
} from './TeacherPanel.styled';

function TeacherPanel({ teachersData }) {
  return (
    <WrapperTeacher>
      <TeacherTitle>Cпеціалісти:</TeacherTitle>
      <ul>
        {teachersData.map(({ teacherName, teacherSurname, teacherColor }) => (
          <li key={teacherColor}>
            <InfoContainer>
              <TeacherInfo>{teacherName}</TeacherInfo>
              <TeacherInfo>{teacherSurname}</TeacherInfo>
            </InfoContainer>
            <ColorMarker aria-current={teacherColor} />
            <TacherCheck type="checkbox" />
          </li>
        ))}
      </ul>
    </WrapperTeacher>
  );
}

export default TeacherPanel;
