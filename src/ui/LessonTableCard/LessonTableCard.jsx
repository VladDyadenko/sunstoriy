import { Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { CirclesWithBar } from 'react-loader-spinner';
import { Popover } from 'antd';
import {
  IconLessonDelete,
  IconLessonEdit,
  IconLessonSee,
} from 'components/ChoseLessonData/ScheduleCard/ScheduleCard.styled';
import {
  ButtonContainer,
  CardLessonLink,
  DescrDeleteBtn,
  IconButtonChose,
  InfoChild,
  InfoColor,
  InfoContainer,
  InfoTeacher,
  LessonButton,
  LessonDelete,
  LessonEdit,
  Wrapper,
} from './LessonTableCard.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteLessonById } from 'redux/Lesson/lessonOperetion';
import { selectLessonOperetion } from 'redux/Lesson/lessonSelector';

function LessonTableCard({ lesson }) {
  const dispatch = useDispatch();
  const operetion = useSelector(selectLessonOperetion);

  const content = (
    <ButtonContainer>
      <CardLessonLink to={`/lesson/${lesson._id}?source=buttonViewing`}>
        Переглянути
        <IconLessonSee />
      </CardLessonLink>
      <LessonEdit to={`/lesson/${lesson._id}`}>
        Редагувати
        <IconLessonEdit />
      </LessonEdit>
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
        onConfirm={() => dispatch(deleteLessonById(lesson._id))}
      >
        <LessonDelete>
          {operetion === lesson._id ? (
            <CirclesWithBar
              height="24"
              width="24"
              color="#ffffff"
              wrapperStyle={{}}
              visible={true}
              ariaLabel="circles-with-bar-loading"
            />
          ) : (
            <DescrDeleteBtn>
              Видалити
              <IconLessonDelete />
            </DescrDeleteBtn>
          )}
        </LessonDelete>
      </Popconfirm>
    </ButtonContainer>
  );
  return (
    <Wrapper>
      <InfoContainer>
        <InfoChild>Дитина:</InfoChild>
        <InfoChild>
          {lesson.childName} {lesson.childSurname}
        </InfoChild>
        <InfoTeacher>Фахівець:</InfoTeacher>
        <InfoTeacher>
          {lesson.teacherName} {lesson.teacherSurname}
        </InfoTeacher>
      </InfoContainer>
      <InfoColor aria-current={lesson ? lesson.teacherColor : ''}>
        <Popover content={content} title="Внесіть зміни:">
          <LessonButton type="primary">
            <IconButtonChose />
          </LessonButton>
        </Popover>
      </InfoColor>
    </Wrapper>
  );
}

export default LessonTableCard;
