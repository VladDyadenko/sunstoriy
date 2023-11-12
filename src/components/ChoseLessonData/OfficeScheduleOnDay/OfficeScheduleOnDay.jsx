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

  const roundToSeconds = timeString => {
    const date = new Date(timeString);
    date.setMilliseconds(0);
    return date.toISOString();
  };

  useEffect(() => {
    if (lessons) {
      const lessonThisDate = lessons.filter(
        lesson => lesson.dateLesson === date
      );
      setLessonOneDay(lessonThisDate);

      if (lessonThisDate.length > 0) {
        const areTimeIntervalsEqual = (intervalA, intervalB) => {
          const roundedIntervalA = intervalA.map(roundToSeconds);
          const roundedIntervalB = intervalB.map(roundToSeconds);
          return (
            roundedIntervalA[0] === roundedIntervalB[0] &&
            roundedIntervalA[1] === roundedIntervalB[1]
          );
        };

        const uniquTimeDate = lessonThisDate
          .map(lesson => lesson.timeLesson)
          .filter(
            (time, index, self) =>
              self.findIndex(t => areTimeIntervalsEqual(t, time)) === index
          );

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
                      lesson.office === office &&
                      roundToSeconds(lesson.timeLesson[0]) ===
                        roundToSeconds(time[0]) &&
                      roundToSeconds(lesson.timeLesson[1]) ===
                        roundToSeconds(time[1])
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
