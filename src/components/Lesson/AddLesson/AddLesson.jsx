import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { useState } from 'react';
import {
  ChoseInfoContainer,
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
import { initialValuesLessonForm } from '../Schema/schema';
import { addLesson } from 'redux/Lesson/lessonOperetion';

const AddLesson = () => {
  const [valuesLesson, setValuesLesson] = useState(initialValuesLessonForm);
  const [typeLesson, setTypeLesson] = useState('Сенсорна');

  console.log(setValuesLesson);

  const dispatch = useDispatch();
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={valuesLesson}
        onSubmit={values => {
          console.log(values);
          dispatch(addLesson(values));
        }}
      >
        {({ setFieldValue }) => (
          <FormLesson>
            <TitleForm>Картка заняття</TitleForm>
            <ChoseInfoContainer>
              <FormMainInfo>
                <AddTypeLesson
                  office={typeLesson}
                  setTypeLesson={setTypeLesson}
                  setFieldValue={setFieldValue}
                />
                <AddChildLesson setFieldValue={setFieldValue} />
                <AddTeacherToLesson setFieldValue={setFieldValue} />
                <PriceLesson setFieldValue={setFieldValue} />
              </FormMainInfo>
              <DatePickerLesson
                office={typeLesson}
                setFieldValue={setFieldValue}
              />
            </ChoseInfoContainer>
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
