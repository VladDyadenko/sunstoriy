import { memo, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Container from 'components/Container/Container';
import { useSelector } from 'react-redux';
import AllPageFilter from 'components/AllPageFilter/AllPageFilter';
import OfficeScheduleOnDay from 'components/ChoseLessonData/OfficeScheduleOnDay/OfficeScheduleOnDay';
import { localStorageHelper } from 'helpers/helperLocalStorage';
import { arrayOffices } from 'assets/constants/AddLessonsConstans';
import { AllLessonCollaps } from './AllLessonsPage.styled';
import { selectedLessonsByDateTeacher } from 'redux/offices/officesOperetion';
import { useLessonsDates } from 'hooks/useLessonsDates';
import { selectAllLessons } from 'redux/offices/officesSelector';

const AllLessonsPage = () => {
  const choseLessons = useSelector(selectAllLessons);

  const [dateCurrentLesson, setLessonDates] = useState(
    localStorageHelper.getData('AllLessons')
  );

  const [uniquDates, setUniquDates] = useState(null);
  const [lessons, setLessons] = useState(null);
  const [offices, setOffices] = useState(arrayOffices);
  // const dispatch = useDispatch();

  useLessonsDates('AllLessons', setLessonDates, selectedLessonsByDateTeacher, {
    offices,
  });

  // useEffect(() => {
  //   const storedDate = localStorageHelper.getData('AllLessons');

  //   if (storedDate) {
  //     setLessonDates(storedDate);
  //   } else {
  //     const startDateFormat = dayjs().startOf('week').format('YYYY-MM-DD');
  //     const endDateFormat = dayjs().endOf('week').format('YYYY-MM-DD');
  //     const dateString = [startDateFormat, endDateFormat];

  //     const startDate = new Date(dateString[0]);
  //     const endDate = new Date(dateString[1]);
  //     const dates = getDates(startDate, endDate);
  //     const initialDates = dates?.map(date => date.valueOf());
  //     const initialDateValues = initialDates?.map(date => date.valueOf());
  //     setLessonDates(initialDateValues);
  //     localStorageHelper.setData('AllLessons', initialDateValues);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (dateCurrentLesson?.length > 0) {
  //     dispatch(selectedLessonsByDateTeacher({ offices, dateCurrentLesson }));
  //   }
  // }, [dateCurrentLesson, dispatch, offices]);

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
