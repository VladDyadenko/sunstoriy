import {
  DescrLessonWrapper,
  DescrOneLesson,
  OfficeContainer,
  OfficeName,
  TimeContainer,
  TimeLessonWrapper,
  TimeOneLesson,
} from './OfficeScheduleOnDay.styled';

const OfficeScheduleOnDay = ({ lesson, child, teacher }) => {
  return (
    <>
      <TimeContainer>
        <TimeLessonWrapper>
          <TimeOneLesson></TimeOneLesson>
          <TimeOneLesson>Час заянть</TimeOneLesson>
          <TimeOneLesson>Час заянть</TimeOneLesson>
        </TimeLessonWrapper>
      </TimeContainer>

      <OfficeContainer>
        <OfficeName>Office</OfficeName>

        <DescrLessonWrapper>
          <DescrOneLesson>Заняття</DescrOneLesson>
          <DescrOneLesson>Заняття</DescrOneLesson>
          <DescrOneLesson>Заняття</DescrOneLesson>
          <DescrOneLesson>Заняття</DescrOneLesson>
        </DescrLessonWrapper>
      </OfficeContainer>
    </>
  );
};

export default OfficeScheduleOnDay;
