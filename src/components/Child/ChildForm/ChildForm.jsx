import { Formik } from 'formik';
import { parse, format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
// import UploadFiles from '../UploadFiles/UploadFiles';
import { initialValuesChildForm, schemaChildUpdate } from '../Schemas/schema';
import { useDispatch } from 'react-redux';
import { addChild, updateChild } from 'redux/child/childOperetion';

function ChildForm({ child }) {
  const [age, setAge] = useState(null);
  const [valuesChildForm, setValuesChildForm] = useState(
    initialValuesChildForm
  );
  const [childImage, setChildImage] = useState('');
  // const [childFiles, setChildFiles] = useState([]);
  const history = useNavigate();
  const dispatch = useDispatch();

  const calculateAge = birthDate => {
    if (birthDate) {
      const today = new Date();
      const parsedBirthDate = parse(birthDate, 'yyyy-MM-dd', new Date());
      const yearsDiff = today.getFullYear() - parsedBirthDate.getFullYear();
      setAge(yearsDiff);
    }
  };
  useEffect(() => {
    if (child) {
      const childData = {
        name: child.name ? child.name : '',
        surname: child.surname ? child.surname : '',
        birthDate: child.birthDate ? child.birthDate : '',
        age: child.age ? child.age : '',
        childImage: child.childImage ? child.childImage : '',
        mather: child.mather ? child.mather : '',
        matherPhone: child.matherPhone ? child.matherPhone : '',
        father: child.father ? child.father : '',
        fatherPhone: child.fatherPhone ? child.fatherPhone : '',
        about: child.about ? child.about : '',
        sensornaya: child.sensornaya ? child.sensornaya : '',
        logoped: child.logoped ? child.logoped : '',
        correction: child.correction ? child.correction : '',
        tutor: child.tutor ? child.tutor : '',
        reabilitation: child.reabilitation ? child.reabilitation : '',
        childFiles: child.childFiles ? child.childFiles : '',
      };
      setValuesChildForm(childData);
      setChildImage(childData.childImage);
      // setChildFiles(childData.childFiles);
    }
  }, [child]);

  return (
    <Formik
      enableReinitialize={true}
      initialValues={valuesChildForm}
      validationSchema={schemaChildUpdate}
      onSubmit={values => {
        if (child) {
          const id = child._id;
          const combinedData = { id, values };
          dispatch(updateChild(combinedData));
        } else {
          dispatch(addChild(values));
          history('/children');
        }
      }}
    >
      {({ errors, touched, values, setFieldValue }) => (
        <FormChild>
          <FormImgContainer>
            <ChildUpdateFile
              childImages={childImage}
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
                  value={
                    values.birthDate
                      ? format(new Date(values.birthDate), 'yyyy-MM-dd')
                      : ''
                  }
                  onChange={event => {
                    const selectedDate = event.target.value;
                    setFieldValue('birthDate', selectedDate);
                    calculateAge(selectedDate);
                    setFieldValue('age', age);
                  }}
                />
                <AdgTitle>Років:</AdgTitle>
                <AgeDiscr>
                  {values.age ? values.age : calculateAge(values.birthDate)}
                </AgeDiscr>
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
          {/* <UploadFiles
            arrayFile={childFiles}
            childFiles={values.childFiles}
            setFieldValue={setFieldValue}
          /> */}
          <TextAreaTitle>Сенсорна:</TextAreaTitle>
          <FieldTextarea name="sensornaya" component="textarea" rows={6} />
          <TextAreaTitle>Логопед:</TextAreaTitle>
          <FieldTextarea name="logoped" component="textarea" rows={6} />
          <TextAreaTitle>Корекційний педагог:</TextAreaTitle>
          <FieldTextarea name="correction" component="textarea" rows={6} />
          <TextAreaTitle>Підготовка до школи:</TextAreaTitle>
          <FieldTextarea name="tutor" component="textarea" rows={6} />
          <TextAreaTitle>Реабілітолог:</TextAreaTitle>
          <FieldTextarea name="reabilitation" component="textarea" rows={6} />
          <FormButton type="submit">Зберегти зміни</FormButton>
        </FormChild>
      )}
    </Formik>
  );
}

export default ChildForm;
