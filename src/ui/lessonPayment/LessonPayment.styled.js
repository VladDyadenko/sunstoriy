import { List } from 'antd';
import styled from 'styled-components';

export const PaymentLessonBtn = styled.button`
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
  background-color: #008080;
  cursor: pointer;

  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: #008080;
    color: #fff;
  }
`;
export const PaymentContainer = styled(List)`
  border: 1px solid var(--main-yellow);
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 30px;

  & .ant-list-item {
    padding: 8px;
    border-radius: 4px;
    flex-direction: column;
    gap: 10px;

    & .ant-list-item-action {
      width: 100%;
      margin: 10px 0 0 0 !important;
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 20px;
    }
    & .ant-list-item-meta-title,
    .ant-list-item-meta-description {
      text-align: center;
    }
  }
`;
export const PaymentTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const PaymentTitle = styled.h2`
  text-align: center;
  color: var(--main-green);
`;
export const PaymentTitleOther = styled.h3`
  margin: 30px 0;
  text-align: start;
  color: var(--main-green);
`;
export const DateInfoTitle = styled.span`
  margin-left: 20px;
  color: var(--main-dark-blue);
`;
