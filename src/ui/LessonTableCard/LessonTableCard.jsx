import { useSelector } from 'react-redux';
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
  CardLessonCopy,
  CardLessonLink,
  DescrDeleteBtn,
  IconButtonChose,
  IconButtonCopy,
  IconPaymentLesson,
  InfoAndPaymentContainer,
  InfoChild,
  InfoColor,
  InfoContainer,
  InfoTeacher,
  LessonButton,
  LessonDelete,
  LessonEdit,
  PaymentContainer,
  Wrapper,
} from './LessonTableCard.styled';
import { selectOfficesOperetion } from 'redux/offices/officesSelector';
import SendSms from 'ui/Sms/SendSms';
import StatusLesson from 'components/StatusLesson/StatusLesson';
import LessonPayment from 'ui/lessonPayment/LessonPayment';
import { useEffect, useState } from 'react';
import { selectLessonIsPayment } from 'redux/Lesson/lessonSelector';

function LessonTableCard({ lesson, onLessonsDelete }) {
  const operetion = useSelector(selectOfficesOperetion);
  const isPayment = useSelector(selectLessonIsPayment);

  const [openPopover, setOpenPopover] = useState(false);
  const [lessonPayment, setLessonPayment] = useState(false);

  useEffect(() => {
    if (isPayment === lesson._id) {
      setLessonPayment(true);
    }
  }, [isPayment, lesson._id]);

  const handleOpenPopover = isOpen => {
    setOpenPopover(isOpen);
  };
  const closePopover = e => {
    setOpenPopover(false);
  };

  const lessonCopy = {
    childName: lesson.childName,
    childSurname: lesson.childSurname,
    mather: lesson.mather,
    matherPhone: lesson.matherPhone,
    child: lesson.child,
    teacherColor: lesson.teacherColor,
    teacher: lesson.teacher,
    teacherName: lesson.teacherName,
    teacherSurname: lesson.teacherSurname,
    office: lesson.office,
  };
  const styleDescr = lesson ? lesson.status : '';

  const { paymentForm } = lesson;

  const content = (
    <ButtonContainer>
      <LessonPayment lesson={lesson} closePopover={closePopover} />
      <CardLessonLink to={`/lesson/${lesson._id}?source=buttonViewing`}>
        Переглянути
        <IconLessonSee />
      </CardLessonLink>
      <CardLessonCopy
        to={`/lesson?lessonCopy=${encodeURIComponent(
          JSON.stringify(lessonCopy)
        )}`}
      >
        Копіювати
        <IconButtonCopy />
      </CardLessonCopy>
      <LessonEdit to={`/lesson/${lesson._id}`}>
        Редагувати
        <IconLessonEdit />
      </LessonEdit>
      <SendSms lesson={lesson} />
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
        onConfirm={() => {
          onLessonsDelete(lesson);
        }}
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
      <InfoAndPaymentContainer>
        <InfoContainer>
          <InfoChild aria-description={styleDescr}>Дитина:</InfoChild>
          <InfoChild aria-description={styleDescr}>
            {lesson.childName} {lesson.childSurname}
          </InfoChild>
          <InfoTeacher aria-description={styleDescr}>Фахівець:</InfoTeacher>
          <InfoTeacher aria-description={styleDescr}>
            {lesson.teacherName} {lesson.teacherSurname}
          </InfoTeacher>
        </InfoContainer>
        {((paymentForm && paymentForm === 'cash') ||
          (paymentForm && paymentForm === 'cashless') ||
          lessonPayment) && (
          <PaymentContainer>
            <IconPaymentLesson />
          </PaymentContainer>
        )}
      </InfoAndPaymentContainer>
      <InfoColor
        aria-description={styleDescr}
        aria-current={lesson ? lesson.teacherColor : ''}
      >
        <Popover
          open={openPopover}
          onOpenChange={handleOpenPopover}
          trigger="hover"
          content={content}
          title="Внесіть зміни:"
        >
          <LessonButton type="primary">
            <IconButtonChose />
          </LessonButton>
        </Popover>
        <StatusLesson lessonData={lesson} />
      </InfoColor>
    </Wrapper>
  );
}

export default LessonTableCard;
