import styled from 'styled-components';
import { Space } from 'antd';

export const Wrapper = styled(Space)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  border: 2px solid var(--main-yellow);
  border-radius: 8px;
  padding: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  .ant-select.css-dev-only-do-not-override-17a39f8.ant-select-single.ant-select-show-arrow {
    min-width: 190px;
  }
`;
export const DescrContainer = styled.div`
  min-width: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin: 10px 0;
`;

export const DescrSelectDay = styled.h3`
  width: 100%;
  text-align: center;
  font-family: 'RobotoSlab';
  font-size: 16px;
  font-weight: 500;
  color: var(--main-dark-blue);
`;
