import { Collapse } from 'antd';
import React, { useEffect, useState } from 'react';
import { startOfWeek, endOfWeek } from 'date-fns';
import SelectDate from './SelectDate/SelectDate';
import { getDates } from './SelectDate/GetDateFunction';
import { useDispatch } from 'react-redux';
import { sensornayaLessons } from 'redux/Lesson/lessonOperetion';

function FilterLesson() {
  const [dateCurrentLesson, setLessonDates] = useState(null);
  const [type, setType] = useState('Період');

  const dispatch = useDispatch();

  useEffect(() => {
    const startDate = startOfWeek(new Date(), { weekStartsOn: 1 });
    const endDate = endOfWeek(new Date(), { weekStartsOn: 1 });

    const initialDates = getDates(startDate, endDate, type);
    const initialDateValues = initialDates.map(date => date.valueOf());
    setLessonDates(initialDateValues);
    dispatch(sensornayaLessons(initialDateValues));
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
