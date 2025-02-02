import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import { BsFillPatchQuestionFill } from 'react-icons/bs';
import { FaRegCopy } from 'react-icons/fa';
import { FcMoneyTransfer } from 'react-icons/fc';

export const Wrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  height: 100%;
`;
export const InfoColor = styled.div`
  width: 33%;
  height: 100%;
  padding: 5px;
  display: flex;
  align-items: center;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  ${props => {
    if (props['aria-description'] === 'cancel') {
      return `background-color: #a9a9a9`;
    } else if (props['aria-current']) {
      return `background-color: ${props['aria-current']}`;
    } else {
      return `background-color: #0456ba`;
    }
  }}
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
  ${props => {
    if (props['aria-description'] === 'cancel') {
      return `color: #a9a9a9`;
    } else if (props['aria-current']) {
      return `color: ${props['aria-current']}`;
    } else {
      return `color: var(--main-dark-blue)`;
    }
  }}
`;
export const InfoChild = styled.p`
  font-family: 'RobotoSlab';
  font-weight: 500;
  line-height: 1.2;
  font-size: 12px;
  ${props => {
    if (props['aria-description'] === 'cancel') {
      return `color: #a9a9a9`;
    } else if (props['aria-current']) {
      return `color: ${props['aria-current']}`;
    } else {
      return `color: var(--main-green)`;
    }
  }}
`;

const btnStyled = `
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
  cursor: pointer;

   transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    color: #fff !important;
  }
`;
export const LessonDelete = styled(Button)`
  ${btnStyled}
  background-color: #fa4a3b;
  &:hover {
    background-color: #da292b;
  }
`;

export const CardLessonLink = styled(NavLink)`
  ${btnStyled}
  background-color: var(--main-dark-blue-bg);

  &:hover {
    background-color: var(--main-dark-blue);
  }
`;
export const CardLessonCopy = styled(NavLink)`
  ${btnStyled}
  background-color: var(--lightSeaGreen);

  &:hover {
    background-color: var(--teal);
  }
`;
export const LessonEdit = styled(NavLink)`
  ${btnStyled}
  background-color: var(--main-green);

  &:hover {
    background-color: var(--bg-main-color);
    border: none;
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
export const IconPaymentLesson = styled(FcMoneyTransfer)`
  width: 23px;
  height: 23px;
`;

export const PaymentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding: 0 5px;
`;
export const InfoAndPaymentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

export const IconButtonCopy = styled(FaRegCopy)`
  width: 17px;
  height: 17px;
  stroke: var(--header-main-color);
`;
