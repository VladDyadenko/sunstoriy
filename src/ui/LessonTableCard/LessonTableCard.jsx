import { InfoColor, InfoContainer, Wrapper } from './LessonTableCard.styled';

function LessonTableCard({ lesson }) {
  return (
    <Wrapper>
      <InfoContainer>
        <p>{lesson.child}</p>
        <p>{lesson.time}</p>
      </InfoContainer>
      <InfoColor aria-current={lesson ? lesson.teacherId : ''}></InfoColor>
    </Wrapper>
  );
}

export default LessonTableCard;
