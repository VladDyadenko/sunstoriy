import { Formik } from 'formik';
import { FormLesson } from './AddLesson.styled';
import DatePickerLesson from '../DatePickerLesson/DatePickerLesson';
import { useState } from 'react';
import AddTypeLesson from '../AddTypeLesson/AddTypeLesson';
import AddChildLesson from '../AddChildLesson/AddChildLesson';

const AddLesson = () => {
  const [typeLesson, setTypeLesson] = useState('Сенсорна');
  return (
    <>
      <Formik enableReinitialize={true}>
        {({ errors, touched, values, setFieldValue }) => (
          <FormLesson>
            <AddTypeLesson
              typeLesson={typeLesson}
              setTypeLesson={setTypeLesson}
            />
            <DatePickerLesson />
            <AddChildLesson />
          </FormLesson>
        )}
      </Formik>
    </>
  );
};

export default AddLesson;
