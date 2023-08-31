import { Formik } from 'formik';
import ChildUpdateFile from '../ChildUpdateFile/ChildUpdateFile';
import {
  AdgTitle,
  AgeConteiner,
  AgeDiscr,
  FieldChild,
  FieldChildBirth,
  FormButton,
  FormChild,
  FormImgContainer,
  NameFormChild,
} from './ChildForm.styled';
import { parse } from 'date-fns';
import { useState } from 'react';
import ParentsContainer from '../ParentsContainer/ParentsContainer';

function ChildForm() {
  const [age, setAge] = useState(null);

  const calculateAge = birthDate => {
    if (birthDate) {
      const today = new Date();
      const parsedBirthDate = parse(birthDate, 'yyyy-MM-dd', new Date());
      const yearsDiff = today.getFullYear() - parsedBirthDate.getFullYear();
      setAge(yearsDiff);
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        surname: '',
        birthDate: '',
        age: '',
        file: null,
        mather: '',
        matherPhone: '',
      }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ values, setFieldValue }) => (
        <FormChild>
          <FormImgContainer>
            <ChildUpdateFile file={values.file} setFieldValue={setFieldValue} />
            <NameFormChild>
              <FieldChild name="name" type="text" placeholder="Ім'я" />
              <FieldChild name="surname" type="text" placeholder="Фамілія" />
              <AgeConteiner>
                <FieldChildBirth
                  name="birthDate"
                  type="date"
                  onChange={event => {
                    const selectedDate = event.target.value;
                    setFieldValue('birthDate', selectedDate);
                    calculateAge(selectedDate);
                    setFieldValue('age', age);
                  }}
                />
                <AdgTitle>Років:</AdgTitle>
                <AgeDiscr> {age !== null ? `${age}` : ''}</AgeDiscr>
              </AgeConteiner>
            </NameFormChild>
          </FormImgContainer>
          <ParentsContainer
            title={'Мама'}
            inputName={'mather'}
            inputPhone={'matherPhone'}
          />
          <ParentsContainer
            title={'Батько'}
            inputName={'father'}
            inputPhone={'fatherPhone'}
          />
          <FormButton type="submit">Зберегти зміни</FormButton>
        </FormChild>
      )}
    </Formik>
  );
}

export default ChildForm;
