import { Formik } from 'formik';
import ChildUpdateFile from '../ChildUpdateFile/ChildUpdateFile';
import {
  AdgTitle,
  AgeConteiner,
  AgeDiscr,
  FieldChild,
  FieldChildBirth,
  FieldTextarea,
  FormButton,
  FormChild,
  FormImgContainer,
  NameFormChild,
  TextAreaTitle,
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
        father: '',
        fatherPhone: '',
        about: '',
        sensornaya: '',
        logoped: '',
        correction: '',
        tutor: '',
        rehabilitation: '',
      }}
      onSubmit={values => {
        console.log(values);
        console.log(values.about);
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
          <TextAreaTitle>Запит батьків:</TextAreaTitle>
          <FieldTextarea name="about" component="textarea" rows={6} />
          <TextAreaTitle>Сенсорна:</TextAreaTitle>
          <FieldTextarea name="sensornaya" component="textarea" rows={6} />
          <TextAreaTitle>Логопед:</TextAreaTitle>
          <FieldTextarea name="logoped" component="textarea" rows={6} />
          <TextAreaTitle>Корекційний педагог:</TextAreaTitle>
          <FieldTextarea name="correction" component="textarea" rows={6} />
          <TextAreaTitle>Підготовка до школи:</TextAreaTitle>
          <FieldTextarea name="tutor" component="textarea" rows={6} />
          <TextAreaTitle>Реабілітолог:</TextAreaTitle>
          <FieldTextarea name="rehabilitation" component="textarea" rows={6} />
          <FormButton type="submit">Зберегти зміни</FormButton>
        </FormChild>
      )}
    </Formik>
  );
}

export default ChildForm;
