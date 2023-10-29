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

  @media (min-width: 768px) {
    width: 45%;
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
