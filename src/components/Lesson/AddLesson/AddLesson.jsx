import { Formik } from 'formik';
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
import { useState } from 'react';
import AddTypeLesson from '../AddTypeLesson/AddTypeLesson';
import AddChildLesson from '../AddChildLesson/AddChildLesson';
import AddTeacherToLesson from '../AddTeacherToLesson/AddTeacherToLesson';
import PriceLesson from '../PriceLesson/PriceLesson';

const AddLesson = () => {
  const [typeLesson, setTypeLesson] = useState('Сенсорна');
  return (
    <>
      <Formik enableReinitialize={true}>
        {({ errors, touched, values, setFieldValue }) => (
          <FormLesson>
            <TitleForm>Картка заняття</TitleForm>
            <ChoseInfoContainer>
              <FormMainInfo>
                <AddTypeLesson
                  typeLesson={typeLesson}
                  setTypeLesson={setTypeLesson}
                />
                <AddChildLesson />
                <AddTeacherToLesson />
                <PriceLesson />
              </FormMainInfo>
              <DatePickerLesson />
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
