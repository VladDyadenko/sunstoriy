import { Formik } from 'formik';
import { parse } from 'date-fns';
import { useState } from 'react';
import {
  AdgTitle,
  AgeConteiner,
  AgeDiscr,
  ErrorInfo,
  FieldChild,
  FieldChildBirth,
  FieldTextarea,
  FormButton,
  FormChild,
  FormImgContainer,
  NameFormChild,
  TextAreaTitle,
} from './ChildForm.styled';
import ChildUpdateFile from '../ChildUpdateFile/ChildUpdateFile';
import ParentsContainer from '../ParentsContainer/ParentsContainer';
import UploadFiles from '../UploadFiles/UploadFiles';
import { initialValuesChildForm, schemaChildUpdate } from '../Schemas/schema';
import { useDispatch } from 'react-redux';
import { addChild } from 'redux/child/childOperetion';

function ChildForm() {
  const [age, setAge] = useState(null);

  const dispatch = useDispatch();

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
      initialValues={initialValuesChildForm}
      validationSchema={schemaChildUpdate}
      onSubmit={values => {
        dispatch(addChild(values));
      }}
    >
      {({ errors, touched, values, setFieldValue }) => (
        <FormChild>
          <FormImgContainer>
            <ChildUpdateFile
              childImage={values.childImage}
              setFieldValue={setFieldValue}
            />
            <NameFormChild>
              <FieldChild name="name" type="text" placeholder="Ім'я" />
              {touched.name && errors.name && (
                <ErrorInfo>{errors.name}</ErrorInfo>
              )}
              <FieldChild name="surname" type="text" placeholder="Фамілія" />
              {errors.surname && <ErrorInfo>{errors.surname}</ErrorInfo>}
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
            touched={touched}
            errors={errors}
          />
          <ParentsContainer
            title={'Батько'}
            inputName={'father'}
            inputPhone={'fatherPhone'}
            touched={touched}
            errors={errors}
          />
          <TextAreaTitle>Запит батьків:</TextAreaTitle>
          <FieldTextarea name="about" component="textarea" rows={6} />
          <UploadFiles
            childFiles={values.childFiles}
            setFieldValue={setFieldValue}
          />
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
