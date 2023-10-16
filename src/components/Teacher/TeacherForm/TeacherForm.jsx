import { Formik } from 'formik';
import { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import {
  initialValuesTeacherForm,
  schemaTeacherUpdate,
} from '../Schemas/schema';
import {
  ColorWrapper,
  ErrorInfo,
  FieldTeacher,
  FieldTextarea,
  FormButton,
  FormImgContainer,
  FormTeacher,
  NameFormTeacher,
  TextAreaTitle,
} from './TeacherForm.styled';
import UpdateAvatar from 'ui/UpdateAvatar/UpdateAvatar';
import { ColorPicker } from 'antd';

const TeacherForm = () => {
  const [valuesTeacherForm, setValuesChildForm] = useState(
    initialValuesTeacherForm
  );
  const [teacherImage, setTeacherImage] = useState('');

  const [open, setOpen] = useState(false);

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={valuesTeacherForm}
        validationSchema={schemaTeacherUpdate}
        onSubmit={values => {
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
            <FormImgContainer>
              <UpdateAvatar
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
                  <TextAreaTitle>Колір фахівця:</TextAreaTitle>
                  <ColorPicker
                    open={open}
                    onOpenChange={setOpen}
                    showText={() => (
                      <DownOutlined
                        rotate={open ? 180 : 0}
                        style={{
                          color: 'rgba(0, 0, 0, 0.25)',
                        }}
                      />
                    )}
                  />
                </ColorWrapper>
              </NameFormTeacher>
            </FormImgContainer>
            <TextAreaTitle>Інформація про фахівця:</TextAreaTitle>
            <FieldTextarea name="about" component="textarea" rows={6} />
            <FormButton type="submit">Зберегти зміни</FormButton>
          </FormTeacher>
        )}
      </Formik>
    </>
  );
};

export default TeacherForm;
