import {
  DeleteOutlined,
  EditOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { Button, Popconfirm, Space } from 'antd';
import {
  StyledCell,
  StyledCellNegative,
  StyledTable,
} from 'components/FinancialOffice/PeriodReport/PeriodReport.styled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteSalaryById, getSalaryById } from 'redux/salary/salaryOperetion';

const SalaryZvitTable = ({ salaryLoading, salaris }) => {
  const dispatch = useDispatch();

  const columns = [
    {
      key: '1',
      title: 'Дата',
      dataIndex: 'date',
      // filters: uniqueDates.map(date => ({ text: date, value: date })),
      // onFilter: (value, record) =>
      //   record.key === 'total' || record.date === value,
    },
    {
      key: '2',
      title: 'Нараховано',
      dataIndex: 'salaryStatus',
      // filters: [...new Set(expenses.map(expense => expense.category))].map(
      //   category => ({ text: category, value: category })
      // ),
      // onFilter: (value, record) =>
      //   record.key === 'total' || record.category === value,
    },
    {
      key: '3',
      title: 'Фахівець',
      dataIndex: 'specialist',
    },
    {
      key: 'group',
      title: 'Виплачено',
      children: [
        {
          key: '4',
          title: 'Готівка',
          dataIndex: 'amount_cash',
        },
        {
          key: '5',
          title: 'Приватбанк',
          dataIndex: 'amount_privat',
        },
        {
          key: '6',
          title: 'Монобанк',
          dataIndex: 'amount_mono',
        },
      ],
    },
    {
      key: '7',
      title: 'Заборгованість',
      dataIndex: 'amount_debt',
      render: (value, record) => {
        if (value < 0 && record.key !== 'total') {
          return <StyledCellNegative>{value} (переплата) </StyledCellNegative>;
        }

        if (record.key === 'total') {
          return <StyledCell>{value}</StyledCell>;
        } else return <StyledCellNegative>{value}</StyledCellNegative>;
      },
    },
    {
      key: '8',
      title: 'Додаткова інформація',
      dataIndex: 'description',
    },

    {
      key: '9',
      title: 'Дії',
      dataIndex: 'actions',
      render: (_, record) =>
        record.key !== 'total' && (
          <Space>
            <Popconfirm
              title="Виплата зарплати"
              description="Нарахувати виплату?"
              icon={
                <QuestionCircleOutlined
                  style={{
                    color: 'red',
                  }}
                />
              }
              onConfirm={async () => await dispatch(getSalaryById(record.key))}
            >
              <Button type="primary" icon={<EditOutlined />} />
            </Popconfirm>

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
                dispatch(deleteSalaryById(record.key));
              }}
            >
              <Button type="danger" icon={<DeleteOutlined />} />
            </Popconfirm>
          </Space>
        ),
    },
  ];
  const dataSource = salaris.map(salary => {
    const {
      _id,
      date,
      amount_accrued,
      amount_cash,
      amount_cashless,
      amount_debt,
      name,
      surname,
      bank,
      comment,
    } = salary;

    return {
      key: _id,
      date: new Date(date).toLocaleDateString('uk-UA'),
      salaryStatus: amount_accrued ? amount_accrued : '',
      specialist: `${name} ${surname}`,
      amount_cash: amount_cash ? amount_cash : '',
      amount_privat:
        amount_cashless && bank === 'PrivatBank' ? amount_cashless : '',
      amount_mono:
        amount_cashless && bank === 'MonoBank' ? amount_cashless : '',
      amount_debt: amount_debt ? amount_debt : '',
      description: comment,
    };
  });

  const total = salaris.reduce(
    (sum, item) => sum + (item.amount_accrued ? item.amount_accrued : 0),
    0
  );
  const totalDebt = salaris.reduce(
    (sum, item) => sum + (item.amount_debt ? item.amount_debt : 0),
    0
  );
  const totalCash = salaris.reduce(
    (sum, item) => sum + (item.amount_cash ? item.amount_cash : 0),
    0
  );
  const totalPrivat = salaris.reduce(
    (sum, item) =>
      sum +
      (item.amount_cashless && item.bank === 'PrivatBank'
        ? item.amount_cashless
        : 0),
    0
  );
  const totalMono = salaris.reduce(
    (sum, item) =>
      sum +
      (item.amount_cashless && item.bank === 'MonoBank'
        ? item.amount_cashless
        : 0),
    0
  );

  dataSource.push({
    key: 'total',
    date: 'Ітогом за період:',
    salaryStatus: total,
    amount_cash: totalCash,
    amount_privat: totalPrivat,
    amount_mono: totalMono,
    amount_debt: totalDebt,
    description: '',
  });
  return (
    <StyledTable
      columns={columns}
      dataSource={dataSource}
      size="small"
      pagination={false}
      loading={salaryLoading}
      // onChange={handleTableChange}
    />
  );
};

export default SalaryZvitTable;
