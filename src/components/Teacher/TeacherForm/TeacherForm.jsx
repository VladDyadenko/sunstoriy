import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { Select } from 'antd';
import { CirclesWithBar } from 'react-loader-spinner';
import {
  initialValuesTeacherForm,
  options,
  schemaTeacherUpdate,
} from '../Schemas/schema';
import {
  ColorWrapper,
  ContactContainer,
  ContactDescr,
  ErrorInfo,
  FieldColor,
  FieldTeacher,
  FieldTeacherPhone,
  FieldTextarea,
  FormButton,
  FormImgContainer,
  FormTeacher,
  NameFormTeacher,
  SelectContainer,
  SelectDescr,
  TeacherAddTitle,
  TextAreaTitle,
} from './TeacherForm.styled';
import UpdateAvatar from 'ui/UpdateAvatar/UpdateAvatar';
import { addTeacher, updateTeacher } from 'redux/teacher/teacherOperetion';
import { selectTeacherOperetion } from 'redux/teacher/teacherSelector';

const TeacherForm = ({ teacher }) => {
  const [valuesTeacherForm, setValuesChildForm] = useState(
    initialValuesTeacherForm
  );
  const [teacherImage, setTeacherImage] = useState('');
  const [teacherSpecialization, setTeacherSpecialization] = useState([]);
  const [color, setColor] = useState('#0456BA');
  const [buttonView, setButtonView] = useState(true);

  const operetion = useSelector(selectTeacherOperetion);
  console.log(operetion);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const source = searchParams.get('source');
  useEffect(() => {
    if (source === 'buttonViewing') {
      setButtonView(false);
    }
  }, [source]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (teacher) {
      const teacherData = {
        name: teacher.name ? teacher.name : '',
        surname: teacher.surname ? teacher.surname : '',
        teacherImage: teacher.teacherImage ? teacher.teacherImage : '',
        phone: teacher.phone ? teacher.phone : '',
        email: teacher.email ? teacher.email : '',
        color: teacher.color ? teacher.color : '#0456BA',
        about: teacher.about ? teacher.about : '',
        specialization:
          teacher.specialization &&
          teacher.specialization.length === 1 &&
          teacher.specialization[0].trim() === ''
            ? []
            : teacher.specialization,
      };
      setValuesChildForm(teacherData);
      setTeacherImage(teacherData.teacherImage);
      setTeacherSpecialization(teacherData.specialization);
      setColor(teacherData.color);
    }
  }, [teacher]);

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={valuesTeacherForm}
        validationSchema={schemaTeacherUpdate}
        onSubmit={values => {
          if (buttonView) {
            if (teacher) {
              const id = teacher._id;
              const combinedData = { id, values };
              dispatch(updateTeacher(combinedData)).then(() => {
                navigate('/teachers');
              });
            } else {
              dispatch(addTeacher(values)).then(() => {
                navigate('/teachers');
              });
            }
          } else {
            navigate(-1);
            setButtonView(true);
          }
        }}
      >
        {({ errors, touched, values, setFieldValue }) => (
          <FormTeacher>
            <TeacherAddTitle>Картка фахівця</TeacherAddTitle>
            <FormImgContainer>
              <UpdateAvatar
                avatar={teacherImage}
                fileName="teacherImage"
                setFieldValue={setFieldValue}
              />
              <NameFormTeacher>
                <FieldTeacher name="name" type="text" placeholder="Ім'я" />
                {touched.name && errors.name && (
                  <ErrorInfo>{errors.name}</ErrorInfo>
                )}

                <FieldTeacher
                  name="surname"
                  type="text"
                  placeholder="Фамілія"
                />
                {errors.surname && <ErrorInfo>{errors.surname}</ErrorInfo>}
                <ColorWrapper>
                  <TextAreaTitle>Колір для розкладу:</TextAreaTitle>
                  <FieldColor
                    name="color"
                    type="color"
                    value={color}
                    onChange={event => {
                      const selectedColor = event.target.value;
                      setColor(selectedColor);
                      setFieldValue('color', selectedColor);
                    }}
                  />
                </ColorWrapper>
              </NameFormTeacher>
            </FormImgContainer>
            <ContactContainer>
              <ContactDescr>Телефон:</ContactDescr>
              <FieldTeacherPhone
                name="phone"
                type="tel"
                autoComplete="off"
                placeholder="+380(__)___ __ __"
              />
            </ContactContainer>
            <ContactContainer>
              <ContactDescr>e-mail:</ContactDescr>
              <FieldTeacherPhone
                name="email"
                type="email"
                autoComplete="off"
                placeholder="example@example.com"
              />
            </ContactContainer>
            <SelectContainer>
              <SelectDescr>Спеціалізація:</SelectDescr>
              <Select
                mode="multiple"
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  marginTop: '10px',
                  border: '2px solid #68bf48',
                  borderRadius: '8px',
                }}
                value={teacherSpecialization}
                onChange={e => {
                  setTeacherSpecialization(e);
                  setFieldValue(
                    'specialization',
                    e ? e : teacherSpecialization
                  );
                }}
                options={options}
              />
            </SelectContainer>

            <TextAreaTitle>Додаткова інформація:</TextAreaTitle>
            <FieldTextarea name="about" component="textarea" rows={6} />

            <FormButton type="submit">
              {operetion === 'addTeacher' ? (
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
          </FormTeacher>
        )}
      </Formik>
    </>
  );
};

export default TeacherForm;
