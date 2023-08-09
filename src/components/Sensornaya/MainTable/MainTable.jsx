import { OneDayLessons, daysOfWeekUkr } from 'assets/constants/mainConstans';
import {
  LessonsWrapper,
  LessonsContainer,
  LessonsItem,
  DayDeafult,
  DayDeafultInfo,
} from './MainTable.styled';

function MainTable() {
  const uniqueDates = [...new Set(OneDayLessons.map(val => val.date))];

  const groupedLessons = uniqueDates.map(date =>
    OneDayLessons.filter(lesson => lesson.date === date)
  );

  return (
    <>
      <LessonsWrapper>
        {groupedLessons.map((unikDate, index) => {
          const parts = uniqueDates[index].split('.');
          const currentDate = new Date(parts[2], parts[1] - 1, parts[0]);
          const dayOfWeekUkr = daysOfWeekUkr[currentDate.getDay()];
          return (
            <LessonsContainer key={index}>
              <DayDeafult>
                <DayDeafultInfo>{uniqueDates[index]}</DayDeafultInfo>
                <DayDeafultInfo>{dayOfWeekUkr}</DayDeafultInfo>
              </DayDeafult>
              {unikDate.map(val => {
                const { child, teacherId, id } = val;

                return (
                  <LessonsItem currentcolor={teacherId} key={id}>
                    <p>{child}</p>
                  </LessonsItem>
                );
              })}
            </LessonsContainer>
          );
        })}
      </LessonsWrapper>
    </>
  );
}

export default MainTable;
