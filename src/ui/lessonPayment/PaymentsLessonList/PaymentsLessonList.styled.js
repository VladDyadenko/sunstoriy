import { List } from 'antd';
import styled from 'styled-components';

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
export const PaymentInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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
