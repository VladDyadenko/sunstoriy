import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TimeLessons from 'ui/TimeLessons/TimeLessons';
import {
  LessonsWrapper,
  LessonsContainer,
  LessonsItem,
  DayDeafult,
  DayDeafultInfo,
  DayWrapper,
  DayContainer,
  MainTableContainer,
} from './MainTable.styled';
import FreeTableItem from 'ui/FreeTableItem/FreeTableItem';
import LessonTableCard from 'ui/LessonTableCard/LessonTableCard';
import { formatDateRange, formatDay } from 'assets/constants/transformation';

function MainTable({ lessons }) {
  const [uniquTime, setUniquTime] = useState(null);
  const [uniquDate, setUniquDate] = useState(null);
  const [groupedLessons, setGroupedLessons] = useState(null);

  const extractTimeFromISOString = dateTimeString => {
    const timeString = new Date(dateTimeString).toLocaleTimeString('en-US', {
      timeZone: 'UTC',
    });
    return timeString;
  };

  useEffect(() => {
    if (lessons) {
      const areTimeIntervalsEqual = (intervalA, intervalB) => {
        const roundedIntervalA = intervalA.map(extractTimeFromISOString);
        const roundedIntervalB = intervalB.map(extractTimeFromISOString);
        return (
          roundedIntervalA[0] === roundedIntervalB[0] &&
          roundedIntervalA[1] === roundedIntervalB[1]
        );
      };

      const uniquTimeDate = lessons
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
      setUniquTime(uniquTimeDate);

      const uniqueDates = [...new Set(lessons.map(val => val.dateLesson))]
        .map(dateString => new Date(dateString))
        .sort((a, b) => a - b)
        .map(date => date.toISOString());

      setUniquDate(uniqueDates);

      const groupedLessons = uniqueDates.map(date =>
        lessons.filter(lesson => lesson.dateLesson === date)
      );
      setGroupedLessons(groupedLessons);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessons]);

  return (
    <MainTableContainer>
      <TimeLessons timeLessonOnList={uniquTime} />
      <LessonsWrapper>
        <DayWrapper>
          {uniquDate?.map((date, index) => {
            return (
              <DayContainer key={index}>
                <DayDeafult>
                  <DayDeafultInfo>{formatDateRange(date)}</DayDeafultInfo>
                  <DayDeafultInfo>{formatDay(date)}</DayDeafultInfo>
                </DayDeafult>
                <LessonsContainer>
                  {uniquTime?.map((time, timeIndex) => {
                    const lessonsWithSameTime = groupedLessons[index].filter(
                      day => {
                        const lessonTimes = day.timeLesson.map(timeString => {
                          const lessonDate = new Date(timeString);
                          return {
                            hours: lessonDate.getHours(),
                            minutes: lessonDate.getMinutes(),
                            seconds: lessonDate.getSeconds(),
                          };
                        });

                        const targetTime = time.map(timeString => {
                          const targetDate = new Date(timeString);
                          return {
                            hours: targetDate.getHours(),
                            minutes: targetDate.getMinutes(),
                            seconds: targetDate.getSeconds(),
                          };
                        });

                        return lessonTimes.some(lessonTime =>
                          targetTime.some(
                            target =>
                              lessonTime.hours === target.hours &&
                              lessonTime.minutes === target.minutes &&
                              lessonTime.seconds === target.seconds
                          )
                        );
                      }
                    );

                    const lesson =
                      lessonsWithSameTime.length > 0
                        ? lessonsWithSameTime[0]
                        : null;

                    return (
                      <LessonsItem
                        aria-current={lesson ? lesson.teacherColor : ''}
                        key={timeIndex}
                      >
                        {lesson ? (
                          <LessonTableCard lesson={lesson} />
                        ) : (
                          <Link to={`/lesson`}>
                            <FreeTableItem />
                          </Link>
                        )}
                      </LessonsItem>
                    );
                  })}
                </LessonsContainer>
              </DayContainer>
            );
          })}
        </DayWrapper>
      </LessonsWrapper>
    </MainTableContainer>
  );
}

export default MainTable;
