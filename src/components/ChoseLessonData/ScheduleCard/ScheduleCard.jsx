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

const ScheduleCard = ({ lessonData }) => {
  const { childName, childSurname, teacherName, teacherColor, _id } =
    lessonData;

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
        <ButtonLessonEdit to={`/teacher/${_id}`}>
          <IconLessonEdit />
        </ButtonLessonEdit>
        <ButtonLessonDelete>
          <IconLessonDelete />
        </ButtonLessonDelete>
      </CardWrapper>
    </>
  );
};

export default ScheduleCard;
