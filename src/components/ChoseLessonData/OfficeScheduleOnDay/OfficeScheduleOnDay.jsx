import { useEffect, useState } from 'react';
import {
  DescrLessonWrapper,
  DescrOneLesson,
  OfficeContainer,
  OfficeName,
  TimeContainer,
  TimeLessonWrapper,
  TimeOneLesson,
} from './OfficeScheduleOnDay.styled';

const OfficeScheduleOnDay = ({ lessons, date }) => {
  const [uniquTime, setUniquTime] = useState([]);
  const [uniquOffice, setUniquOffice] = useState([]);
  const [lessonOneDay, setLessonOneDay] = useState([]);

  useEffect(() => {
    if (lessons) {
      const lessonThisDate = lessons.filter(
        lesson => lesson.dateLesson === date
      );
      setLessonOneDay(lessonThisDate);

      if (lessonThisDate.length > 0) {
        const uniquTimeDate = [
          ...new Set(lessonThisDate.map(lesson => lesson.timeLesson)),
        ];
        const uniquOffice = [
          ...new Set(lessonThisDate.map(lesson => lesson.office)),
        ];
        const sortedTime = uniquTimeDate.sort((a, b) => {
          const getTimeValue = time => {
            const [hours, minutes] = time
              .split(' - ')[0]
              .split(':')
              .map(Number);
            return hours * 60 + minutes;
          };

          return getTimeValue(a) - getTimeValue(b);
        });
        setUniquTime(sortedTime);
        setUniquOffice(uniquOffice);
      }
    }
  }, [date, lessons]);

  return (
    <div>
      <TimeContainer>
        <TimeLessonWrapper>
          <TimeOneLesson></TimeOneLesson>
          {uniquTime.map(time => (
            <TimeOneLesson key={time}>{time}</TimeOneLesson>
          ))}
        </TimeLessonWrapper>
      </TimeContainer>

      {uniquOffice.map(office => (
        <OfficeContainer key={office}>
          <OfficeName>{office}</OfficeName>
          <DescrLessonWrapper>
            {uniquTime.map(time => (
              <DescrOneLesson key={time}>
                {lessonOneDay
                  .filter(
                    lesson =>
                      lesson.office === office && lesson.timeLesson === time
                  )
                  .map(lesson => (
                    <div key={lesson._id}>{lesson.teacherName}</div>
                  ))}
              </DescrOneLesson>
            ))}
          </DescrLessonWrapper>
        </OfficeContainer>
      ))}
    </div>
  );
};

export default OfficeScheduleOnDay;
