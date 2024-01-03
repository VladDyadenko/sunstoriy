import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import { BsFillPatchQuestionFill } from 'react-icons/bs';
import { FaRegCopy } from 'react-icons/fa';

export const Wrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  height: 100%;
`;
export const InfoColor = styled.div`
  width: 30%;
  height: 100%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  background-color: var(--main-dark-blue);

  background-color: ${props => props['aria-current'] || '#0456ba'};
`;
export const ButtonContainer = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
`;
export const InfoContainer = styled.div`
  width: 80%;
  padding: 5px;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;

  & p {
    margin-bottom: 3px;
  }
`;
export const InfoTeacher = styled.p`
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.2;
  color: var(--main-dark-blue);
`;
export const InfoChild = styled.p`
  font-family: 'RobotoSlab';
  font-weight: 500;
  line-height: 1.2;
  font-size: 12px;
  color: var(--main-green);
`;
export const CardLessonLink = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  gap: 8px;
  border: none;
  border-radius: 8px;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  background-color: var(--main-dark-blue-bg);
  cursor: pointer;

  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: var(--main-dark-blue);
    color: #fff !important;
  }
`;
export const CardLessonCopy = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  gap: 8px;
  border: none;
  border-radius: 8px;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  background-color: var(--lightSeaGreen);
  cursor: pointer;

  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: var(--teal);
    color: #fff !important;
  }
`;
export const LessonEdit = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  gap: 8px;
  border: none;
  border-radius: 8px;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  background-color: var(--main-green);
  cursor: pointer;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: var(--bg-main-color);
    border: none;
    color: #fff !important;
  }
`;
export const LessonDelete = styled(Button)`
  width: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  gap: 8px;
  border: none;
  border-radius: 8px;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  border: none;
  background-color: #fa4a3b;
  cursor: pointer;

  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: #da292b;
    color: #fff !important;
  }
`;

export const DescrDeleteBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
export const LessonButton = styled(Button)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  background-color: #fff;

  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  /* &:hover {
    background-color: #fff !important;
  } */
`;
export const IconButtonChose = styled(BsFillPatchQuestionFill)`
  width: 28px;
  height: 28px;
  fill: var(--main-dark-blue);
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    fill: #fff;
  }
`;
export const IconButtonCopy = styled(FaRegCopy)`
  width: 17px;
  height: 17px;
  stroke: var(--header-main-color);
`;
