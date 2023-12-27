import { useState, memo } from 'react';
import { Collapse } from 'antd';

import SelectDate from './SelectDate/SelectDate';

function FilterLesson({
  teachers,
  teacher,
  setTeacher,
  onLessonsChange,
  dateCurrentLesson,
  setLessonDates,
}) {
  const [type, setType] = useState('Період');

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

export default memo(FilterLesson);
