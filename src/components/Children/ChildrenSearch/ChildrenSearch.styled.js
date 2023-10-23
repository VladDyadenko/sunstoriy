import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsFillXCircleFill } from 'react-icons/bs';
import { BsFillPersonPlusFill } from 'react-icons/bs';

export const SearchContainer = styled.div`
  margin: 15px auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 10px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Wrapper = styled.div`
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
export const BtnAddIcon = styled(BsFillPersonPlusFill)`
  width: 20px;
  height: 20px;
  fill: #fff;
  margin-left: 10px;
`;
export const BtnAddChild = styled(NavLink)`
  /* min-width: 120px; */
  padding: 10px 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 16px;
  border-radius: 8px;
  color: var(--header-main-color);
  background: var(--bg-main-color);
  border: 1px solid var(--bg-main-color);

  cursor: pointer;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: var(--main-green);
    color: var(--header-main-color);
    border: 1px solid transparent;
  }
`;
