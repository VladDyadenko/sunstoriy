import React from 'react';
import {
  StyledCell,
  StyledCellNegative,
  StyledTable,
} from './PeriodReport.styled';

const ReportCurrentMonth = ({ indicatorsCurrentMonth, loading }) => {
  const {
    profit = {},
    expense = {},
    income = {},
    workedIncom = 0,
    previousPeriodProfit = {},
  } = indicatorsCurrentMonth;

  const columns = [
    {
      key: '1',
      title: 'Категорія',
      dataIndex: 'category',
      render: value =>
        value < 0 ? (
          <StyledCellNegative>{value}</StyledCellNegative>
        ) : (
          <StyledCell>{value}</StyledCell>
        ),
    },
    {
      key: '2',
      title: 'На початок періоду',
      dataIndex: 'profitPrev',
      render: value =>
        value < 0 ? (
          <StyledCellNegative>{value}</StyledCellNegative>
        ) : (
          <StyledCell>{value}</StyledCell>
        ),
    },
    {
      key: '3',
      title: 'Оплачені кошти',
      dataIndex: 'currentIncome',
      render: value =>
        value < 0 ? (
          <StyledCellNegative>{value}</StyledCellNegative>
        ) : (
          <StyledCell>{value}</StyledCell>
        ),
    },
    {
      key: '4',
      title: 'Поточні витрати',
      dataIndex: 'currentExpense',
      render: value =>
        value < 0 ? (
          <StyledCellNegative>{value}</StyledCellNegative>
        ) : (
          <StyledCell>{value}</StyledCell>
        ),
    },
    {
      key: '5',
      title: 'Відпрацьовано',
      dataIndex: 'workedLessons',
      onCell: (_, index) => {
        if (index === 0) {
          return { rowSpan: dataSource.length };
        }
        return { rowSpan: 0 };
      },
    },

    {
      key: '6',
      title: 'На кінець періоду ',
      dataIndex: 'profit',
      render: value =>
        value < 0 ? (
          <StyledCellNegative>{value}</StyledCellNegative>
        ) : (
          <StyledCell>{value}</StyledCell>
        ),
    },
  ];

  const dataSource = [
    {
      key: 'cash',
      category: 'Готівка',
      profitPrev: previousPeriodProfit?.cash || 0,
      profit: profit?.kasa || 0,
      currentExpense: expense?.cash || 0,
      currentIncome: income?.cash || 0,
      workedLessons: workedIncom,
    },
    {
      key: 'privat',
      category: 'ПриватБанк',
      profitPrev: previousPeriodProfit?.privatBank || 0,
      profit: profit?.privatBank || 0,
      currentExpense: expense?.privatBank || 0,
      currentIncome: income?.privatBank || 0,
      workedLessons: '',
    },
    {
      key: 'mono',
      category: 'МоноБанк',
      profitPrev: previousPeriodProfit?.monoBank || 0,
      profit: profit?.monoBank || 0,
      currentExpense: expense?.monoBank || 0,
      currentIncome: income?.monoBank || 0,
      workedLessons: '',
    },
    {
      key: 'balance',
      category: 'Ітого:',
      profitPrev: previousPeriodProfit?.amount || 0,
      profit: profit?.amount || 0,
      currentExpense: expense?.amount || 0,
      currentIncome: income?.amount || 0,
      workedLessons: '',
    },
  ];

  return (
    <div>
      <StyledTable
        columns={columns}
        dataSource={dataSource}
        size="small"
        pagination={false}
        loading={loading}
      />
    </div>
  );
};

export default ReportCurrentMonth;
