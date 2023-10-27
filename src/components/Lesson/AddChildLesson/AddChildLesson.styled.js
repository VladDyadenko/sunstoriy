import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsFillPersonPlusFill } from 'react-icons/bs';

export const WrapperChildLesson = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 8px;
  width: 100%;
`;
export const ContainerSearch = styled.div`
  position: relative;
  width: 295px;
`;
export const TitleChildLesson = styled.h3`
  min-width: 100px;
  text-align: center;
  font-family: 'RobotoSlab';
  font-weight: 500;
  text-align: start;
  color: var(--main-green);
`;
export const ChildrenChosedList = styled.ul`
  width: 280px;
  margin-top: 5px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid var(--main-green);

  :not(:last-child) {
    margin-bottom: 5px;
  }
`;
export const ChildItem = styled.li`
  font-family: 'RobotoSlab';
  font-size: 14px;
  font-weight: 500;
  color: var(--main-green);

  cursor: pointer;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:hover {
    color: var(--main-dark-blue);
  }
`;

export const BtnAddChildLesson = styled(NavLink)`
  /* min-width: 120px; */
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 20px;
  color: var(--main-green);
  background: transparent;
  border: 1px solid #cfd0d0;
  border-radius: 24px 24px;

  cursor: pointer;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    text-decoration: underline;
  }
`;
export const BtnAddChildIcon = styled(BsFillPersonPlusFill)`
  width: 20px;
  height: 20px;
  fill: #fff;
  margin-left: 10px;
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
