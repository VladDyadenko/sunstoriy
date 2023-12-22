import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import MainTable from 'ui/MainTable/MainTable';

import Container from 'components/Container/Container';
import { MainWrapper } from 'components/ContainerMain/ContainerMain.styled';
import FilterLesson from 'components/FilterLesson/FilterLesson';
import { selectLessonsSensornaya } from 'redux/offices/officesSelector';
import {
  deleteSensornayaLessonById,
  sensornayaLessons,
} from 'redux/offices/officesOperetion';

function SensornayaPage() {
  const lessonsChosePeriod = useSelector(selectLessonsSensornaya);

  const [teachers, setTeachers] = useState(null);
  const [teacher, setTeacher] = useState([]);
  const [lessons, setLessons] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const uniqueTeachers = Array.from(
      new Set(
        lessonsChosePeriod.map(
          lesson => `${lesson.teacherName} ${lesson.teacherSurname}`
        )
      )
    );
    setTeachers(uniqueTeachers);
  }, [lessonsChosePeriod]);

  useEffect(() => {
    if (lessonsChosePeriod && teacher && teacher.length > 0) {
      const filteredLessons = lessonsChosePeriod?.filter(lesson => {
        const teacherFullName = `${lesson.teacherName} ${lesson.teacherSurname}`;
        return teacher.includes(teacherFullName);
      });

      setLessons(filteredLessons);
    } else {
      setLessons(lessonsChosePeriod);
    }
  }, [lessonsChosePeriod, teacher]);

  return (
    <>
      <Container>
        <FilterLesson
          teachers={teachers}
          teacher={teacher}
          setTeacher={setTeacher}
          onLessonsChange={lessons => dispatch(sensornayaLessons(lessons))}
        />
        <MainWrapper>
          {lessons?.length > 0 && (
            <MainTable
              lessons={lessons}
              onLessonsDelete={lesson => {
                return dispatch(deleteSensornayaLessonById(lesson._id));
              }}
              office="Сенсорна"
            />
          )}
        </MainWrapper>
      </Container>
    </>
  );
}

export default SensornayaPage;
