import { useEffect, useState } from 'react';
import { Collapse } from 'antd';
import dayjs from 'dayjs';
import SelectDate from './SelectDate/SelectDate';
import { getDates } from './SelectDate/GetDateFunction';

function FilterLesson({ teachers, teacher, setTeacher, onLessonsChange }) {
  const [type, setType] = useState('Період');
  const [dateCurrentLesson, setLessonDates] = useState(null);

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
      onLessonsChange(initialDateValues);
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
          teachers={teachers}
          teacher={teacher}
          setTeacher={setTeacher}
          onLessonsChange={onLessonsChange}
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
