import {
  CardDescr,
  CardDescrChild,
  CardLink,
  CardWrapper,
} from './ScheduleCard.styled';

const ScheduleCard = ({ lessonData }) => {
  const { childName, childSurname, teacherName, teacherColor, _id } =
    lessonData;

  return (
    <>
      <CardLink to={`/lesson/${_id}`}>
        <CardWrapper aria-current={teacherColor}>
          <CardDescrChild>{childName}</CardDescrChild>
          <CardDescrChild>{childSurname}</CardDescrChild>
          <CardDescr>Фахівець: </CardDescr>
          <CardDescr> {teacherName}</CardDescr>
        </CardWrapper>
      </CardLink>
    </>
  );
};

export default ScheduleCard;
