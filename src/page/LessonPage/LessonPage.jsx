import { Watermark } from 'antd';
import AddLesson from 'components/Lesson/AddLesson/AddLesson';
import Container from 'components/Container/Container';

function LessonPage() {
  return (
    <Container>
      <Watermark style={{ height: '100vh' }} content="Sunstoriy">
        <AddLesson />
      </Watermark>
    </Container>
  );
}

export default LessonPage;
