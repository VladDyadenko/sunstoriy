import { useDispatch, useSelector } from 'react-redux';
import { smsOperetion } from 'redux/sms/smsSelector';
import { useState } from 'react';
import { CirclesWithBar } from 'react-loader-spinner';
import {
  DateInfoTitle,
  PaymentContainer,
  PaymentLessonBtn,
  PaymentTitle,
  PaymentTitleContainer,
  PaymentTitleOther,
} from './LessonPayment.styled';
import { Button, Drawer, List, Popconfirm } from 'antd';
import PaymentForm from './PaymentForm';
import RangePickerForm from 'ui/RangePickerForm/RangePickerForm';
import { deletePayment } from 'redux/Lesson/lessonOperetion';

const LessonPayment = ({
  paymentForm,
  dateLesson,
  bank,
  isHappend,
  closePopover,
  amountPaid,
  id,
  price,
  currentPayment,
  setCurrentPayment,
  visiblePaymentList,
  teacher,
  timeLesson,
  office,
}) => {
  const dispatch = useDispatch();

  const operetion = useSelector(smsOperetion);

  const [open, setOpen] = useState(false);
  const [dateFromExpense, setDateFromExpense] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [editingPayment, setEditingPayment] = useState(null);
  const salaryData = {
    isHappend,
    teacher,
    dateLesson,
    timeLesson,
    office,
  };

  const initialPaymentValues = {
    date: dateLesson,
    amount: 0,
    paymentForm: paymentForm ? paymentForm : 'noPayment',
    bank: bank ? bank : '',
    isHappend: isHappend === 'Відпрацьоване',
  };

  const showDrawer = () => {
    setOpen(true);
    closePopover();
  };

  const onCloseDrawer = () => {
    setOpen(false);
  };

  const handleDeletePayment = async paymentId => {
    const combinedData = { lessonId: id, paymentId };
    await dispatch(deletePayment(combinedData)).then(({ payload }) => {
      setCurrentPayment(payload.sum);
      setEditingPayment(null);
      onCloseDrawer();
    });
  };
  return (
    <>
      <PaymentLessonBtn type="button" onClick={showDrawer}>
        {operetion === id ? (
          <CirclesWithBar
            height="24"
            width="24"
            color="#ffffff"
            wrapperStyle={{}}
            visible={true}
            ariaLabel="circles-with-bar-loading"
          />
        ) : visiblePaymentList ? (
          `Оплачено: ${amountPaid} грн`
        ) : (
          'Очікує оплату'
        )}
      </PaymentLessonBtn>

      <Drawer
        title="Інформація по оплаті"
        placement="right"
        width={500}
        onClose={onCloseDrawer}
        open={open}
      >
        <RangePickerForm setDateFromExpense={setDateFromExpense} />
        {visiblePaymentList ? (
          <PaymentContainer
            header={
              <PaymentTitleContainer>
                <PaymentTitle>Список платежів:</PaymentTitle>
                <Button type="dashed" onClick={() => setEditingPayment(null)}>
                  Вийти з редагування
                </Button>
              </PaymentTitleContainer>
            }
            dataSource={currentPayment}
            renderItem={payment => {
              const descrFormTransform =
                payment?.paymentForm === 'cash' ? 'Готівка' : 'Безготівкова';
              const descrBankTransform =
                payment?.paymentForm === 'cashless'
                  ? payment?.bank === 'MonoBank'
                    ? 'Монобанк'
                    : 'Приватбанк'
                  : '';
              return (
                <List.Item
                  style={{
                    backgroundColor:
                      editingPayment?._id === payment._id
                        ? '#f0f0f0'
                        : 'transparent',
                  }}
                  actions={[
                    <Button
                      type="primary"
                      size="small"
                      ghost
                      onClick={() => setEditingPayment(payment)}
                    >
                      Редагувати
                    </Button>,
                    <Popconfirm
                      title="Ви впевнені, що хочете видалити цей платіж?"
                      onConfirm={() => handleDeletePayment(payment._id)}
                      okText="Так"
                      cancelText="Ні"
                    >
                      <Button type="primary" size="small" danger ghost>
                        Видалити
                      </Button>
                    </Popconfirm>,
                  ]}
                >
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <List.Item.Meta
                      title="Сума"
                      description={`${payment.amount} грн`}
                    />
                    <List.Item.Meta
                      title="Форма"
                      description={`
                      ${descrFormTransform ? `${descrFormTransform}` : ''}
                      `}
                    />
                    {descrBankTransform === '' ? null : (
                      <List.Item.Meta
                        title="Банк"
                        description={`${
                          descrBankTransform ? `${descrBankTransform}` : ''
                        }`}
                      />
                    )}

                    <List.Item.Meta
                      title="Дата платежу"
                      description={`${
                        payment.date ? `${payment.date.split('T')[0]}` : ''
                      }`}
                    />
                  </div>
                </List.Item>
              );
            }}
          />
        ) : null}
        <PaymentTitle>Внесіть дані платежу:</PaymentTitle>
        <PaymentTitleOther>
          Дата оплати: <DateInfoTitle>{dateFromExpense}</DateInfoTitle>
        </PaymentTitleOther>
        <PaymentForm
          salaryData={salaryData}
          price={price}
          initialPaymentValues={initialPaymentValues}
          onCloseDrawer={onCloseDrawer}
          id={id}
          dateFromExpense={dateFromExpense}
          setCurrentPayment={setCurrentPayment}
          setEditingPayment={setEditingPayment}
          editingPayment={editingPayment}
        />
      </Drawer>
    </>
  );
};
export default LessonPayment;
