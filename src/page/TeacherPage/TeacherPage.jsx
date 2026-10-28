import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import TeacherForm from 'components/Teacher/TeacherForm/TeacherForm';
import { useEffect, useState } from 'react';
import { getTeacherById } from 'redux/teacher/api';

const TeacherPage = () => {
  const [teacher, setTeacher] = useState('');
  const { teacherId } = useParams();
  useEffect(() => {
    if (!teacherId) {
      return;
    }
    async function fetchTeachers() {
      try {
        const teacher = await getTeacherById(teacherId);
        if (!teacher) {
          return;
        }
        setTeacher(teacher);
      } catch (err) {
        Notify.failure('Child not found');
      }
    }
    fetchTeachers();
  }, [teacherId]);
  return (
    <>
      <TeacherForm teacher={teacher} />
    </>
  );
};

export default TeacherPage;
