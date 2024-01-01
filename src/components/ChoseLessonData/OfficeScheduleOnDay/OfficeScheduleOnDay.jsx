import { useEffect, useState } from 'react';
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

const OfficeScheduleOnDay = ({ lessons, date }) => {
  const [uniquTime, setUniquTime] = useState([]);
  const [uniquOffice, setUniquOffice] = useState([]);
  const [lessonOneDay, setLessonOneDay] = useState([]);

  const dispatch = useDispatch();

  const roundToSeconds = timeString => {
    const date = new Date(timeString);
    date.setMilliseconds(0);
    return date.toISOString();
  };

  const filterLessonsByTimeAndOffice = (office, time) =>
    lessonOneDay?.filter(
      lesson =>
        lesson.office === office &&
        roundToSeconds(lesson.timeLesson[0]) === roundToSeconds(time[0]) &&
        roundToSeconds(lesson.timeLesson[1]) === roundToSeconds(time[1])
    );

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
            {uniquTime.map(time => {
              const filteredLessons = filterLessonsByTimeAndOffice(
                office,
                time
              );
              console.log('filteredLessons', filteredLessons);

              return (
                <>
                  {filteredLessons && filteredLessons.length > 0 ? (
                    filteredLessons.map(lesson => (
                      <LessonContainer
                        aria-current={lesson ? lesson.teacherColor : ''}
                        key={lesson.id}
                      >
                        <LessonTableCard
                          lesson={lesson}
                          onLessonsDelete={lesson => {
                            return dispatch(deleteLessonById(lesson._id));
                          }}
                        />
                      </LessonContainer>
                    ))
                  ) : (
                    <LessonFreeContainer>
                      <Link
                        to={`/lesson?dateFreeLesson=${date}&officeFreeLesson=${office}&timeFreeLesson=${JSON.stringify(
                          time
                        )}`}
                      >
                        <FreeTableItem />
                      </Link>
                    </LessonFreeContainer>
                  )}
                </>
              );
            })}
          </DescrLessonWrapper>
        </OfficeContainer>
      ))}
    </div>
  );
};

export default OfficeScheduleOnDay;
