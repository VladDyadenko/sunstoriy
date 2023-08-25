import { nanoid } from 'nanoid';
import { daysOfWeekUkr } from 'assets/constants/mainConstans';
import TimeLessons from 'ui/TimeLessons/TimeLessons';

import {
  LessonsWrapper,
  LessonsContainer,
  LessonsItem,
  DayDeafult,
  DayDeafultInfo,
  DayWrapper,
  DayContainer,
} from './MainTable.styled';
import FreeTableItem from 'ui/FreeTableItem/FreeTableItem';
import LessonTableCard from 'ui/LessonTableCard/LessonTableCard';
import { Link } from 'react-router-dom';

function MainTable({ lessonsData }) {
  const timeLessonOnList = [
    ...new Set(lessonsData.map(lesson => lesson.time)),
  ].sort((a, b) => {
    const [startA, endA] = a.split('-').map(time => parseInt(time));
    const [startB, endB] = b.split('-').map(time => parseInt(time));

    if (startA === startB) {
      return endA - endB;
    }

    return startA - startB;
  });

  const uniqueDates = [...new Set(lessonsData.map(val => val.date))].sort(
    (a, b) => {
      const [dayA, monthA, yearA] = a.split('.').map(part => parseInt(part));
      const [dayB, monthB, yearB] = b.split('.').map(part => parseInt(part));

      if (yearA !== yearB) {
        return yearA - yearB;
      }
      if (monthA !== monthB) {
        return monthA - monthB;
      }
      return dayA - dayB;
    }
  );
  const groupedLessons = uniqueDates.map(date =>
    lessonsData.filter(lesson => lesson.date === date)
  );

  return (
    <>
      <TimeLessons timeLessonOnList={timeLessonOnList} />
      <LessonsWrapper>
        <DayWrapper>
          {uniqueDates.map((val, index) => {
            const parts = uniqueDates[index].split('.');
            const currentDate = new Date(parts[2], parts[1] - 1, parts[0]);
            const dayOfWeekUkr = daysOfWeekUkr[currentDate.getDay()];
            return (
              <DayContainer key={index}>
                <DayDeafult>
                  <DayDeafultInfo>{uniqueDates[index]}</DayDeafultInfo>
                  <DayDeafultInfo>{dayOfWeekUkr}</DayDeafultInfo>
                </DayDeafult>
                <LessonsContainer>
                  {timeLessonOnList.map((time, timeIndex) => {
                    const lesson = groupedLessons[index].find(
                      day => day.time === time
                    );

                    return (
                      <LessonsItem
                        aria-current={lesson ? lesson.teacherId : ''}
                        key={timeIndex}
                      >
                        {lesson ? (
                          <Link to={`/lesson/${lesson.id}`}>
                            <LessonTableCard lesson={lesson} />
                          </Link>
                        ) : (
                          <Link to={`/lesson/${nanoid()}`}>
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
    </>
  );
}

export default MainTable;
