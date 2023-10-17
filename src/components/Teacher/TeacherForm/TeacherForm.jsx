import { Formik } from 'formik';
import { useState } from 'react';
import { Select } from 'antd';
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

const TeacherForm = () => {
  const [valuesTeacherForm, setValuesChildForm] = useState(
    initialValuesTeacherForm
  );
  const [teacherImage, setTeacherImage] = useState('');

  const [color, setColor] = useState('#0456BA');

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={valuesTeacherForm}
        validationSchema={schemaTeacherUpdate}
        onSubmit={values => {
          console.log(values);
          // if (child) {
          //   const id = child._id;
          //   const combinedData = { id, values };
          //   dispatch(updateChild(combinedData)).then(() => {
          //     history('/children');
          //   });
          // } else {
          //   dispatch(addChild(values)).then(() => {
          //     history('/children');
          //   });
          // }
        }}
      >
        {({ errors, touched, values, setFieldValue }) => (
          <FormTeacher>
            <TeacherAddTitle>Картка фахівця</TeacherAddTitle>
            <FormImgContainer>
              <UpdateAvatar
                setValuesChildForm={setValuesChildForm}
                setTeacherImage={setTeacherImage}
                childImages={teacherImage}
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
                onChange={value => {
                  const specialization = value;
                  setFieldValue('specialization', specialization);
                }}
                options={options}
              />
            </SelectContainer>

            <TextAreaTitle>Додаткова інформація:</TextAreaTitle>
            <FieldTextarea name="about" component="textarea" rows={6} />
            <FormButton type="submit">Зберегти зміни</FormButton>
          </FormTeacher>
        )}
      </Formik>
    </>
  );
};

export default TeacherForm;
