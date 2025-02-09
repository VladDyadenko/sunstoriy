import styled from 'styled-components';
import { Table } from 'antd';

export const StyledTable = styled(Table)`
  .ant-table {
    font-size: 14px;
  }

  .ant-table-thead > tr > th {
    background-color: #f0f2f5 !important; /* Колір фону заголовків */
    font-weight: bold;
    text-align: center;
  }

  .ant-table-tbody > tr > td {
    text-align: center;
  }

  .ant-table-tbody > tr:hover {
    background-color: #e6f7ff; /* Колір при наведенні */
  }

  .ant-table-row[data-row-key='balance'] {
    font-size: 16px;
    font-weight: 400;
    background-color: #e6f7ff !important; /* Колір фону */
    color: #1890ff; /* Колір тексту */
  }
`;
export const ReportTitle = styled.h3`
  font-family: 'RobotoSlab';
  font-weight: 400;
  text-align: center;
  margin-bottom: 10px;
  padding: 7px 0;
  color: #1890ff;
  background-color: #e6f7ff;
  border-radius: 10px;
`;
export const StyledCell = styled.span`
  color: ${({ isNegative }) => (isNegative ? 'red' : 'inherit')};
`;
