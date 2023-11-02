import styled from 'styled-components';
import { Space } from 'antd';
import { BsDownload } from 'react-icons/bs';

export const WrapperPlans = styled(Space)`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  border: 2px solid var(--main-yellow);
  border-radius: 8px;
  padding: 10px;

  @media (min-width: 768px) {
    width: 45%;
  }
  .ant-space-item {
    width: 100%;
    display: flex;
  }
`;
export const DescrPlans = styled.h3`
  width: 100%;
  text-align: center;
  font-family: 'RobotoSlab';
  font-size: 16px;
  font-weight: 500;
  text-align: start;
  color: var(--main-green);
`;
export const DescrContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 10px 0;
`;
export const DateInfoContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;

  margin: 10px 0;

  @media (min-width: 1280px) {
    gap: 15px;
    flex-direction: row;
  }
`;
export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-top: 20px;
`;
export const ButtonSelectPeriod = styled.button`
  padding: 8px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 14px;
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
export const IconBtn = styled(BsDownload)`
  width: 20px;
  height: 20px;
  stroke: var(--main-dark-blue);
  margin-left: 8px;
  transition: stroke 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    stroke: var(--main-dark-blue);
  }
`;
