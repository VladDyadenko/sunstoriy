import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, memo } from 'react';
import MainTable from 'ui/MainTable/MainTable';
import Container from 'components/Container/Container';
import { MainWrapper } from 'components/ContainerMain/ContainerMain.styled';
import FilterLesson from 'components/FilterLesson/FilterLesson';
import { selectLessonsMassage } from 'redux/offices/officesSelector';
import {
  deleteMassageLessonById,
  massageLessons,
} from 'redux/offices/officesOperetion';
import SelectDate from 'components/FilterLesson/SelectDate/SelectDate';
import { localStorageHelper } from 'helpers/helperLocalStorage';
import ButtonAddLesson from 'ui/ButtonAddLesson/ButtonAddLesson';
import { useLessonsDates } from 'hooks/useLessonsDates';
import { useUniqueTeacher } from 'hooks/useUniqueTeacher';
import { useFilteredLessonsTeachers } from 'hooks/useFilteredLessonsTeachers';

const MassagePage = () => {
  const dispatch = useDispatch();

  const lessonsChosePeriod = useSelector(selectLessonsMassage);

  const [teachers, setTeachers] = useState(null);
  const [teacher, setTeacher] = useState([]);
  const [lessons, setLessons] = useState(null);
  const [type, setType] = useState('Період');
  const [dateCurrentLesson, setLessonDates] = useState(
    localStorageHelper.getData('Massage')
  );

  useLessonsDates('Massage', setLessonDates, massageLessons);

  useUniqueTeacher(lessonsChosePeriod, setTeachers);

  useFilteredLessonsTeachers(lessonsChosePeriod, setLessons, teacher);

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
