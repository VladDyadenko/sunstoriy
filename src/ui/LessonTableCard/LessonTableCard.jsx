import { InfoColor, InfoContainer, Wrapper } from './LessonTableCard.styled';

function LessonTableCard({ lesson }) {
  return (
    <Wrapper>
      <InfoContainer>
        <p>{lesson.childName}</p>
        <p>{lesson.teacherName}</p>
      </InfoContainer>
      <InfoColor aria-current={lesson ? lesson.teacherColor : ''}></InfoColor>
    </Wrapper>
  );
}

export default LessonTableCard;
