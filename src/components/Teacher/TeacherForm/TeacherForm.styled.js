import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormTeacher = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 25px 15px 40px 15px;
  width: 375px;

  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
  }
  @media (min-width: 1440px) {
    width: 1440px;
  }
`;
export const TeacherAddTitle = styled.p`
  width: 100%;
  font-family: 'RobotoSlab';

  font-weight: 500;
  font-size: 24px;
  color: var(--main-green);
  margin: 0;
  text-align: center;
`;

export const FormImgContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;

  @media (min-width: 768px) {
    gap: 30px;
  }
`;
export const NameFormTeacher = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
`;
export const FieldTeacher = styled(Field)`
  width: 100%;
  height: 40px;
  max-width: 400px;

  padding: 12px 20px;
  color: #2a2a2a;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.28px;
  border: solid 2px var(--bg-main-color);
  border-radius: 6px;
  opacity: 0.8;
  background-color: transparent;

  &:focus-visible {
    border: solid 2px var(--main-green);
  }
`;
export const ErrorInfo = styled.p`
  color: red;
`;
export const TextAreaTitle = styled.label`
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 18px;
  color: var(--main-green);
  margin-bottom: 5px;
  margin-top: 15px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: start;
  }
`;
export const ContactDescr = styled.label`
  display: flex;
  align-items: center;
  justify-content: start;
  min-width: 130px;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 18px;
  color: var(--main-green);
  text-align: center;

  @media (min-width: 768px) {
    text-align: start;
  }
`;

export const ContactContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  gap: 10px;
  text-align: center;
  justify-content: start;
`;
export const SelectDescr = styled.label`
  display: flex;
  align-items: center;
  justify-content: start;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 18px;
  color: var(--main-green);
  text-align: center;

  @media (min-width: 768px) {
    text-align: start;
  }
`;
export const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: start;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 10px;
  }
`;

export const FieldTextarea = styled(Field)`
  width: 100%;
  padding: 12px 20px;
  color: #2a2a2a;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.28px;
  border: solid 2px var(--bg-main-color);
  border-radius: 6px;
  opacity: 0.8;
  background-color: transparent;
  margin-bottom: 20px;

  &:focus-visible {
    border: solid 2px var(--main-green);
  }
`;
export const FormButton = styled.button`
  border-radius: 4px;
  margin: 0 auto;
  width: 200px;
  background-color: var(--bg-main-color);
  color: var(--header-main-color);
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 10px 10px;
  font-family: 'RobotoSlab';
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
    border-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--main-green);
    border-color: var(--header-main-color);
  }
`;

export const ColorWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
`;

export const FieldColor = styled(Field)`
  width: 100px;
  border-color: var(--main-green);
  cursor: pointer;
`;

export const FieldTeacherPhone = styled(Field)`
  height: 40px;
  width: 100%;
  padding: 12px 20px;
  color: #2a2a2a;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.28px;
  border: solid 2px var(--bg-main-color);
  border-radius: 6px;
  opacity: 0.8;
  background-color: transparent;

  &:focus-visible {
    border: solid 2px var(--main-green);
  }

  @media (min-width: 768px) {
    max-width: 400px;
    flex: 1;
  }
`;
export const TeacherPhoneTitle = styled.label`
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 16px;
  color: var(--main-green);

  @media (min-width: 768px) {
    width: 110px;
  }
`;
