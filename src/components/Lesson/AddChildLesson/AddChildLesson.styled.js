import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapperChildLesson = styled.div`
  position: relative;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    align-items: center;
  }
`;
export const ContainerSearch = styled.div`
  position: relative;
  width: 295px;
`;
export const TitleChildLesson = styled.h3`
  min-width: 106px;
  text-align: center;
  font-family: 'RobotoSlab';
  font-size: 16px;
  font-weight: 500;
  text-align: start;
  color: var(--main-dark-blue);
`;
export const ChildrenChosedList = styled.ul`
  width: 280px;
  margin-top: 5px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid var(--main-green);
  background-color: rgba(0, 0, 0, 0.7);

  transform: translateY(0);
  visibility: visible;
  opacity: 1;

  :not(:last-child) {
    margin-bottom: 5px;
  }
`;
export const ChildItem = styled.li`
  font-family: 'RobotoSlab';
  font-size: 14px;
  font-weight: 500;
  color: #fff;

  cursor: pointer;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:hover {
    color: #ffff00;
    text-decoration: underline;
    /* color: var(--main-dark-blue); */
  }
`;

export const BtnAddChildLesson = styled(NavLink)`
  min-width: 130px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: start;
  text-decoration: none;
  font-family: 'RobotoSlab';
  font-weight: 500;
  color: var(--main-green);
  background: transparent;
  border: 2px solid var(--main-green);
  border-radius: 8px;

  cursor: pointer;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    text-decoration: underline;
  }
`;

export const BtnChildLesson = styled(NavLink)`
  width: 70%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 16px;
  border-radius: 8px;
  color: var(--main-dark-blue);
  background: var(--header-main-color);
  border: 1px solid var(--main-dark-blue);

  cursor: pointer;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background: var(--main-dark-blue);
    color: var(--header-main-color);
    border: 1px solid transparent;
  }
`;
export const ModalContainer = styled.div`
  position: absolute;
  top: 60px;
  left: -15px;
  max-width: 345px;
  width: 100%;
  background: transparent;
  transform: translateY(0);
  visibility: hidden;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
  background: #fff;
  padding: 15px;

  @media screen and (min-width: 1280px) {
    left: 240px;
  }
  @media screen and (min-width: 1440px) {
    left: 315px;
  }
`;
export const ChildDescr = styled.div`
  width: 100%;
  min-height: 33px;
  display: flex;
  align-items: center;
  justify-content: start;
`;
