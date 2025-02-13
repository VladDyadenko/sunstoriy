import { StyledTable } from 'components/FinancialOffice/PeriodReport/PeriodReport.styled';
import React from 'react';
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

const TableExpensesZvit = ({ expensZvitLoading, expenses, finalValues }) => {
  const dispatch = useDispatch();

  const uniqueDates = [
    ...new Set(
      expenses.map(expense =>
        new Date(expense.date).toLocaleDateString('uk-UA')
      )
    ),
  ];

  const columns = [
    {
      key: '1',
      title: 'Дата',
      dataIndex: 'date',
      filters: uniqueDates.map(date => ({ text: date, value: date })),
      onFilter: (value, record) => record.date === value,
    },
    {
      key: '2',
      title: 'Категорія',
      dataIndex: 'category',
      filters: [...new Set(expenses.map(expense => expense.category))].map(
        category => ({ text: category, value: category })
      ),
      onFilter: (value, record) => record.category === value,
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
        record.key !== 'total' && ( // Вимикаємо кнопки для підсумкового рядка
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

  const dataSource = expenses.map(expense => ({
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

  if (finalValues) {
    dataSource.push({
      key: 'total',
      date: 'Ітогом за період:',
      category: '',
      amount_cash: finalValues.cash,
      amount_privat: finalValues.privatBank,
      amount_mono: finalValues.monoBank,
      description: '',
    });
  }

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
