import { Button } from 'antd';
import {
  StyledCell,
  StyledCellNegative,
  StyledCellPositive,
  StyledTable,
} from 'components/FinancialOffice/PeriodReport/PeriodReport.styled';
import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import { getZvitChildByIdAndPeriod } from 'redux/zvit/zvitOperetion';

const ChildrensPeriodZvit = ({
  childrens,
  childrensLoading,
  selectedPeriod,
  setOpenDrawer,
  childrenLoading,
}) => {
  const dispatch = useDispatch();

  const handleChildClick = async id => {
    const choesData = { id, selectedPeriod };
    await dispatch(getZvitChildByIdAndPeriod(choesData)).then(() =>
      setOpenDrawer(true)
    );
  };
  const columns = [
    {
      key: '1',
      title: "Ім'я дитини",
      dataIndex: 'childName',
      render: (text, record) => {
        return childrenLoading === record.key ? (
          <ThreeDots
            visible={true}
            height="32"
            width="148"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            wrapperClass=""
          />
        ) : (
          <Button
            type="link"
            htmlType="button"
            onClick={() => handleChildClick(record.key)}
          >
            {text}
          </Button>
        );
      },
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
    childName: `${children.childName}${
      children.childSurname ? ` ${children.childSurname}` : ''
    }`,
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
