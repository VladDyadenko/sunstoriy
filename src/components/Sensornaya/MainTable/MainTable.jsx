import { OneDayLessons, daysOfWeekUkr } from 'assets/constants/mainConstans';
import {
  LessonsWrapper,
  LessonsContainer,
  LessonsItem,
  DayDeafult,
  DayDeafultInfo,
} from './MainTable.styled';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';

function MainTable() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(null);

  console.log(currentLesson);
  const uniqueDates = [...new Set(OneDayLessons.map(val => val.date))];

  const groupedLessons = uniqueDates.map(date =>
    OneDayLessons.filter(lesson => lesson.date === date)
  );

  function handleModalLessonCard(id) {
    setCurrentLesson(id);
    setIsOpenModal(true);
  }

  return (
    <>
      {isOpenModal && (
        <Modal onClose={isOpenModal} setIsOpenModal={setIsOpenModal} />
      )}
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
                  <LessonsItem
                    onClick={() => handleModalLessonCard(id)}
                    aria-current={teacherId}
                    key={id}
                  >
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
