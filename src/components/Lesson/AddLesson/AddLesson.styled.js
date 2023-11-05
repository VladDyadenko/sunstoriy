import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormLesson = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 345px;
  padding-bottom: 30px;

  @media (min-width: 768px) {
    width: 738px;
  }
  @media (min-width: 1280px) {
    width: 1250px;
  }
  @media (min-width: 1440px) {
    width: 1410px;
  }
`;
export const ErrorInfo = styled.p`
  color: red;
`;
export const TitleForm = styled.h2`
  width: 100%;
  text-align: center;
  font-family: 'RobotoSlab';
  font-weight: 500;
  color: var(--main-green);
`;
export const FormMainInfo = styled.div`
  max-width: 345px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 2px solid var(--main-yellow);
  border-radius: 8px;
  padding: 10px;

  @media (min-width: 346px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 45%;
    max-width: 100%;
  }
  @media (min-width: 768px) {
    width: 50%;
    max-width: 100%;
  }
`;
export const ChoseInfoContainer = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
export const TextAreaTitle = styled.label`
  width: 100%;
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
export const FormButtonLesson = styled.button`
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
