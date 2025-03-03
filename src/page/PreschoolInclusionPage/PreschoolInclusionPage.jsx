import { useDispatch, useSelector } from 'react-redux';
import { useState, memo } from 'react';
import { selectLessonsPreschoolInclusion } from 'redux/offices/officesSelector';
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

const PreschoolInclusionPage = () => {
  const lessonsChosePeriod = useSelector(selectLessonsPreschoolInclusion);

  const [teachers, setTeachers] = useState(null);
  const [teacher, setTeacher] = useState([]);
  const [lessons, setLessons] = useState(null);
  const [dateCurrentLesson, setLessonDates] = useState(
    localStorageHelper.getData('PreschoolInclusion')
  );
  const [type, setType] = useState('Період');

  const dispatch = useDispatch();

  useLessonsDates(
    'PreschoolInclusion',
    setLessonDates,
    selectedLessonsByDateTeacher,
    ['Preschool-інклюзія']
  );

  useUniqueTeacher(lessonsChosePeriod, setTeachers);

  useFilteredLessonsTeachers(lessonsChosePeriod, setLessons, teacher);

  const items = [
    {
      key: 1,
      label: 'Параметри відбору',
      children: (
        <SelectDate
          pageName="PreschoolInclusion"
          office="Preschool-інклюзія"
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
          <ButtonAddLesson pageName="Preschool-інклюзія" />
        )}
        <MainWrapper>
          {lessons?.length > 0 && (
            <MainTable
              lessons={lessons}
              onLessonsDelete={lesson => {
                return dispatch(deleteLessonByOfficeAndId(lesson._id));
              }}
              office="Preschool-інклюзія"
            />
          )}
        </MainWrapper>
      </Container>
    </>
  );
};

export default memo(PreschoolInclusionPage);
