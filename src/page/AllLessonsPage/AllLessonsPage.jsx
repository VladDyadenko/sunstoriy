import { memo, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Container from 'components/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getDates } from 'components/FilterLesson/SelectDate/GetDateFunction';
import { choseLessonGraph } from 'redux/Lesson/lessonOperetion';
import { selectChoseLessons } from 'redux/Lesson/lessonSelector';
import AllPageFilter from 'components/AllPageFilter/AllPageFilter';
import { Collapse } from 'antd';
import OfficeScheduleOnDay from 'components/ChoseLessonData/OfficeScheduleOnDay/OfficeScheduleOnDay';

const AllLessonsPage = () => {
  const [dateCurrentLesson, setLessonDates] = useState(null);
  const [uniquDates, setUniquDates] = useState(null);
  const [lessons, setLessons] = useState(null);

  const [offices, setOffices] = useState([
    'Сенсорна',
    'Логопед',
    'Корекційний',
    'Preschool',
    'Preschool-інклюзія',
  ]);

  const dispatch = useDispatch();

  const choseLessons = useSelector(selectChoseLessons);

  useEffect(() => {
    const startDateFormat = dayjs().startOf('week').format('YYYY-MM-DD');
    const endDateFormat = dayjs().endOf('week').format('YYYY-MM-DD');
    const dateString = [startDateFormat, endDateFormat];

    const startDate = new Date(dateString[0]);
    const endDate = new Date(dateString[1]);
    const dates = getDates(startDate, endDate);
    const initialDates = dates?.map(date => date.valueOf());
    const initialDateValues = initialDates?.map(date => date.valueOf());
    setLessonDates(initialDateValues);
    if (dateCurrentLesson?.length > 0) {
      dispatch(choseLessonGraph({ offices, dateCurrentLesson }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (lessons?.length > 0) {
      const uniqueDates = [
        ...new Set(lessons.map(lesson => lesson.dateLesson)),
      ];

      setUniquDates(uniqueDates);
    } else setUniquDates(null);
  }, [lessons]);

  const items = uniquDates?.map(date => {
    return {
      key: date,
      label: <span>{dayjs(date).format('DD-MM-YYYY')}</span>,
      children: <OfficeScheduleOnDay lessons={lessons} date={date} />,
    };
  });

  return (
    <Container>
      <AllPageFilter
        offices={offices}
        setOffices={setOffices}
        setLessonDates={setLessonDates}
        dateCurrentLesson={dateCurrentLesson}
        choseLessons={choseLessons}
        setLessons={setLessons}
        lessons={lessons}
      />
      <Collapse style={{ overflow: 'auto' }} items={items} />
    </Container>
  );
};

export default memo(AllLessonsPage);
