import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Watermark } from 'antd';
import { Notify } from 'notiflix';
import AddLesson from 'components/Lesson/AddLesson/AddLesson';
import Container from 'components/Container/Container';
import { getLessonById } from 'redux/Lesson/api';

function LessonPage() {
  const [lesson, setLesson] = useState('');
  const { lessonId } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!lessonId) {
      return;
    }
    async function fetchLesson() {
      try {
        const lesson = await getLessonById(lessonId);
        if (!lesson) {
          return;
        }
        setLesson(lesson);
      } catch (error) {
        Notify.failure('Заняття не знайдено');
      }
    }
    fetchLesson();
  }, [lessonId]);

  return (
    <Container>
      <Watermark style={{ height: '100vh' }} content="Sunstoriy">
        <AddLesson lesson={lesson} pathname={pathname} />
      </Watermark>
    </Container>
  );
}

export default LessonPage;
