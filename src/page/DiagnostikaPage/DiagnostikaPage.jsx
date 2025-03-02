import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, memo } from 'react';
import dayjs from 'dayjs';

import MainTable from 'ui/MainTable/MainTable';
import Container from 'components/Container/Container';
import { MainWrapper } from 'components/ContainerMain/ContainerMain.styled';
import FilterLesson from 'components/FilterLesson/FilterLesson';
import { selectLessonsDiagnostika } from 'redux/offices/officesSelector';
import {
  deleteDiagnostikaLessonById,
  diagnostikaLessons,
} from 'redux/offices/officesOperetion';
import { getDates } from 'components/FilterLesson/SelectDate/GetDateFunction';
import SelectDate from 'components/FilterLesson/SelectDate/SelectDate';
import { localStorageHelper } from 'helpers/helperLocalStorage';
import ButtonAddLesson from 'ui/ButtonAddLesson/ButtonAddLesson';

const DiagnostikaPage = () => {
  const lessonsChosePeriod = useSelector(selectLessonsDiagnostika);
  const [teachers, setTeachers] = useState(null);
  const [teacher, setTeacher] = useState([]);
  const [lessons, setLessons] = useState(null);
  const [dateCurrentLesson, setLessonDates] = useState(
    localStorageHelper.getData('Diagnostika')
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const storedDate = localStorageHelper.getData('Diagnostika');

    if (storedDate) {
      setLessonDates(storedDate);
      dispatch(diagnostikaLessons(storedDate));
    } else {
      const startDateFormat = dayjs().startOf('week').format('YYYY-MM-DD');
      const endDateFormat = dayjs().endOf('week').format('YYYY-MM-DD');
      const dateString = [startDateFormat, endDateFormat];

      const startDate = new Date(dateString[0]);
      const endDate = new Date(dateString[1]);
      const dates = getDates(startDate, endDate);
      const initialDates = dates?.map(date => date.valueOf());
      const initialDateValues = initialDates?.map(date => date.valueOf());
      setLessonDates(initialDateValues);
      localStorageHelper.setData('Diagnostika', initialDateValues);
      if (initialDateValues.length > 0) {
        dispatch(diagnostikaLessons(initialDateValues));
      }
    }
  }, [dispatch]);

  useEffect(() => {
    const uniqueTeachers = Array.from(
      new Set(
        lessonsChosePeriod?.map(
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
  const [type, setType] = useState('Період');

  const items = [
    {
      key: 1,
      label: 'Параметри відбору',
      children: (
        <SelectDate
          pageName="Diagnostika"
          type={type}
          setType={setType}
          setLessonDates={setLessonDates}
          dateCurrentLesson={dateCurrentLesson}
          teachers={teachers}
          teacher={teacher}
          setTeacher={setTeacher}
          onLessonsChange={lessons => dispatch(diagnostikaLessons(lessons))}
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
                return dispatch(deleteDiagnostikaLessonById(lesson._id));
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
