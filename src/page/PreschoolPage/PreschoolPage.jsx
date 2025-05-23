import { useDispatch, useSelector } from 'react-redux';
import { useState, memo, useEffect } from 'react';
import { selectLessonsPreschool } from 'redux/offices/officesSelector';
import {
  selectedLessonsByDateTeacher,
  deleteLessonByOfficeAndId,
} from 'redux/offices/officesOperetion';
import Container from 'components/Container/Container';
import FilterLesson from 'components/FilterLesson/FilterLesson';
import { MainWrapper } from 'components/ContainerMain/ContainerMain.styled';
import MainTable from 'ui/MainTable/MainTable';
import SelectDate from 'components/FilterLesson/SelectDate/SelectDate';
import { localStorageHelper } from 'helpers/helperLocalStorage';
import ButtonAddLesson from 'ui/ButtonAddLesson/ButtonAddLesson';
import { useLessonsDates } from 'hooks/useLessonsDates';
import { useUniqueTeacher } from 'hooks/useUniqueTeacher';
import { useFilteredLessonsTeachers } from 'hooks/useFilteredLessonsTeachers';

const PreschoolPage = () => {
  const lessonsChosePeriod = useSelector(selectLessonsPreschool);

  const [teachers, setTeachers] = useState(null);
  const [teacher, setTeacher] = useState([]);
  const [lessons, setLessons] = useState(null);
  const [dateCurrentLesson, setLessonDates] = useState(
    localStorageHelper.getData('Preschool')
  );
  const [type, setType] = useState('Період');

  const dispatch = useDispatch();
  const offices = ['Preschool'];
  useEffect(() => {
    if (dateCurrentLesson) {
      const choesData = { offices, dateCurrentLesson };
      dispatch(selectedLessonsByDateTeacher(choesData));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLessonsDates('Preschool', setLessonDates, selectedLessonsByDateTeacher, [
    'Preschool',
  ]);

  useUniqueTeacher(lessonsChosePeriod, setTeachers);

  useFilteredLessonsTeachers(lessonsChosePeriod, setLessons, teacher);

  const items = [
    {
      key: 1,
      label: 'Параметри відбору',
      children: (
        <SelectDate
          pageName="Preschool"
          office="Preschool"
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
          <ButtonAddLesson pageName="Preschool" />
        )}
        <MainWrapper>
          {lessons?.length > 0 && (
            <MainTable
              lessons={lessons}
              onLessonsDelete={lesson => {
                return dispatch(deleteLessonByOfficeAndId(lesson._id));
              }}
              office="Preschool"
            />
          )}
        </MainWrapper>
      </Container>
    </>
  );
};

export default memo(PreschoolPage);
