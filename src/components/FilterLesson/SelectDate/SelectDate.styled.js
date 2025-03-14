import styled from 'styled-components';
import { Space } from 'antd';
import { BsDownload } from 'react-icons/bs';

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

export const ButtonChoseDate = styled.button`
  width: 100%;
  min-width: 180px;
  padding: 8px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  gap: 8px;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 14px;
  border-radius: 8px;
  background: var(--main-dark-blue);
  color: var(--header-main-color);
  border: 1px solid transparent;

  cursor: pointer;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    color: var(--main-dark-blue);
    background: var(--header-main-color);
    border: 1px solid var(--main-dark-blue);
  }
`;
export const IconBtn = styled(BsDownload)`
  width: 15px;
  height: 15px;
  stroke: var(--main-dark-blue);
  margin-left: 8px;
  transition: stroke 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    stroke: var(--main-dark-blue);
  }
`;
