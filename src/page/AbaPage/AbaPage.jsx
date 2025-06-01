import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, memo } from 'react';

import MainTable from 'ui/MainTable/MainTable';
import Container from 'components/Container/Container';
import { MainWrapper } from 'components/ContainerMain/ContainerMain.styled';
import FilterLesson from 'components/FilterLesson/FilterLesson';
import { selectLessonsAbaterapiya } from 'redux/offices/officesSelector';
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

const AbaPage = () => {
  const dispatch = useDispatch();

  const lessonsChosePeriod = useSelector(selectLessonsAbaterapiya);

  const [teachers, setTeachers] = useState(null);
  const [teacher, setTeacher] = useState([]);
  const [lessons, setLessons] = useState(null);
  const [dateCurrentLesson, setLessonDates] = useState(
    localStorageHelper.getData('Abaterapiya')
  );
  const [type, setType] = useState('Період');
  const offices = ['АВАтерапія'];
  useEffect(() => {
    if (dateCurrentLesson) {
      const choesData = { offices, dateCurrentLesson };
      dispatch(selectedLessonsByDateTeacher(choesData));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLessonsDates('Abaterapiya', setLessonDates, selectedLessonsByDateTeacher, [
    'АВАтерапія',
  ]);

  useUniqueTeacher(lessonsChosePeriod, setTeachers);

  useFilteredLessonsTeachers(lessonsChosePeriod, setLessons, teacher);

  const items = [
    {
      key: 1,
      label: 'Параметри відбору',
      children: (
        <SelectDate
          pageName="Abaterapiya"
          office="АВАтерапія"
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
          <ButtonAddLesson pageName="АВАтерапія" />
        )}
        <MainWrapper>
          {lessons?.length > 0 && (
            <MainTable
              lessons={lessons}
              onLessonsDelete={lesson => {
                return dispatch(deleteLessonByOfficeAndId(lesson._id));
              }}
              office="АВАтерапія"
            />
          )}
        </MainWrapper>
      </Container>
    </>
  );
};

export default memo(AbaPage);
