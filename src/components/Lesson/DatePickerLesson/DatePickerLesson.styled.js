import styled from 'styled-components';
import { Space } from 'antd';

export const WrapperPlans = styled(Space)`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  border: 2px solid var(--main-yellow);
  border-radius: 8px;
  padding: 10px;

  @media (max-width: 1279px) {
    min-height: 320px;
  }
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
  color: var(--main-dark-blue);
`;
export const DescrContainer = styled.div`
  min-width: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin: 10px 0;
`;
export const DateInfoContainer = styled.div`
  width: 100%;
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

export const TimeContainers = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`;
