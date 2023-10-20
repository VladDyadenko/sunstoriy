import Container from 'components/Container/Container';
import { TeacherTitle } from './TeachersPage.styled';
import TeacherList from 'components/Teacher/TeacherList/TeacherList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchTeachers } from 'redux/teacher/teacherOperetion';
import { selectTeachers } from 'redux/teacher/teacherSelector';

const TeachersPage = () => {
  const [teachers, setTeachers] = useState(null);
  const dispatch = useDispatch();
  const allTeachers = useSelector(selectTeachers);

  useEffect(() => {
    setTeachers(allTeachers);
  }, [allTeachers]);

  useEffect(() => {
    dispatch(fetchTeachers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);
  return (
    <>
      <Container>
        <TeacherTitle>Наши фахівці</TeacherTitle>
        <TeacherList teachers={teachers} />
      </Container>
    </>
  );
};

export default TeachersPage;
