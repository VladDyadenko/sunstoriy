import { memo, useState } from 'react';
import { ContainerDataOffices } from './AllPageFilter.styled';
import ChooseDataLessons from 'components/ChoseLessonData/ChooseDataLessons/ChooseDataLessons';
import FilterLesson from 'components/FilterLesson/FilterLesson';
import SelectDate from 'components/FilterLesson/SelectDate/SelectDate';
import { useDispatch } from 'react-redux';
import { useUniqueTeacher } from 'hooks/useUniqueTeacher';
import { useFilteredLessonsTeachers } from 'hooks/useFilteredLessonsTeachers';
import { selectedLessonsByDateTeacher } from 'redux/offices/officesOperetion';

const AllPageFilter = ({
  choseLessons,
  offices,
  setOffices,
  dateCurrentLesson,
  setLessonDates,
  setLessons,
}) => {
  const [type, setType] = useState('Одне заняття');
  const [teacher, setTeacher] = useState([]);
  const [teachers, setTeachers] = useState(null);

  const dispatch = useDispatch();

  useUniqueTeacher(choseLessons, setTeachers);

  useFilteredLessonsTeachers(choseLessons, setLessons, teacher);

  // useEffect(() => {
  //   const uniqueTeachers = Array.from(
  //     new Set(
  //       choseLessons?.map(
  //         lesson => `${lesson.teacherName} ${lesson.teacherSurname}`
  //       )
  //     )
  //   );
  //   setTeachers(uniqueTeachers);

  //   if (choseLessons && teacher && teacher.length > 0) {
  //     const filteredLessons = choseLessons?.filter(lesson => {
  //       const teacherFullName = `${lesson.teacherName} ${lesson.teacherSurname}`;
  //       return teacher.includes(teacherFullName);
  //     });

  //     setLessons(filteredLessons);
  //   } else {
  //     setLessons(choseLessons);
  //   }
  // }, [choseLessons, setLessons, teacher]);

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
            onLessonsChange={choesData => {
              const { dateCurrentLesson } = choesData;
              return dispatch(
                selectedLessonsByDateTeacher({ offices, dateCurrentLesson })
              );
            }}
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
