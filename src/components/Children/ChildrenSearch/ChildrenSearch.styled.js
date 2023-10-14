import { styled } from 'styled-components';

export const Wrapper = styled.div`
  margin: 20px auto;
  position: relative;
  width: 295px;

  @media screen and (min-width: 768px) {
    width: 362px;
  }

  @media screen and (min-width: 1440px) {
    width: 510px;
  }
`;

export const FormInput = styled.input`
  border-radius: 24px 44px;
  width: 295px;
  padding: 16px 25px;

  outline: #cfd0d0 1px solid;
  border: none;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:hover {
    outline: var(--main-green) 1px solid;
  }
  &:focus {
    outline: var(--main-green) 1px solid;
  }

  @media screen and (min-width: 768px) {
    width: 362px;
    font-size: 14px;
    padding: 17.7px 20px;
  }

  @media screen and (min-width: 1440px) {
    width: 510px;
    font-size: 16px;
    padding: 23px 48px;
  }
`;
export const FormButton = styled.button`
  cursor: pointer;
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  border-radius: 24px 42px;
  padding: 14.7px 25px;

  outline: none;
  border: none;

  color: #fafafa;
  background-color: var(--bg-main-color);
  font-family: 'RobotoSlab';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    background-color: var(--main-green);
    transition: 0.6s;
    animation: easeIn;
  }

  @media screen and (min-width: 768px) {
    width: 161px;
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 161px;
  }
`;
