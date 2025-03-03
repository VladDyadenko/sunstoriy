import { memo, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Container from 'components/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getDates } from 'components/FilterLesson/SelectDate/GetDateFunction';
import { choseLessonGraph } from 'redux/Lesson/lessonOperetion';
import { selectChoseLessons } from 'redux/Lesson/lessonSelector';
import AllPageFilter from 'components/AllPageFilter/AllPageFilter';
import OfficeScheduleOnDay from 'components/ChoseLessonData/OfficeScheduleOnDay/OfficeScheduleOnDay';
import { localStorageHelper } from 'helpers/helperLocalStorage';
import { arrayOffices } from 'assets/constants/AddLessonsConstans';
import { AllLessonCollaps } from './AllLessonsPage.styled';

const abortController = new AbortController();

const AllLessonsPage = () => {
  const choseLessons = useSelector(selectChoseLessons);

  const [dateCurrentLesson, setLessonDates] = useState(
    localStorageHelper.getData('AllLessons')
  );
  const [uniquDates, setUniquDates] = useState(null);
  const [lessons, setLessons] = useState(null);
  const [offices, setOffices] = useState(arrayOffices);

  const dispatch = useDispatch();

  useEffect(() => {
    const storedDate = localStorageHelper.getData('AllLessons');

    if (storedDate) {
      setLessonDates(storedDate);
    } else {
      const startDateFormat = dayjs().startOf('week').format('YYYY-MM-DD');
      const endDateFormat = dayjs().endOf('week').format('YYYY-MM-DD');
      const dateString = [startDateFormat, endDateFormat];

      const startDate = new Date(dateString[0]);
      const endDate = new Date(dateString[1]);
      const dates = getDates(startDate, endDate);
      const initialDates = dates?.map(date => date.valueOf());
      const initialDateValues = initialDates?.map(date => date.valueOf());
      setLessonDates(initialDateValues);
      localStorageHelper.setData('AllLessons', initialDateValues);
    }
  }, []);

  useEffect(() => {
    if (dateCurrentLesson?.length > 0) {
      dispatch(choseLessonGraph({ offices, dateCurrentLesson }));
    }

    return () => abortController.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateCurrentLesson, offices]);

  useEffect(() => {
    if (lessons?.length > 0) {
      const uniqueDates = [
        ...new Set(lessons.map(lesson => lesson.dateLesson)),
      ];
      uniqueDates.sort((a, b) => new Date(a) - new Date(b));

      setUniquDates(uniqueDates);
    } else {
      setUniquDates(null);
    }
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
      <AllLessonCollaps items={items} />
    </Container>
  );
};

export default memo(AllLessonsPage);
