import { useDispatch, useSelector } from 'react-redux';
import { useState, memo, useEffect } from 'react';
import MainTable from 'ui/MainTable/MainTable';
import Container from 'components/Container/Container';
import { MainWrapper } from 'components/ContainerMain/ContainerMain.styled';
import FilterLesson from 'components/FilterLesson/FilterLesson';
import { selectLessonsSensornaya } from 'redux/offices/officesSelector';
import {
  deleteLessonByOfficeAndId,
  selectedLessonsByDateTeacher,
} from 'redux/offices/officesOperetion';
import SelectDate from 'components/FilterLesson/SelectDate/SelectDate';
import { localStorageHelper } from 'helpers/helperLocalStorage';
import ButtonAddLesson from 'ui/ButtonAddLesson/ButtonAddLesson';
import { useLessonsDates } from 'hooks/useLessonsDates';
import { useUniqueTeacher } from 'hooks/useUniqueTeacher';
import { useFilteredLessonsTeachers } from 'hooks/useFilteredLessonsTeachers';

function SensornayaPage() {
  const dispatch = useDispatch();

  const lessonsChosePeriod = useSelector(selectLessonsSensornaya);
  const [teachers, setTeachers] = useState(null);
  const [teacher, setTeacher] = useState([]);
  const [lessons, setLessons] = useState(null);
  const [dateCurrentLesson, setLessonDates] = useState(
    localStorageHelper.getData('Sensornaya')
  );
  const [type, setType] = useState('Період');

  const offices = ['Сенсорна'];

  useEffect(() => {
    if (dateCurrentLesson && offices.length > 0) {
      const choesData = { offices, dateCurrentLesson };
      dispatch(selectedLessonsByDateTeacher(choesData));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLessonsDates('Sensornaya', setLessonDates, selectedLessonsByDateTeacher, [
    'Сенсорна',
  ]);

  useUniqueTeacher(lessonsChosePeriod, setTeachers);

  useFilteredLessonsTeachers(lessonsChosePeriod, setLessons, teacher);
  const items = [
    {
      key: 1,
      label: 'Параметри відбору',
      children: (
        <SelectDate
          pageName="Sensornaya"
          office="Сенсорна"
          type={type}
          setType={setType}
          setLessonDates={setLessonDates}
          dateCurrentLesson={dateCurrentLesson}
          teachers={teachers}
          teacher={teacher}
          setTeacher={setTeacher}
          onLessonsChange={choesData => {
            return dispatch(selectedLessonsByDateTeacher(choesData));
          }}
          offices={offices}
        />
      ),
    },
  ];

  return (
    <>
      <Container>
        <FilterLesson currentItems={items} />
        {lessonsChosePeriod?.length === 0 && (
          <ButtonAddLesson pageName="Сенсорна" />
        )}
        <MainWrapper>
          {lessons?.length > 0 && (
            <MainTable
              lessons={lessons}
              onLessonsDelete={lesson => {
                return dispatch(deleteLessonByOfficeAndId(lesson._id));
              }}
              office="Сенсорна"
            />
          )}
        </MainWrapper>
      </Container>
    </>
  );
}

export default memo(SensornayaPage);
