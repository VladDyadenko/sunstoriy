import styled from 'styled-components';
import { ErrorMessage, Field } from 'formik';

export const InputForm = styled(Field)`
  width: 100%;
  padding: 12px 40px;
  color: var(--header-main-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  border: solid 1px var(--header-main-color);
  border-radius: 6px;
  opacity: 0.8;
  background-color: transparent;

  &::placeholder {
    color: var(--header-main-color);
  }

  &:not(:placeholder-shown) {
    color: #3cbc81;
  }

  &:hover,
  &:focus {
    border: 1px solid #ffffff;
    outline: 1px solid #ffffff;
    color: #ffffff;
    opacity: 1;
  }

  .error & {
    border: 1px solid #e74a3b;
    outline: none;
  }
  .valid & {
    border: 1px solid #3cbc81;
    outline: none;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const IconFeedback = styled.svg`
  position: absolute;
  width: 18px;
  height: 18px;
  top: 50%;
  transform: translate(0, -50%);
  right: 14px;
`;
export const IconStyled = styled.svg`
  position: absolute;
  stroke: #ffffff;
  width: 18px;
  height: 18px;
  top: 50%;
  transform: translate(0, -50%);
  left: 14px;
  .error & {
    stroke: #e74a3b;
  }
  .valid & {
    stroke: #3cbc81;
  }
`;
export const StyleErrorMessage = styled(ErrorMessage)``;

export const Error = styled.div`
  position: absolute;
  width: 100%;
  color: red;
  font-size: 10px;
  margin-top: 1px;
  margin-left: 1px;

  @media screen and (min-width: 768px) {
    margin-top: 3px;
    margin-left: 3px;
  }
`;

export const FeedbackFormGroup = styled.div`
  width: 100%;
  margin-bottom: 12px;
  position: relative;
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
