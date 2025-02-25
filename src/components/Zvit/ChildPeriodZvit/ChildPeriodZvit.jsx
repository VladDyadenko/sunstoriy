import { Button, Drawer, Popconfirm } from 'antd';
import {
  StyledCell,
  StyledCellNegative,
  StyledCellPositive,
  StyledTable,
} from 'components/FinancialOffice/PeriodReport/PeriodReport.styled';

import { DescrBalance, TitleChildZvit } from './ChildPeriodZvit.styled';
import { ZvitContainer } from 'components/FinancialOffice/FinancialOfficeLayout/FinancialLayout.styled';
import { EditOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import PaymentChuldLesson from './PaymentChuldLesson/PaymentChuldLesson';
import { useEffect, useState } from 'react';

const ChildPeriodZvit = ({
  selectedPeriod,
  childSelectedData,
  openDrawer,
  setOpenDrawer,
  childrenLoading,
}) => {
  const [openPaymentDrawer, setOpenPaymentDrawer] = useState(false);
  const [selectedLessonData, setSelectedLessonData] = useState('');
  const [selectedChildData, setSelectedChildData] = useState(null);

  const totalPrice = selectedChildData?.details.reduce(
    (acm, item) => acm + (item.price ? item.price : 0),
    0
  );
  const totalSum = selectedChildData?.details.reduce(
    (acm, item) => acm + (item.sum ? item.sum : 0),
    0
  );
  const totalBalance =
    selectedChildData?.totalPreviousBalance + (totalSum - totalPrice);
  const titleTotalBalance = balance => {
    if (balance > 0) {
      return <StyledCellPositive>{balance} грн</StyledCellPositive>;
    }
    if (balance === 0) {
      return <StyledCell>{balance}</StyledCell>;
    } else {
      return <StyledCellNegative>{balance} грн</StyledCellNegative>;
    }
  };
  useEffect(() => {
    if (childSelectedData) {
      setSelectedChildData(childSelectedData);
    }
  }, [childSelectedData]);

  const handlePaymentLesson = (id, price, sum) => {
    const lessonFinanseData = { id, price, sum };
    setOpenPaymentDrawer(true);
    setSelectedLessonData(lessonFinanseData);
  };
  const columns = [
    {
      key: '1',
      title: 'Дата',
      dataIndex: 'date',
    },
    {
      key: '2',
      title: 'Вхідний баланс',
      dataIndex: 'previousBalance',
    },
    {
      key: '3',
      title: 'Кабінет',
      dataIndex: 'office',
    },
    {
      key: '4',
      title: 'Відпрацьовано',
      dataIndex: 'price',
    },
    {
      key: '5',
      title: 'Сплачено',
      dataIndex: 'sum',
    },
    {
      key: '6',
      title: 'Кінцевий баланс',
      dataIndex: 'balance',
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
      key: '6',
      title: 'Дії',
      dataIndex: 'actions',
      render: (_, record) => {
        if (
          record.key !== 'total' &&
          record.price !== 0 &&
          (record.sum === 0 || record.sum < record.price)
        ) {
          return (
            <Popconfirm
              title="Оплата заняття"
              description="Внести оплату?"
              icon={
                <QuestionCircleOutlined
                  style={{
                    color: 'red',
                  }}
                />
              }
              onConfirm={() =>
                handlePaymentLesson(record.key, record.price, record.sum)
              }
            >
              <Button type="primary" icon={<EditOutlined />} />
            </Popconfirm>
          );
        }
        return null;
      },
    },
  ];

  const dataSource = selectedChildData?.details.map(lesson => {
    const { balance, dateLesson, office, price, sum, lessonId } = lesson;
    return {
      key: lessonId,
      date: new Date(dateLesson).toLocaleDateString('uk-UA'),
      previousBalance: '',
      office,
      price,
      sum,
      balance,
    };
  });
  dataSource?.push({
    key: 'total',
    date: 'Ітог:',
    previousBalance: selectedChildData.totalPreviousBalance
      ? selectedChildData.totalPreviousBalance
      : 0,
    office: '',
    price: totalPrice,
    sum: totalSum,
    balance: totalBalance,
  });

  return (
    <>
      <Drawer
        title="Історія по дитині за вибраний період"
        placement="top"
        open={openDrawer}
        styles={{
          content: {
            height: '60vh',
            overflowY: 'auto',
          },
        }}
      >
        <ZvitContainer>
          <TitleChildZvit>
            {selectedChildData?.childName}
            {selectedChildData?.childSurname
              ? ` ${selectedChildData?.childSurname}`
              : ''}
            <DescrBalance>
              Загальний баланс: {titleTotalBalance(totalBalance)}
            </DescrBalance>
          </TitleChildZvit>
          <StyledTable
            columns={columns}
            dataSource={dataSource}
            size="small"
            pagination={false}
            loading={childrenLoading}
            // onChange={handleTableChange}
          />
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button
              style={{ width: 200, marginTop: 20 }}
              type="primary"
              htmlType="button"
              onClick={() => setOpenDrawer(false)}
            >
              Закрити
            </Button>
          </div>
        </ZvitContainer>
      </Drawer>
      <PaymentChuldLesson
        selectedChildData={selectedChildData}
        selectedPeriod={selectedPeriod}
        setOpenPaymentDrawer={setOpenPaymentDrawer}
        setSelectedLessonData={setSelectedLessonData}
        openPaymentDrawer={openPaymentDrawer}
        selectedLessonData={selectedLessonData}
      />
    </>
  );
};

export default ChildPeriodZvit;
