import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, memo } from 'react';
import dayjs from 'dayjs';
import { selectLessonsPreschoolInclusion } from 'redux/offices/officesSelector';
import { getDates } from 'components/FilterLesson/SelectDate/GetDateFunction';
import {
  deletePreschoolInclusionLessonById,
  preschoolInclusionLessons,
} from 'redux/offices/officesOperetion';
import Container from 'components/Container/Container';
import FilterLesson from 'components/FilterLesson/FilterLesson';
import { MainWrapper } from 'components/ContainerMain/ContainerMain.styled';
import MainTable from 'ui/MainTable/MainTable';
import SelectDate from 'components/FilterLesson/SelectDate/SelectDate';
import { localStorageHelper } from 'helpers/helperLocalStorage';

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

  useEffect(() => {
    const storedDate = localStorageHelper.getData('PreschoolInclusion');

    if (storedDate) {
      setLessonDates(storedDate);
      dispatch(preschoolInclusionLessons(storedDate));
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
      localStorageHelper.setData('PreschoolInclusion', initialDateValues);
      if (initialDateValues.length > 0) {
        dispatch(preschoolInclusionLessons(initialDateValues));
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

  const items = [
    {
      key: 1,
      label: 'Параметри відбору',
      children: (
        <SelectDate
          pageName="PreschoolInclusion"
          type={type}
          setType={setType}
          setLessonDates={setLessonDates}
          dateCurrentLesson={dateCurrentLesson}
          teachers={teachers}
          teacher={teacher}
          setTeacher={setTeacher}
          onLessonsChange={lessons =>
            dispatch(preschoolInclusionLessons(lessons))
          }
        />
      ),
    },
  ];

  return (
    <>
      <Container>
        <FilterLesson currentItems={items} />
        <MainWrapper>
          {lessons?.length > 0 && (
            <MainTable
              lessons={lessons}
              onLessonsDelete={lesson => {
                return dispatch(deletePreschoolInclusionLessonById(lesson._id));
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
