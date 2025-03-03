import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import MainTable from 'ui/MainTable/MainTable';
import { MainWrapper } from 'components/ContainerMain/ContainerMain.styled';
import Container from 'components/Container/Container';
import { selectLessonsLogoped } from 'redux/offices/officesSelector';
import {
  selectedLessonsByDateTeacher,
  deleteLessonByOfficeAndId,
} from 'redux/offices/officesOperetion';
import FilterLesson from 'components/FilterLesson/FilterLesson';
import SelectDate from 'components/FilterLesson/SelectDate/SelectDate';
import { localStorageHelper } from 'helpers/helperLocalStorage';
import ButtonAddLesson from 'ui/ButtonAddLesson/ButtonAddLesson';
import { useUniqueTeacher } from 'hooks/useUniqueTeacher';
import { useFilteredLessonsTeachers } from 'hooks/useFilteredLessonsTeachers';
import { useLessonsDates } from 'hooks/useLessonsDates';

const LogopedPage = () => {
  const lessonsChosePeriod = useSelector(selectLessonsLogoped);

  const [teachers, setTeachers] = useState(null);
  const [teacher, setTeacher] = useState([]);
  const [lessons, setLessons] = useState(null);
  const [dateCurrentLesson, setLessonDates] = useState(
    localStorageHelper.getData('Logoped')
  );
  const [type, setType] = useState('Період');

  const dispatch = useDispatch();

  useLessonsDates('Logoped', setLessonDates, selectedLessonsByDateTeacher, [
    'Логопед',
  ]);
  useUniqueTeacher(lessonsChosePeriod, setTeachers);

  useFilteredLessonsTeachers(lessonsChosePeriod, setLessons, teacher);

  const items = [
    {
      key: 1,
      label: 'Параметри відбору',
      children: (
        <SelectDate
          pageName="Logoped"
          office="Логопед"
          type={type}
          setType={setType}
          setLessonDates={setLessonDates}
          dateCurrentLesson={dateCurrentLesson}
          teachers={teachers}
          teacher={teacher}
          setTeacher={setTeacher}
          onLessonsChange={lessons =>
            dispatch(selectedLessonsByDateTeacher(lessons))
          }
        />
      ),
    },
  ];

  return (
    <>
      <Container>
        <FilterLesson currentItems={items} />
        {lessonsChosePeriod?.length === 0 && (
          <ButtonAddLesson pageName="Логопед" />
        )}
        <MainWrapper>
          {lessons?.length > 0 && (
            <MainTable
              lessons={lessons}
              onLessonsDelete={lesson => {
                return dispatch(deleteLessonByOfficeAndId(lesson._id));
              }}
              office="Логопед"
            />
          )}
        </MainWrapper>
      </Container>
    </>
  );
};

export default LogopedPage;
