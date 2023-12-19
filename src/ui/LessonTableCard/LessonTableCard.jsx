import {
  InfoChild,
  InfoColor,
  InfoContainer,
  InfoTeacher,
  Wrapper,
} from './LessonTableCard.styled';

function LessonTableCard({ lesson }) {
  return (
    <Wrapper>
      <InfoContainer>
        <InfoChild>Дитина:</InfoChild>
        <InfoChild>
          {lesson.childName} {lesson.childSurname}
        </InfoChild>
        <InfoTeacher>Фахівець:</InfoTeacher>
        <InfoTeacher>
          {lesson.teacherName} {lesson.teacherSurname}
        </InfoTeacher>
      </InfoContainer>
      <InfoColor aria-current={lesson ? lesson.teacherColor : ''}></InfoColor>
    </Wrapper>
  );
}

export default LessonTableCard;
