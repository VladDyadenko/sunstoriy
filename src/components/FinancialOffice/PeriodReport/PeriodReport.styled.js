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

  .ant-table-row[data-row-key='balance'],
  .ant-table-row[data-row-key='total'] {
    font-size: 16px;
    font-weight: 400;
    background-color: #e6f7ff !important; /* Колір фону */
    color: #1890ff; /* Колір тексту */
    border-left: 10px;
  }
  .ant-btn-icon .anticon.anticon-delete > svg {
    transition: all 0.05s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .ant-btn-icon .anticon.anticon-delete > svg:hover {
    fill: red;
  }
`;
export const StyledCellNegative = styled.span`
  color: var(--main-red);
`;
export const StyledCell = styled.span`
  color: inherit;
`;
