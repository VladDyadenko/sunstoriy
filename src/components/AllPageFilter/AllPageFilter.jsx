import { memo, useEffect, useState } from 'react';
import { ContainerDataOffices } from './AllPageFilter.styled';
import ChooseDataLessons from 'components/ChoseLessonData/ChooseDataLessons/ChooseDataLessons';
import FilterLesson from 'components/FilterLesson/FilterLesson';
import SelectDate from 'components/FilterLesson/SelectDate/SelectDate';
import { useDispatch } from 'react-redux';
import { choseLessonGraph } from 'redux/Lesson/lessonOperetion';

const AllPageFilter = ({
  choseLessons,
  offices,
  setOffices,
  dateCurrentLesson,
  setLessonDates,
  lessons,
  setLessons,
}) => {
  const [type, setType] = useState('Одне заняття');
  const [teacher, setTeacher] = useState([]);
  const [teachers, setTeachers] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const uniqueTeachers = Array.from(
      new Set(
        choseLessons?.map(
          lesson => `${lesson.teacherName} ${lesson.teacherSurname}`
        )
      )
    );
    setTeachers(uniqueTeachers);

    if (choseLessons && teacher && teacher.length > 0) {
      const filteredLessons = choseLessons?.filter(lesson => {
        const teacherFullName = `${lesson.teacherName} ${lesson.teacherSurname}`;
        return teacher.includes(teacherFullName);
      });

      setLessons(filteredLessons);
    } else {
      setLessons(choseLessons);
    }
  }, [choseLessons, setLessons, teacher]);

  const items = [
    {
      key: 1,
      label: 'Параметри відбору',
      children: (
        <>
          <SelectDate
            pageName="AllLessons"
            type={type}
            setType={setType}
            setLessonDates={setLessonDates}
            dateCurrentLesson={dateCurrentLesson}
            teachers={teachers}
            teacher={teacher}
            setTeacher={setTeacher}
            onLessonsChange={dateCurrentLesson =>
              dispatch(choseLessonGraph({ offices, dateCurrentLesson }))
            }
          />
          <ContainerDataOffices>
            <ChooseDataLessons
              setOffices={setOffices}
              currentDefaultOffice={[
                'Сенсорна',
                'Логопед',
                'Корекційний',
                'Preschool',
                'Preschool-інклюзія',
              ]}
            />
          </ContainerDataOffices>
        </>
      ),
    },
  ];
  return (
    <>
      <FilterLesson currentItems={items} />
    </>
  );
};

export default memo(AllPageFilter);
