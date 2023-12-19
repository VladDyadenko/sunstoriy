import { Collapse } from 'antd';
import { useEffect, useState } from 'react';
import SelectDate from './SelectDate/SelectDate';
import { getDates } from './SelectDate/GetDateFunction';
import { useDispatch } from 'react-redux';
import { sensornayaLessons } from 'redux/Lesson/lessonOperetion';
import dayjs from 'dayjs';

function FilterLesson() {
  const [dateCurrentLesson, setLessonDates] = useState(null);
  const [type, setType] = useState('Період');
  const dispatch = useDispatch();

  useEffect(() => {
    const startDateFormat = dayjs().startOf('week').format('YYYY-MM-DD');
    const endDateFormat = dayjs().endOf('week').format('YYYY-MM-DD');
    const dateString = [startDateFormat, endDateFormat];

    const startDate = new Date(dateString[0]);
    const endDate = new Date(dateString[1]);
    const dates = getDates(startDate, endDate);
    const initialDates = dates.map(date => date.valueOf());
    const initialDateValues = initialDates.map(date => date.valueOf());
    setLessonDates(initialDateValues);
    if (initialDateValues.length > 0) {
      dispatch(sensornayaLessons(initialDateValues));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const items = [
    {
      key: 1,
      label: 'Параметри відбору',
      children: (
        <SelectDate
          type={type}
          setType={setType}
          setLessonDates={setLessonDates}
          dateCurrentLesson={dateCurrentLesson}
        />
      ),
    },
  ];
  return (
    <>
      <Collapse style={{ overflow: 'auto' }} items={items} />
    </>
  );
}

export default FilterLesson;
