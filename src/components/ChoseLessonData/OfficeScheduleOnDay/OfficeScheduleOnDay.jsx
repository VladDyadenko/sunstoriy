import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DescrLessonWrapper,
  LessonContainer,
  LessonFreeContainer,
  OfficeContainer,
  OfficeName,
  TimeContainer,
  TimeEmpty,
  TimeLessonWrapper,
  TimeOneLesson,
} from './OfficeScheduleOnDay.styled';
import { formatTimeRange } from 'assets/constants/transformation';
import LessonTableCard from 'ui/LessonTableCard/LessonTableCard';
import FreeTableItem from 'ui/FreeTableItem/FreeTableItem';
import { useDispatch } from 'react-redux';
import { deleteLessonById } from 'redux/Lesson/lessonOperetion';

const extractTimeFromISOString = dateTimeString => {
  const timeString = new Date(dateTimeString).toLocaleTimeString('en-US', {
    timeZone: 'UTC',
  });
  return timeString;
};

const OfficeScheduleOnDay = ({ lessons, date }) => {
  const [uniquTime, setUniquTime] = useState([]);
  const [uniquOffice, setUniquOffice] = useState([]);
  const [lessonOneDay, setLessonOneDay] = useState([]);

  const dispatch = useDispatch();

  const roundToTime = timeString => {
    const date = new Date(timeString);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}`;
  };

  const filterLessonsByTimeAndOffice = (office, time) =>
    lessonOneDay?.filter(
      lesson =>
        lesson.office === office &&
        roundToTime(lesson.timeLesson[0]) === roundToTime(time[0]) &&
        roundToTime(lesson.timeLesson[1]) === roundToTime(time[1])
    );

  useEffect(() => {
    if (lessons) {
      const lessonThisDate = lessons.filter(
        lesson => lesson.dateLesson === date
      );
      setLessonOneDay(lessonThisDate);

      if (lessonThisDate.length > 0) {
        const areTimeIntervalsEqual = (intervalA, intervalB) => {
          const roundedIntervalA = intervalA.map(extractTimeFromISOString);
          const roundedIntervalB = intervalB.map(extractTimeFromISOString);
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
          )
          .sort((timeA, timeB) => {
            const timePartA = timeA[0].split('T')[1];
            const timePartB = timeB[0].split('T')[1];
            return timePartA.localeCompare(timePartB);
          });

        const uniquOffice = [
          ...new Set(lessonThisDate.map(lesson => lesson.office)),
        ];
        setUniquTime(uniquTimeDate);
        setUniquOffice(uniquOffice);
      }
    }
  }, [date, lessons]);

  return (
    <>
      <TimeContainer>
        <TimeLessonWrapper>
          <TimeEmpty></TimeEmpty>
          {uniquTime.map(time => (
            <TimeOneLesson key={time}>{formatTimeRange(time)}</TimeOneLesson>
          ))}
        </TimeLessonWrapper>
      </TimeContainer>

      {uniquOffice.map((office, index) => (
        <OfficeContainer key={index}>
          <OfficeName key={office}>{office}</OfficeName>
          <DescrLessonWrapper>
            {uniquTime.map((time, index) => {
              const filteredLessons = filterLessonsByTimeAndOffice(
                office,
                time
              );
              return (
                <div key={index}>
                  {filteredLessons && filteredLessons.length > 0 ? (
                    filteredLessons.map(lesson => {
                      return (
                        <LessonContainer
                          aria-current={lesson ? lesson.teacherColor : ''}
                          key={lesson._id}
                        >
                          <LessonTableCard
                            lesson={lesson}
                            onLessonsDelete={lesson => {
                              return dispatch(deleteLessonById(lesson._id));
                            }}
                          />
                        </LessonContainer>
                      );
                    })
                  ) : (
                    <LessonFreeContainer
                      key={`free_${office}_${JSON.stringify(time)}`}
                    >
                      <Link
                        to={`/lesson?dateFreeLesson=${date}&officeFreeLesson=${office}&timeFreeLesson=${JSON.stringify(
                          time
                        )}`}
                      >
                        <FreeTableItem />
                      </Link>
                    </LessonFreeContainer>
                  )}
                </div>
              );
            })}
          </DescrLessonWrapper>
        </OfficeContainer>
      ))}
    </>
  );
};

export default OfficeScheduleOnDay;
