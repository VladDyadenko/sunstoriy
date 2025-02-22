import { Button } from 'antd';
import {
  StyledCell,
  StyledCellNegative,
  StyledCellPositive,
  StyledTable,
} from 'components/FinancialOffice/PeriodReport/PeriodReport.styled';
import React from 'react';

const ChildrensPeriodZvit = ({ childrens, childrensLoading }) => {
  const handleChildClick = data => {
    console.log(data);
  };
  const columns = [
    {
      key: '1',
      title: "Ім'я дитини",
      dataIndex: 'childName',
      render: (text, record) => (
        <Button
          type="link"
          htmlType="button"
          onClick={() => handleChildClick(record.key)}
        >
          {text}
        </Button>
      ),
    },

    {
      key: '4',
      title: 'Баланс на початок',
      dataIndex: ['start', 'balance'],
      render: (value, record) => {
        if (value < 0) {
          return <StyledCellNegative>{value}</StyledCellNegative>;
        } else if (value > 0) {
          return <StyledCellPositive>{value}</StyledCellPositive>;
        } else {
          return <StyledCell>{value}</StyledCell>;
        }
      },
    },
    {
      key: 'group2',
      title: 'За період',
      children: [
        {
          key: '5',
          title: 'Відпрацьовано',
          dataIndex: ['period', 'price'],
        },
        {
          key: '6',
          title: 'Оплачено',
          dataIndex: ['period', 'sum'],
        },
        {
          key: '7',
          title: 'Баланс',
          dataIndex: ['period', 'balance'],
        },
      ],
    },
    {
      key: '8',
      title: 'Кінцевий баланс',
      dataIndex: ['end', 'balance'],
      render: (value, record) => {
        if (value < 0) {
          return <StyledCellNegative>{value}</StyledCellNegative>;
        } else if (value > 0) {
          return <StyledCellPositive>{value}</StyledCellPositive>;
        } else {
          return <StyledCell>{value}</StyledCell>;
        }
      },
    },
  ];

  const dataSource = childrens?.map(children => ({
    key: children.child,
    childName: `${children.childName} ${children.childSurname}`,
    start: {
      balance: children.start.balance,
    },
    period: {
      price: children.period.price,
      sum: children.period.sum,
      balance: children.period.balance,
    },
    end: {
      balance: children.end.balance,
    },
  }));

  return (
    <StyledTable
      columns={columns}
      dataSource={dataSource}
      size="small"
      pagination={false}
      loading={childrensLoading}
      // onChange={handleTableChange}
    />
  );
};

export default ChildrensPeriodZvit;
