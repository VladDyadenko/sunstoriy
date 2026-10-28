import { useSelector } from 'react-redux';
import { Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
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
import {
  selectIslessonStatus,
  selectLessonOperetion,
} from 'redux/Lesson/lessonSelector';
import { FcOk } from 'react-icons/fc';
import { getLessonById } from 'redux/Lesson/api';
import ButtonLoader from 'ui/ButtonLoader/ButtonLoader';

function LessonTableCard({ lesson, onLessonsDelete }) {
  const operetion = useSelector(selectOfficesOperetion);

  const isLessonStatus = useSelector(selectIslessonStatus);
  const isLessonOperetion = useSelector(selectLessonOperetion);
  const [openPopover, setOpenPopover] = useState(false);

  const [updateLesson, setUpdateLesson] = useState({});

  const [currentStatus, setCurrentStatus] = useState(
    lesson.status ? lesson.status : 'to_plan'
  );

  const {
    _id,
    bank,
    paymentForm,
    price,
    isHappend,
    dateLesson,
    teacher,
    timeLesson,
    office,
  } = Object.keys(updateLesson) > 0 ? updateLesson : lesson;
  const [currentPayment, setCurrentPayment] = useState([]);
  const [amountPaid, setAmountPaid] = useState(0);
  const [lessonHappended, setLessonHappended] = useState(
    isHappend ? isHappend : null
  );

  useEffect(() => {
    if (lesson?.sum && lesson.sum.length > 0) {
      setCurrentPayment(lesson.sum);
    } else {
      setCurrentPayment([]);
    }
  }, [lesson]);

  useEffect(() => {
    if (lesson && lesson?.isHappend) {
      setLessonHappended(lesson.isHappend);
    } else {
      setLessonHappended(null);
    }
  }, [lesson]);

  const visiblePaymentList =
    amountPaid && amountPaid !== 0 && currentPayment?.length > 0;

  useEffect(() => {
    if (updateLesson?.sum) {
      setCurrentPayment(updateLesson.sum);
    }
  }, [updateLesson]);

  useEffect(() => {
    if (Array.isArray(currentPayment) && currentPayment.length > 0) {
      const totalSum = currentPayment.reduce(
        (acm, item) => acm + item.amount,
        0
      );
      setAmountPaid(totalSum);
    } else {
      setAmountPaid(0);
    }
  }, [currentPayment]);

  useEffect(() => {
    const fetchLesson = async () => {
      if (isLessonStatus === _id) {
        try {
          const lesson = await getLessonById(isLessonStatus);
          setUpdateLesson(lesson ? lesson : {});
          if (lesson?.isHappend) setLessonHappended(lesson.isHappend);
          if (lesson?.status) setCurrentStatus(lesson.status);
        } catch (error) {
          console.error('Помилка при завантаженні уроку:', error);
        }
      }
    };

    fetchLesson();
  }, [_id, isLessonOperetion, isLessonStatus, setCurrentStatus]);

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
  const styleDescr = currentStatus ? currentStatus : '';
  const lessonStatus = lessonHappended && lessonHappended === 'Відпрацьоване';
  const content = (
    <ButtonContainer>
      <LessonPayment
        office={office}
        timeLesson={timeLesson}
        teacher={teacher}
        currentPayment={currentPayment}
        setCurrentPayment={setCurrentPayment}
        dateLesson={dateLesson}
        paymentForm={paymentForm}
        bank={bank}
        isHappend={isHappend}
        amountPaid={amountPaid}
        price={price}
        id={_id}
        closePopover={closePopover}
        visiblePaymentList={visiblePaymentList}
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
            <ButtonLoader height="24" width="24" />
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
          <InfoChild aria-description={styleDescr}>
            {lesson.childName} <br /> {lesson.childSurname}
          </InfoChild>
          <InfoTeacher aria-description={styleDescr}>Фахівець:</InfoTeacher>
          <InfoTeacher aria-description={styleDescr}>
            {lesson.teacherName} {lesson.teacherSurname}
          </InfoTeacher>
        </InfoContainer>
        <PaymentContainer>
          {lessonStatus ? <FcOk /> : null}
          {visiblePaymentList ? <IconPaymentLesson /> : null}
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
          mouseEnterDelay={0.4}
          mouseLeaveDelay={0.2}
          title="Внесіть зміни:"
        >
          <LessonButton type="primary">
            <IconButtonChose />
          </LessonButton>
        </Popover>
        <StatusLesson
          lessonData={lesson}
          currentStatus={currentStatus}
          setCurrentStatus={setCurrentStatus}
        />
      </InfoColor>
    </Wrapper>
  );
}

export default LessonTableCard;
