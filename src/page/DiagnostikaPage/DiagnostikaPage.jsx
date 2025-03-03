import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, memo } from 'react';

import MainTable from 'ui/MainTable/MainTable';
import Container from 'components/Container/Container';
import { MainWrapper } from 'components/ContainerMain/ContainerMain.styled';
import FilterLesson from 'components/FilterLesson/FilterLesson';
import { selectLessonsDiagnostika } from 'redux/offices/officesSelector';
import {
  selectedLessonsByDateTeacher,
  deleteLessonByOfficeAndId,
} from 'redux/offices/officesOperetion';
import SelectDate from 'components/FilterLesson/SelectDate/SelectDate';
import { localStorageHelper } from 'helpers/helperLocalStorage';
import ButtonAddLesson from 'ui/ButtonAddLesson/ButtonAddLesson';
import { useLessonsDates } from 'hooks/useLessonsDates';
import { useFilteredLessonsTeachers } from 'hooks/useFilteredLessonsTeachers';
import { useUniqueTeacher } from 'hooks/useUniqueTeacher';

const DiagnostikaPage = () => {
  const dispatch = useDispatch();

  const lessonsChosePeriod = useSelector(selectLessonsDiagnostika);

  const [teachers, setTeachers] = useState(null);
  const [teacher, setTeacher] = useState([]);
  const [lessons, setLessons] = useState(null);
  const [dateCurrentLesson, setLessonDates] = useState(
    localStorageHelper.getData('Diagnostika')
  );
  const [type, setType] = useState('Період');

  useLessonsDates('Diagnostika', setLessonDates, selectedLessonsByDateTeacher, [
    'Діагностика',
  ]);

  useUniqueTeacher(lessonsChosePeriod, setTeachers);

  useFilteredLessonsTeachers(lessonsChosePeriod, setLessons, teacher);

  const items = [
    {
      key: 1,
      label: 'Параметри відбору',
      children: (
        <SelectDate
          pageName="Diagnostika"
          office="Діагностика"
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
          <ButtonAddLesson pageName="Діагностика" />
        )}
        <MainWrapper>
          {lessons?.length > 0 && (
            <MainTable
              lessons={lessons}
              onLessonsDelete={lesson => {
                return dispatch(deleteLessonByOfficeAndId(lesson._id));
              }}
              office="Діагностика"
            />
          )}
        </MainWrapper>
      </Container>
    </>
  );
};

export default memo(DiagnostikaPage);
