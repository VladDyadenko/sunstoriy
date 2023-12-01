import { Collapse } from 'antd';
import React, { useEffect, useState } from 'react';
import { startOfWeek, endOfWeek } from 'date-fns';
import SelectDate from './SelectDate/SelectDate';
import { getDates } from './SelectDate/GetDateFunction';

function FilterLesson() {
  const [lessonDates, setLessonDates] = useState(null);
  const [type, setType] = useState('Період');

  useEffect(() => {
    const startDate = startOfWeek(new Date(), { weekStartsOn: 1 });
    const endDate = endOfWeek(new Date(), { weekStartsOn: 1 });

    const initialDates = getDates(startDate, endDate, type);
    const initialDateValues = initialDates.map(date => date.valueOf());
    setLessonDates(initialDateValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(lessonDates);

  const items = [
    {
      key: 1,
      label: 'Параметри відбору',
      children: (
        <SelectDate
          type={type}
          setType={setType}
          setLessonDates={setLessonDates}
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
