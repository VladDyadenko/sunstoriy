import { useDispatch, useSelector } from 'react-redux';
import { Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
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
import { selectLessonOperetion } from 'redux/Lesson/lessonSelector';
import ButtonLoader from 'ui/ButtonLoader/ButtonLoader';

const ScheduleCard = ({ lessonData }) => {
  const { childName, childSurname, teacherName, teacherColor, _id } =
    lessonData;
  const dispatch = useDispatch();
  const operetion = useSelector(selectLessonOperetion);

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
        <Popconfirm
          title="Видалити заняття"
          description="Ви впевнені, що хочете видалити заняття?"
          icon={
            <QuestionCircleOutlined
              style={{
                color: 'red',
              }}
            />
          }
          onConfirm={() => dispatch(deleteLessonById(_id))}
        >
          <ButtonLessonDelete>
            {operetion === _id ? (
              <ButtonLoader height="24" width="24" />
            ) : (
              <IconLessonDelete />
            )}
          </ButtonLessonDelete>
        </Popconfirm>
      </CardWrapper>
    </>
  );
};

export default ScheduleCard;
