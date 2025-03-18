import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Container from '../../components/Container/Container';
import FilterLesson from 'components/FilterLesson/FilterLesson';
import { MainWrapper } from 'components/ContainerMain/ContainerMain.styled';
import MainTable from 'ui/MainTable/MainTable';
import { selectLessonsСorrection } from 'redux/offices/officesSelector';
import {
  selectedLessonsByDateTeacher,
  deleteLessonByOfficeAndId,
} from 'redux/offices/officesOperetion';
import SelectDate from 'components/FilterLesson/SelectDate/SelectDate';
import { localStorageHelper } from 'helpers/helperLocalStorage';
import ButtonAddLesson from 'ui/ButtonAddLesson/ButtonAddLesson';
import { useLessonsDates } from 'hooks/useLessonsDates';
import { useUniqueTeacher } from 'hooks/useUniqueTeacher';
import { useFilteredLessonsTeachers } from 'hooks/useFilteredLessonsTeachers';

function CorrectionPage() {
  const dispatch = useDispatch();

  const lessonsChosePeriod = useSelector(selectLessonsСorrection);

  const [teachers, setTeachers] = useState(null);
  const [teacher, setTeacher] = useState([]);
  const [lessons, setLessons] = useState(null);
  const [dateCurrentLesson, setLessonDates] = useState(
    localStorageHelper.getData('Correction')
  );
  const [type, setType] = useState('Період');
  const offices = ['Корекційний'];
  useEffect(() => {
    if (dateCurrentLesson) {
      const choesData = { offices, dateCurrentLesson };
      dispatch(selectedLessonsByDateTeacher(choesData));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLessonsDates('Correction', setLessonDates, selectedLessonsByDateTeacher, [
    'Корекційний',
  ]);
  useUniqueTeacher(lessonsChosePeriod, setTeachers);

  useFilteredLessonsTeachers(lessonsChosePeriod, setLessons, teacher);

  const items = [
    {
      key: 1,
      label: 'Параметри відбору',
      children: (
        <SelectDate
          pageName="Correction"
          office="Корекційний"
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
          <ButtonAddLesson pageName="Корекційний" />
        )}
        <MainWrapper>
          {lessons?.length > 0 && (
            <MainTable
              lessons={lessons}
              onLessonsDelete={lesson => {
                return dispatch(deleteLessonByOfficeAndId(lesson._id));
              }}
              office="Корекційний"
            />
          )}
        </MainWrapper>
      </Container>
    </>
  );
}

export default CorrectionPage;
