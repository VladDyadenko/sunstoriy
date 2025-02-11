import { StyledTable } from 'components/FinancialOffice/PeriodReport/PeriodReport.styled';
import React from 'react';

const TableExpensesZvit = ({ expensZvitLoading, expenses }) => {
  const columns = [
    {
      key: '1',
      title: 'Дата',
      dataIndex: 'date',
    },
    {
      key: '2',
      title: 'Категорія',
      dataIndex: 'category',
    },
    {
      key: '3',
      title: 'Готівка',
      dataIndex: 'amount_cash',
    },
    {
      key: '4',
      title: 'Приватбанк',
      dataIndex: 'amount_privat',
    },
    {
      key: '5',
      title: 'Монобанк',
      dataIndex: 'amount_mono',
    },
    {
      key: '6',
      title: 'Додаткова інформація',
      dataIndex: 'description',
    },
  ];

  const dataSource = expenses.map((expense, index) => ({
    key: expense._id,
    date: new Date(expense.date).toLocaleDateString('uk-UA'),
    category: expense.category,
    amount_cash: expense.paymentForm === 'cash' ? expense.amount : '',
    amount_privat:
      expense.paymentForm === 'cashless' && expense.bank === 'PrivatBank'
        ? expense.amount
        : '',
    amount_mono:
      expense.paymentForm === 'cashless' && expense.bank === 'MonoBank'
        ? expense.amount
        : '',
    description: expense.description,
  }));

  return (
    <StyledTable
      columns={columns}
      dataSource={dataSource}
      size="small"
      pagination={false}
      loading={expensZvitLoading}
    />
  );
};

export default TableExpensesZvit;
