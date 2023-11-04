import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { useState } from 'react';
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
import {
  initialValuesLessonForm,
  schemaAddLessonUpdate,
} from '../Schema/schema';
import { addLesson } from 'redux/Lesson/lessonOperetion';
import ChoseLessonContainer from '../ChoseLessonContainer/ChoseLessonContainer';

const AddLesson = () => {
  const [valuesLesson, setValuesLesson] = useState(initialValuesLessonForm);
  const [typeLesson, setTypeLesson] = useState('Сенсорна');
  const [addSuccessLesson, setAddSuccessLesson] = useState(false);

  console.log(setValuesLesson);

  const dispatch = useDispatch();
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={valuesLesson}
        validationSchema={schemaAddLessonUpdate}
        onSubmit={async values => {
          console.log(values);
          await dispatch(addLesson(values)).then(() => {
            setAddSuccessLesson(true);
          });
        }}
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
                />
                {touched.child && errors.child && (
                  <ErrorInfo>{errors.child}</ErrorInfo>
                )}
                <AddTeacherToLesson
                  setFieldValue={setFieldValue}
                  addSuccessLesson={addSuccessLesson}
                />
                {touched.teacher && errors.teacher && (
                  <ErrorInfo>{errors.teacher}</ErrorInfo>
                )}
                <PriceLesson setFieldValue={setFieldValue} />
              </FormMainInfo>
              <DatePickerLesson
                office={typeLesson}
                setFieldValue={setFieldValue}
                errors={errors}
                touched={touched}
                addSuccessLesson={addSuccessLesson}
              />
            </ChoseInfoContainer>
            <ChoseLessonContainer />
            <TextAreaTitle>План заняття:</TextAreaTitle>
            <FieldTextarea name="plan" component="textarea" rows={6} />
            <TextAreaTitle>Зауваження по заняттю:</TextAreaTitle>
            <FieldTextarea name="review" component="textarea" rows={6} />
            <FormButtonLesson type="submit">Запланувати</FormButtonLesson>
          </FormLesson>
        )}
      </Formik>
    </>
  );
};

export default AddLesson;
