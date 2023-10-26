import styled from 'styled-components';
import { Space } from 'antd';

export const WrapperPlans = styled(Space)`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;

  @media (min-width: 1280px) {
    align-items: center;
    flex-direction: row;
    gap: 30px !important;
  }
`;
export const DescrPlans = styled.h3`
  width: 100%;
  min-width: 130px;
  text-align: center;
  font-family: 'RobotoSlab';
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
