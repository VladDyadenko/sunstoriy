import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { CirclesWithBar } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AdgTitle,
  AgeConteiner,
  AgeDiscr,
  ErrorInfo,
  FieldChild,
  FieldTextarea,
  FormButton,
  FormChild,
  FormImgContainer,
  NameFormChild,
  TextAreaTitle,
} from './ChildForm.styled';
import ParentsContainer from '../ParentsContainer/ParentsContainer';
// import UploadFiles from '../UploadFiles/UploadFiles';
import { initialValuesChildForm, schemaChildUpdate } from '../Schemas/schema';
import { addChild, updateChild } from 'redux/child/childOperetion';
import UpdateAvatar from 'ui/UpdateAvatar/UpdateAvatar';
import { selectChildrenOperetion } from 'redux/child/childSelector';
import DatePickerForm from 'ui/DataPiker/DataPiker';

function ChildForm({ child }) {
  const [valuesChildForm, setValuesChildForm] = useState(
    initialValuesChildForm
  );
  const [childImage, setChildImage] = useState('');
  const [buttonView, setButtonView] = useState(true);

  const location = useLocation();

  const operetion = useSelector(selectChildrenOperetion);
  const searchParams = new URLSearchParams(location.search);
  const source = searchParams.get('source');
  useEffect(() => {
    if (source === 'buttonViewing') {
      setButtonView(false);
    }
  }, [source]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        if (buttonView) {
          if (child) {
            const id = child._id;
            const combinedData = { id, values };
            dispatch(updateChild(combinedData)).then(() => {
              navigate('/children');
            });
          } else {
            dispatch(addChild(values)).then(() => {
              if (source === '/lesson') {
                navigate(-1);
              } else navigate('/children');
            });
          }
        } else {
          navigate(-1);
        }
      }}
    >
      {({ errors, touched, values, setFieldValue }) => (
        <FormChild>
          <FormImgContainer>
            <UpdateAvatar
              avatar={childImage}
              fileName="childImage"
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
                <DatePickerForm
                  valueBirthDate={values.birthDate}
                  setFieldValue={setFieldValue}
                />
                <AdgTitle>Років:</AdgTitle>
                <AgeDiscr>{values.age}</AgeDiscr>
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
          <FormButton type="submit">
            {operetion === 'updateChild' || operetion === 'addChild' ? (
              <CirclesWithBar
                height="21"
                width="50"
                color="#ffffff"
                wrapperStyle={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                visible={true}
                ariaLabel="circles-with-bar-loading"
              />
            ) : buttonView ? (
              'Зберегти зміни'
            ) : (
              'Назад'
            )}
          </FormButton>
        </FormChild>
      )}
    </Formik>
  );
}

export default ChildForm;
