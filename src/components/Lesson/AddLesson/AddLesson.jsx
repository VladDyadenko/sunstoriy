import { Formik } from 'formik';
import { FormLesson } from './AddLesson.styled';
import DatePickerLesson from '../DatePickerLesson/DatePickerLesson';
import { useState } from 'react';
import AddTypeLesson from '../AddTypeLesson/AddTypeLesson';

const AddLesson = () => {
  const [typeLesson, setTypeLesson] = useState('Сенсорна');
  return (
    <>
      <AddTypeLesson typeLesson={typeLesson} setTypeLesson={setTypeLesson} />
      <Formik enableReinitialize={true}>
        {({ errors, touched, values, setFieldValue }) => (
          <FormLesson>
            <DatePickerLesson />
          </FormLesson>
        )}
      </Formik>
    </>
  );
};

export default AddLesson;
