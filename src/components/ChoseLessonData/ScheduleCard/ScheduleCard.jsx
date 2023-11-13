import { useDispatch } from 'react-redux';
import {
  ButtonLessonDelete,
  ButtonLessonEdit,
  CardDescr,
  CardDescrChild,
  CardLink,
  CardWrapper,
  IconLessonDelete,
  IconLessonEdit,
  IconLessonSee,
} from './ScheduleCard.styled';
import { deleteLessonById } from 'redux/Lesson/lessonOperetion';

const ScheduleCard = ({ lessonData }) => {
  const { childName, childSurname, teacherName, teacherColor, _id } =
    lessonData;
  const dispatch = useDispatch();

  const handleDeleteLesson = () => {
    dispatch(deleteLessonById(_id));
  };
  return (
    <>
      <CardWrapper aria-current={teacherColor}>
        <CardDescrChild>{childName}</CardDescrChild>
        <CardDescrChild>{childSurname}</CardDescrChild>
        <CardDescr>Фахівець: </CardDescr>
        <CardDescr> {teacherName}</CardDescr>
        <CardLink to={`/lesson/${_id}?source=buttonViewing`}>
          <IconLessonSee />
        </CardLink>
        <ButtonLessonEdit to={`/lesson/${_id}`}>
          <IconLessonEdit />
        </ButtonLessonEdit>
        <ButtonLessonDelete onClick={handleDeleteLesson}>
          <IconLessonDelete />
        </ButtonLessonDelete>
      </CardWrapper>
    </>
  );
};

export default ScheduleCard;
