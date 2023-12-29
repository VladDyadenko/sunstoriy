import { memo, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Container from 'components/Container/Container';
import FilterLesson from 'components/FilterLesson/FilterLesson';
import { useDispatch, useSelector } from 'react-redux';
import { getDates } from 'components/FilterLesson/SelectDate/GetDateFunction';
import SelectDate from 'components/FilterLesson/SelectDate/SelectDate';
import ChooseDataLessons from 'components/ChoseLessonData/ChooseDataLessons/ChooseDataLessons';
import { ContainerDataOffices } from './AllLessonsPage.styled';
import { choseLessonGraph } from 'redux/Lesson/lessonOperetion';
import { selectChoseLessons } from 'redux/Lesson/lessonSelector';

const AllLessonsPage = () => {
  //   const [teachers, setTeachers] = useState(null);
  const [teacher, setTeacher] = useState([]);
  const [teachers, setTeachers] = useState(null);
  const [lessons, setLessons] = useState(null);
  const [type, setType] = useState('Одне заняття');
  const [dateCurrentLesson, setLessonDates] = useState(null);
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

  //   console.log('currentLesson', dateCurrentLesson);
  //   console.log('offices', offices);
  //   console.log('choseLessons', choseLessons);
  //   console.log('teacher', teacher);
  //   console.log('teachers', teachers);
  console.log('lessons', lessons);

  useEffect(() => {
    const uniqueTeachers = Array.from(
      new Set(
        choseLessons?.map(
          lesson => `${lesson.teacherName} ${lesson.teacherSurname}`
        )
      )
    );
    setTeachers(uniqueTeachers);
  }, [choseLessons]);

  useEffect(() => {
    if (choseLessons && teacher && teacher.length > 0) {
      const filteredLessons = choseLessons?.filter(lesson => {
        const teacherFullName = `${lesson.teacherName} ${lesson.teacherSurname}`;
        return teacher.includes(teacherFullName);
      });

      setLessons(filteredLessons);
    } else {
      setLessons(choseLessons);
    }
  }, [choseLessons, teacher]);

  const items = [
    {
      key: 1,
      label: 'Параметри відбору',
      children: (
        <>
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

          <SelectDate
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
        </>
      ),
    },
  ];
  return (
    <Container>
      <FilterLesson currentItems={items} />
    </Container>
  );
};

export default memo(AllLessonsPage);
