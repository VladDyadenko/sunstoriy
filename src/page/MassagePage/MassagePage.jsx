import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, memo } from 'react';
import dayjs from 'dayjs';

import MainTable from 'ui/MainTable/MainTable';
import Container from 'components/Container/Container';
import { MainWrapper } from 'components/ContainerMain/ContainerMain.styled';
import FilterLesson from 'components/FilterLesson/FilterLesson';
import { selectLessonsMassage } from 'redux/offices/officesSelector';
import {
  deleteMassageLessonById,
  massageLessons,
} from 'redux/offices/officesOperetion';
import { getDates } from 'components/FilterLesson/SelectDate/GetDateFunction';
import SelectDate from 'components/FilterLesson/SelectDate/SelectDate';
import { localStorageHelper } from 'helpers/helperLocalStorage';
import ButtonAddLesson from 'ui/ButtonAddLesson/ButtonAddLesson';

const MassagePage = () => {
  const lessonsChosePeriod = useSelector(selectLessonsMassage);
  const [teachers, setTeachers] = useState(null);
  const [teacher, setTeacher] = useState([]);
  const [lessons, setLessons] = useState(null);
  const [dateCurrentLesson, setLessonDates] = useState(
    localStorageHelper.getData('Massage')
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const storedDate = localStorageHelper.getData('Massage');

    if (storedDate) {
      setLessonDates(storedDate);
      dispatch(massageLessons(storedDate));
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
      localStorageHelper.setData('Massage', initialDateValues);
      if (initialDateValues.length > 0) {
        dispatch(massageLessons(initialDateValues));
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
          pageName="Massage"
          type={type}
          setType={setType}
          setLessonDates={setLessonDates}
          dateCurrentLesson={dateCurrentLesson}
          teachers={teachers}
          teacher={teacher}
          setTeacher={setTeacher}
          onLessonsChange={lessons => dispatch(massageLessons(lessons))}
        />
      ),
    },
  ];

  return (
    <>
      <Container>
        <FilterLesson currentItems={items} />
        {lessonsChosePeriod?.length === 0 && (
          <ButtonAddLesson pageName="Реабілітолог" />
        )}
        <MainWrapper>
          {lessons?.length > 0 && (
            <MainTable
              lessons={lessons}
              onLessonsDelete={lesson => {
                return dispatch(deleteMassageLessonById(lesson._id));
              }}
              office="Реабілітолог"
            />
          )}
        </MainWrapper>
      </Container>
    </>
  );
};

export default memo(MassagePage);
