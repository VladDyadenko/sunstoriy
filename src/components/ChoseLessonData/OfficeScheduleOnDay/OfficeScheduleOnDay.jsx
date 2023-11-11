import { useEffect, useState } from 'react';
import {
  CardWrapper,
  DescrLessonWrapper,
  DescrOneLesson,
  OfficeContainer,
  OfficeName,
  TimeContainer,
  TimeEmpty,
  TimeLessonWrapper,
  TimeOneLesson,
} from './OfficeScheduleOnDay.styled';
import ScheduleCard from '../ScheduleCard/ScheduleCard';
import dayjs from 'dayjs';

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
        setUniquTime(uniquTimeDate);
        setUniquOffice(uniquOffice);
      }
    }
  }, [date, lessons]);

  const formatTimeRange = time => {
    const start = dayjs(time[0]).format('HH:mm');
    const end = dayjs(time[1]).format('HH:mm');
    return `${start} - ${end}`;
  };

  return (
    <div>
      <TimeContainer>
        <TimeLessonWrapper>
          <TimeEmpty></TimeEmpty>
          {uniquTime.map(time => (
            <TimeOneLesson key={time}>{formatTimeRange(time)}</TimeOneLesson>
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
                  ?.filter(
                    lesson =>
                      lesson.office === office && lesson.timeLesson === time
                  )
                  .map(lesson => (
                    <CardWrapper key={lesson._id}>
                      <ScheduleCard lessonData={lesson} />
                    </CardWrapper>
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
