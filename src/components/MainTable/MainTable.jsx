import { useState } from 'react';
import { nanoid } from 'nanoid';

import { Lessons_List, daysOfWeekUkr } from 'assets/constants/mainConstans';
import TimeLessons from 'components/TimeLessons/TimeLessons';
import Modal from 'components/Modal/Modal';

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

function MainTable() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(null);

  const timeLessonOnList = [
    ...new Set(Lessons_List.map(lesson => lesson.time)),
  ].sort((a, b) => {
    const [startA, endA] = a.split('-').map(time => parseInt(time));
    const [startB, endB] = b.split('-').map(time => parseInt(time));

    if (startA === startB) {
      return endA - endB;
    }

    return startA - startB;
  });

  console.log(currentLesson);
  const uniqueDates = [...new Set(Lessons_List.map(val => val.date))];

  const groupedLessons = uniqueDates.map(date =>
    Lessons_List.filter(lesson => lesson.date === date)
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
                        onClick={() =>
                          lesson
                            ? handleModalLessonCard(lesson.id)
                            : handleModalLessonCard(nanoid())
                        }
                        aria-current={lesson ? lesson.teacherId : ''}
                        key={timeIndex}
                      >
                        {lesson ? (
                          <LessonTableCard lesson={lesson} />
                        ) : (
                          <FreeTableItem />
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
