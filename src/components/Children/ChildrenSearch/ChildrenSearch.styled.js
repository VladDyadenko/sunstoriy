import { styled } from 'styled-components';
import { BsFillXCircleFill } from 'react-icons/bs';

export const Wrapper = styled.div`
  margin: 20px auto;
  position: relative;
  width: 295px;
`;

export const FormInput = styled.input`
  border-radius: 24px 24px;
  width: 295px;
  padding: 15px 25px;

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
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;
export const FormButton = styled.button`
  cursor: pointer;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 100%;
  top: 0;
  right: 0;
  border-radius: 24px 24px;

  outline: none;
  border: none;

  background-color: var(--bg-main-color);

  &:hover {
    background-color: var(--main-green);
    transition: 0.6s;
    animation: easeIn;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
export const BtnIcon = styled(BsFillXCircleFill)`
  width: 25px;
  height: 25px;
  fill: #fff;
`;
