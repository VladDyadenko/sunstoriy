import { StyledTable } from 'components/FinancialOffice/PeriodReport/PeriodReport.styled';
import React, { useEffect, useState } from 'react';
import { Button, Popconfirm, Space } from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import {
  deleteExpenseById,
  getExpenseById,
} from 'redux/expense/expenseOperetion';

const TableExpensesZvit = ({ expensZvitLoading, expenses }) => {
  const dispatch = useDispatch();

  const [expensesData, setExpensesData] = useState(expenses);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const filteredData = applyFilters(expenses, filters);
    setExpensesData(filteredData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expenses, filters]);

  const uniqueDates = [
    ...new Set(
      expenses.map(expense =>
        new Date(expense.date).toLocaleDateString('uk-UA')
      )
    ),
  ];

  const applyFilters = (data, filters) => {
    let filteredData = data;

    const dateFilterKey = columns.find(col => col.dataIndex === 'date')?.key;
    const categoryFilterKey = columns.find(
      col => col.dataIndex === 'category'
    )?.key;

    if (filters[dateFilterKey] && filters[dateFilterKey].length) {
      filteredData = filteredData.filter(expense =>
        filters[dateFilterKey].includes(
          new Date(expense.date).toLocaleDateString('uk-UA')
        )
      );
    }

    if (filters[categoryFilterKey] && filters[categoryFilterKey].length) {
      filteredData = filteredData.filter(expense =>
        filters[categoryFilterKey].includes(expense.category)
      );
    }

    return filteredData;
  };

  const handleTableChange = (_, filters) => {
    setFilters(filters);
  };

  const columns = [
    {
      key: '1',
      title: 'Дата',
      dataIndex: 'date',
      filters: uniqueDates.map(date => ({ text: date, value: date })),
      onFilter: (value, record) =>
        record.key === 'total' || record.date === value,
    },
    {
      key: '2',
      title: 'Категорія',
      dataIndex: 'category',
      filters: [...new Set(expenses.map(expense => expense.category))].map(
        category => ({ text: category, value: category })
      ),
      onFilter: (value, record) =>
        record.key === 'total' || record.category === value,
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
    {
      key: '7',
      title: 'Дії',
      dataIndex: 'actions',
      render: (_, record) =>
        record.key !== 'total' && (
          <Space>
            <Button
              type="primary"
              icon={<EditOutlined />}
              onClick={async () =>
                await dispatch(getExpenseById(record.key)).then()
              }
            />
            <Popconfirm
              title="Видалення"
              description="Ви намагаєтесь видалити цю строчку. Продовжити?"
              icon={
                <QuestionCircleOutlined
                  style={{
                    color: 'red',
                  }}
                />
              }
              onConfirm={() => {
                dispatch(deleteExpenseById(record.key));
              }}
            >
              <Button type="danger" icon={<DeleteOutlined />} />
            </Popconfirm>
          </Space>
        ),
    },
  ];

  const dataSource = expensesData.map(expense => ({
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

  const totalCash = expensesData.reduce(
    (sum, item) => sum + (item.paymentForm === 'cash' ? item.amount : 0),
    0
  );
  const totalPrivat = expensesData.reduce(
    (sum, item) =>
      sum +
      (item.paymentForm === 'cashless' && item.bank === 'PrivatBank'
        ? item.amount
        : 0),
    0
  );
  const totalMono = expensesData.reduce(
    (sum, item) =>
      sum +
      (item.paymentForm === 'cashless' && item.bank === 'MonoBank'
        ? item.amount
        : 0),
    0
  );

  dataSource.push({
    key: 'total',
    date: 'Ітогом за період:',
    category: '',
    amount_cash: totalCash,
    amount_privat: totalPrivat,
    amount_mono: totalMono,
    description: '',
  });

  return (
    <StyledTable
      columns={columns}
      dataSource={dataSource}
      size="small"
      pagination={false}
      loading={expensZvitLoading}
      onChange={handleTableChange}
    />
  );
};

export default TableExpensesZvit;
