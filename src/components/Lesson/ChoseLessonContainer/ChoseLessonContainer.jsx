import TimeLessons from 'ui/TimeLessons/TimeLessons';
import { ChoseLessonsContainer } from './ChoseLessonContainer.styled';
import { useSelector } from 'react-redux';
import { selectChoseLessons } from 'redux/Lesson/lessonSelector';
import { useEffect, useState } from 'react';

const ChoseLessonContainer = () => {
  const [timeLesson, setTimeLesson] = useState([]);
  const choseLessons = useSelector(selectChoseLessons);

  useEffect(() => {
    if (choseLessons?.length > 0) {
      const lessonTimes = choseLessons?.map(({ lesson }) => lesson.timeLesson);
      setTimeLesson(lessonTimes);
    }
  }, [choseLessons]);

  return (
    <ChoseLessonsContainer>
      <TimeLessons timeLessonOnList={timeLesson} />
    </ChoseLessonsContainer>
  );
};

export default ChoseLessonContainer;
