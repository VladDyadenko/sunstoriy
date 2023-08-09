import { AllTimesContainer, AllTimesItem } from './LessonCardOneDay.styled';

function LessonCardOneDay({ teacherId, id, child }) {
  return (
    <AllTimesContainer>
      <AllTimesItem activeColor={teacherId} key={id}>
        <p>{child}</p>
      </AllTimesItem>
    </AllTimesContainer>
  );
}

export default LessonCardOneDay;
