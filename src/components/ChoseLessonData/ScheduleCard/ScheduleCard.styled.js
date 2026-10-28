import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'antd';
import { AiOutlineDelete } from 'react-icons/ai';
import { TbEyeCheck } from 'react-icons/tb';
import { AiFillEdit } from 'react-icons/ai';

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  min-width: 90px;
  padding: 5px;

  ${props => {
    const { 'aria-current': ariaCurrent } = props;
    return `
    border:2px solid ${ariaCurrent};
    border-radius:8px;
    color:${ariaCurrent};
   
  `;
  }}
`;
export const CardDescr = styled.p`
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 14px;
`;
export const CardDescrChild = styled.p`
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 14px;
  color: var(--main-text-black);
`;
export const CardLink = styled(NavLink)`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 3px;
  right: -13px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background-color: var(--main-dark-blue-bg);
  cursor: pointer;

  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: var(--main-dark-blue);
  }
`;
export const IconLessonSee = styled(TbEyeCheck)`
  width: 17px;
  height: 17px;
  stroke: var(--header-main-color);
`;
export const ButtonLessonDelete = styled(Button)`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 71px;
  right: -13px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background-color: #fa4a3b;
  cursor: pointer;

  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: #da292b;
  }
`;
export const IconLessonDelete = styled(AiOutlineDelete)`
  width: 17px;
  height: 17px;
  fill: var(--header-main-color);
`;
export const ButtonLessonEdit = styled(NavLink)`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 37px;
  right: -13px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 50%;
  background-color: var(--bg-main-color);
  cursor: pointer;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: var(--main-green);
    border: none;
  }
`;
export const IconLessonEdit = styled(AiFillEdit)`
  width: 17px;
  height: 17px;
  fill: var(--header-main-color);
`;
