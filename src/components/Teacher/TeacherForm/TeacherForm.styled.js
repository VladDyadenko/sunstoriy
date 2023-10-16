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
export const FormImgContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  margin: 20px 0;

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
  max-width: 600px;

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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
