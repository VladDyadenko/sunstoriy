import { ChoseLessonsContainer } from './ChoseLessonContainer.styled';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { Collapse } from 'antd';
import { selectChoseLessons } from 'redux/Lesson/lessonSelector';
import OfficeScheduleOnDay from '../OfficeScheduleOnDay/OfficeScheduleOnDay';

const ChoseLessonContainer = () => {
  const [lessons, setLessons] = useState([]);
  const [lessonDates, setLessonDates] = useState([]);
  const choseLessons = useSelector(selectChoseLessons);
  console.log(lessons);

  useEffect(() => {
    if (choseLessons?.length > 0) {
      const flattenedLessons = choseLessons.flat();
      setLessons(flattenedLessons);
      const uniqueDates = [
        ...new Set(flattenedLessons.map(lesson => lesson.dateLesson)),
      ];
      setLessonDates(uniqueDates);
    }
  }, [choseLessons]);

  const items = lessonDates?.map(date => {
    return {
      key: date,
      label: <span>{dayjs(date).format('DD-MM-YYYY')}</span>,
      children: <OfficeScheduleOnDay />,
    };
  });
  const onChange = key => {};

  return (
    <ChoseLessonsContainer>
      <Collapse items={items} onChange={onChange} />
    </ChoseLessonsContainer>
  );
};

export default ChoseLessonContainer;
