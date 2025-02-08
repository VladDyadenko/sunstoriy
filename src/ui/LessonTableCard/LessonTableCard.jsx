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
import { selectIslessonStatus } from 'redux/Lesson/lessonSelector';
import { FcOk } from 'react-icons/fc';
import { getLessonById } from 'redux/Lesson/api';

function LessonTableCard({ lesson, onLessonsDelete }) {
  const operetion = useSelector(selectOfficesOperetion);

  const isLessonStatus = useSelector(selectIslessonStatus);

  const { paymentForm, isHappend, _id } = lesson;

  const [openPopover, setOpenPopover] = useState(false);
  const [isLessonPaymented, setIsLessonPaymented] = useState(
    paymentForm ? paymentForm : ''
  );
  const [lessonHappended, setLessonHappended] = useState(
    isHappend ? isHappend : ''
  );

  useEffect(() => {
    if (lesson) {
      setIsLessonPaymented(paymentForm || '');
      setLessonHappended(isHappend || '');
    }
  }, [isHappend, lesson, paymentForm]);

  useEffect(() => {
    const fetchLesson = async () => {
      if (isLessonStatus === _id) {
        try {
          const val = await getLessonById(isLessonStatus);
          setIsLessonPaymented(val.paymentForm || '');
          setLessonHappended(val.isHappend || '');
        } catch (error) {
          console.error('Помилка при завантаженні уроку:', error);
        }
      }
    };

    fetchLesson();
  }, [_id, isLessonStatus]);

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

  const content = (
    <ButtonContainer>
      <LessonPayment
        lesson={lesson}
        closePopover={closePopover}
        isLessonPaymented={isLessonPaymented}
      />
      <CardLessonLink to={`/lesson/${_id}?source=buttonViewing`}>
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
      <LessonEdit to={`/lesson/${_id}`}>
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
          {operetion === _id ? (
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
          {/* <InfoChild aria-description={styleDescr}>Дитина:</InfoChild> */}
          <InfoChild aria-description={styleDescr}>
            {lesson.childName} <br /> {lesson.childSurname}
          </InfoChild>
          <InfoTeacher aria-description={styleDescr}>Фахівець:</InfoTeacher>
          <InfoTeacher aria-description={styleDescr}>
            {lesson.teacherName} {lesson.teacherSurname}
          </InfoTeacher>
        </InfoContainer>
        <PaymentContainer>
          {lessonHappended && lessonHappended === 'Відпрацьоване' && <FcOk />}

          {isLessonPaymented &&
            (isLessonPaymented === 'cash' ||
              isLessonPaymented === 'cashless') && <IconPaymentLesson />}
        </PaymentContainer>
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
