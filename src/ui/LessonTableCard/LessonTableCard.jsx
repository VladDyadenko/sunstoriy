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
import {
  selectIslessonStatus,
  selectLessonOperetion,
} from 'redux/Lesson/lessonSelector';
import { FcOk } from 'react-icons/fc';
import { getLessonById } from 'redux/Lesson/api';

function LessonTableCard({ lesson, onLessonsDelete }) {
  const operetion = useSelector(selectOfficesOperetion);

  const isLessonStatus = useSelector(selectIslessonStatus);
  const isLessonOperetion = useSelector(selectLessonOperetion);
  const [openPopover, setOpenPopover] = useState(false);

  const [updateLesson, setUpdateLesson] = useState({});

  const {
    _id,
    bank,
    paymentForm,
    price,
    isHappend,
    sum,
    dateLesson,
    teacher,
    timeLesson,
    office,
  } = Object.keys(updateLesson) > 0 ? updateLesson : lesson;
  const [currentPayment, setCurrentPayment] = useState(sum ? sum : []);
  const [amountPaid, setAmountPaid] = useState(0);
  const [lessonHappended, setLessonHappended] = useState(
    isHappend ? isHappend : ''
  );
  const visiblePaymentList =
    amountPaid && amountPaid !== 0 && currentPayment?.length > 0;

  useEffect(() => {
    if (currentPayment?.length > 0) {
      const totalSum = val => val?.reduce((acm, item) => acm + item.amount, 0);

      setAmountPaid(totalSum(currentPayment));
    }
  }, [currentPayment]);

  useEffect(() => {
    const fetchLesson = async () => {
      if (isLessonStatus === _id) {
        try {
          const lesson = await getLessonById(isLessonStatus);
          setUpdateLesson(lesson ? lesson : {});
          if (lesson?.isHappend) setLessonHappended(lesson?.isHappend);
        } catch (error) {
          console.error('Помилка при завантаженні уроку:', error);
        }
      }
    };

    fetchLesson();
  }, [_id, isLessonOperetion, isLessonStatus]);

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
          {lessonHappended && lessonHappended === 'Відпрацьоване' ? (
            <FcOk />
          ) : null}

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
