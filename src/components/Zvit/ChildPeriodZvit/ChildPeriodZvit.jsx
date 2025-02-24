import { Button, Drawer } from 'antd';
import { nanoid } from 'nanoid';
import { StyledTable } from 'components/FinancialOffice/PeriodReport/PeriodReport.styled';

import { DescrBalance, TitleChildZvit } from './ChildPeriodZvit.styled';

const ChildPeriodZvit = ({ childSelectedData, openDrawer, setOpenDrawer }) => {
  // const handleCloseDrawer = () => {
  //   setOpenDrawer(false);
  // };
  const columns = [
    {
      key: '1',
      title: 'Дата',
      dataIndex: 'date',
    },
    {
      key: '2',
      title: 'Кабінет',
      dataIndex: 'office',
    },
    {
      key: '3',
      title: 'Відпрацьовано',
      dataIndex: 'price',
    },
    {
      key: '4',
      title: 'Сплачено',
      dataIndex: 'sum',
    },
    {
      key: '5',
      title: 'Баланс',
      dataIndex: 'balance',
    },
  ];
  const dataSource = childSelectedData?.details.map(lesson => {
    const { balance, dateLesson, office, price, sum } = lesson;
    return {
      key: nanoid(),
      date: new Date(dateLesson).toLocaleDateString('uk-UA'),
      office,
      price,
      sum,
      balance,
    };
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
        <TitleChildZvit>
          {childSelectedData?.childName}
          {childSelectedData?.childSurname
            ? ` ${childSelectedData?.childSurname}`
            : ''}
          <DescrBalance>
            Поточний баланс: {childSelectedData?.totalBalance}
          </DescrBalance>
        </TitleChildZvit>
        <StyledTable
          columns={columns}
          dataSource={dataSource}
          size="small"
          pagination={false}
          //  loading={childrensLoading}
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
      </Drawer>
    </>
  );
};

export default ChildPeriodZvit;
