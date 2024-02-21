import styled from 'styled-components';
import { Button } from 'antd';

export const ButtonContainer = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
`;
const buttonStyles = `
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
`;
export const PlanBtn = styled.button`
  ${buttonStyles}
  background-color: #008000;

  &:hover {
    background-color: #006400;
  }
`;

export const CancelBtn = styled.button`
  ${buttonStyles}
  background-color: #B22222;
  &:hover {
    background-color: #8b0000;
  }
`;

export const ReplaceBtn = styled.button`
  ${buttonStyles}
  background-color: #48D1CC;
  &:hover {
    background-color: #00ced1;
  }
`;

export const LessonButtonCancel = styled(Button)`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0456ba;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 11px;
  padding: 0 5px;
  margin-top: 5px;
  cursor: pointer;
  background-color: #fff;

  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  /* &:hover {
    background-color: #fff !important;
  } */
`;
