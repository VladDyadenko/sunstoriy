import { ChoseLessonsContainer } from './ChoseLessonContainer.styled';
import { useSelector } from 'react-redux';
import { selectChoseLessons } from 'redux/Lesson/lessonSelector';
import { useEffect, useState } from 'react';
import { Collapse } from 'antd';

const ChoseLessonContainer = () => {
  const [lessons, setLessons] = useState([]);
  const choseLessons = useSelector(selectChoseLessons);

  useEffect(() => {
    if (choseLessons?.length > 0) {
      const flattenedLessons = choseLessons.flat();
      setLessons(flattenedLessons);
    }
  }, [choseLessons]);

  const items = lessons.map(({ lesson, child, teacher }) => {
    return {
      key: lesson?._id,
      label: lesson?.dateLesson,
      children: <p>занятие на время {lesson?.timeLesson}</p>,
    };
  });
  const onChange = key => {};

  return (
    <ChoseLessonsContainer>
      <Collapse items={items} onChange={onChange} />
    </ChoseLessonsContainer>
  );
};

export default ChoseLessonContainer;
