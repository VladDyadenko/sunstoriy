import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ChoseInfoContainer,
  ErrorInfo,
  FieldTextarea,
  FormButtonLesson,
  FormLesson,
  FormMainInfo,
  TextAreaTitle,
  TitleForm,
} from './AddLesson.styled';
import DatePickerLesson from '../DatePickerLesson/DatePickerLesson';
import AddTypeLesson from '../AddTypeLesson/AddTypeLesson';
import AddChildLesson from '../AddChildLesson/AddChildLesson';
import AddTeacherToLesson from '../AddTeacherToLesson/AddTeacherToLesson';
import PriceLesson from '../PriceLesson/PriceLesson';

import { initialLessonState, schemaAddLessonUpdate } from '../Schema/schema';
import { addLesson, updateLesson } from 'redux/Lesson/lessonOperetion';
import ChoseLessonContainer from 'components/ChoseLessonData/ChoseLessonContainer/ChoseLessonContainer';
import { selectLessonOperetion } from 'redux/Lesson/lessonSelector';
import { currentLessonCost } from 'assets/constants/mainConstans';
import ButtonLoader from 'ui/ButtonLoader/ButtonLoader';
const today = new Date(dayjs().format('YYYY-MM-DD')).valueOf();

const AddLesson = ({ lesson, pathname }) => {
  const [lessonData, setLessonData] = useState(initialLessonState);
  const [typeLesson, setTypeLesson] = useState('Сенсорна');
  const [addSuccessLesson, setAddSuccessLesson] = useState(false);
  const [buttonView, setButtonView] = useState(true);

  const [dateCurrentLesson, setDateCurrentLesson] = useState(today);
  const [offices, setOffices] = useState(['Сенсорна']);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const operetion = useSelector(selectLessonOperetion);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const source = searchParams.get('source');
  const dateFreeLesson = searchParams.get('dateFreeLesson');
  const timeFreeLessonString = searchParams.get('timeFreeLesson');
  const officeFreeLesson = searchParams.get('officeFreeLesson');
  const timeFreeLesson = JSON.parse(timeFreeLessonString);

  const lessonCopyString = searchParams.get('lessonCopy');
  const lessonCopy = JSON.parse(lessonCopyString);

  // Оновлення окремих полів даних заняття
  const updateLessonField = (field, value) => {
    setLessonData(prev => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    if (timeFreeLesson && dateFreeLesson) {
      const transformDate = dayjs(dateFreeLesson).valueOf();
      updateLessonField('timeLesson', timeFreeLesson);
      updateLessonField('dateLesson', transformDate);
      updateLessonField('office', officeFreeLesson);
      setTypeLesson(officeFreeLesson);
    }
    const today = dayjs().format('YYYY-MM-DD');
    const selectedDate = new Date(today);
    setDateCurrentLesson(selectedDate.valueOf());

    // Якщо це копіювання існуючого заняття
    if (lessonCopy) {
      setLessonData(prev => ({
        ...prev,
        childName: lessonCopy.childName,
        childSurname: lessonCopy.childSurname,
        mather: lessonCopy.mather,
        matherPhone: lessonCopy.matherPhone,
        office: lessonCopy.office,
        teacherName: lessonCopy.teacherName,
        teacherSurname: lessonCopy.teacherSurname,
        child: lessonCopy.child,
        teacher: lessonCopy.teacher,
        teacherColor: lessonCopy.teacherColor,
      }));
      setTypeLesson(lessonCopy.office);
    }

    // Режим перегляду
    if (source === 'buttonViewing') {
      setButtonView(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Завантаження даних при редагуванні існуючого заняття
  useEffect(() => {
    if (lesson) {
      setLessonData({
        office: lesson.office || '',
        child: lesson.child || '',
        childName: lesson.childName || '',
        childSurname: lesson.childSurname || '',
        mather: lesson.mather || '',
        matherPhone: lesson.matherPhone || '',
        teacher: lesson.teacher || '',
        teacherName: lesson.teacherName || '',
        teacherSurname: lesson.teacherSurname || '',
        teacherColor: lesson.teacherColor || '',
        price: lesson.price || currentLessonCost,
        plan: lesson.plan || '',
        review: lesson.review || '',
        dateLesson: lesson.dateLesson || null,
        timeLesson: lesson.timeLesson || '',
      });
      setTypeLesson(lesson.office);
    }
  }, [lesson]);

  const handleSubmit = async values => {
    if (buttonView) {
      if (lesson) {
        if (!values.childSurname) values.childSurname = '';
        if (!values.teacherSurname) values.teacherSurname = '';

        const id = lesson._id;
        const combinedData = { id, values };
        await dispatch(updateLesson(combinedData)).then(() => {
          navigate(-1);
        });
      } else {
        await dispatch(addLesson(values)).then(() => {
          setAddSuccessLesson(true);
          navigate(-1);
        });
      }
    } else {
      navigate(-1);
      setButtonView(true);
    }
  };
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={lessonData}
        validationSchema={schemaAddLessonUpdate}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, errors, touched }) => (
          <FormLesson>
            <TitleForm>Картка заняття</TitleForm>
            <ChoseInfoContainer>
              <FormMainInfo>
                <AddTypeLesson
                  office={typeLesson}
                  setTypeLesson={setTypeLesson}
                  setFieldValue={setFieldValue}
                />
                {touched.office && errors.office && (
                  <ErrorInfo>{errors.office}</ErrorInfo>
                )}
                <AddChildLesson
                  setFieldValue={setFieldValue}
                  addSuccessLesson={addSuccessLesson}
                  child={lessonData.child}
                  childName={lessonData.childName}
                  childSurname={lessonData.childSurname}
                  mather={lessonData.mather}
                  matherPhone={lessonData.matherPhone}
                  pathname={pathname}
                />
                {touched.child && errors.child && (
                  <ErrorInfo>{errors.child}</ErrorInfo>
                )}
                <AddTeacherToLesson
                  setFieldValue={setFieldValue}
                  addSuccessLesson={addSuccessLesson}
                  teacher={lessonData.teacher}
                  teacherName={lessonData.teacherName}
                  teacherSurname={lessonData.teacherSurname}
                  teacherColor={lessonData.teacherColor}
                  pathname={pathname}
                />
                {touched.teacher && errors.teacher && (
                  <ErrorInfo>{errors.teacher}</ErrorInfo>
                )}
                <PriceLesson
                  setFieldValue={setFieldValue}
                  currentPrice={lessonData.price}
                  lesson={lesson}
                />
              </FormMainInfo>
              <DatePickerLesson
                dateLessonCurrent={lessonData.dateLesson}
                setFieldValue={setFieldValue}
                errors={errors}
                touched={touched}
                addSuccessLesson={addSuccessLesson}
                timeLessonCurrent={lessonData.timeLesson}
                setDateCurrentLesson={setDateCurrentLesson}
                operetion={operetion}
                buttonView={buttonView}
              />
            </ChoseInfoContainer>
            <ChoseLessonContainer
              dateCurrentLesson={dateCurrentLesson}
              offices={offices}
              setOffices={setOffices}
              defaultOffices={['Сенсорна']}
            />
            <TextAreaTitle>План заняття:</TextAreaTitle>
            <FieldTextarea name="plan" component="textarea" rows={6} />
            <TextAreaTitle>Зауваження по заняттю:</TextAreaTitle>
            <FieldTextarea name="review" component="textarea" rows={6} />
            <FormButtonLesson type="submit">
              {operetion === 'addLesson' ? (
                <ButtonLoader height="21" width="50" />
              ) : buttonView ? (
                'Зберегти зміни'
              ) : (
                'Назад'
              )}
            </FormButtonLesson>
          </FormLesson>
        )}
      </Formik>
    </>
  );
};

export default AddLesson;
