import { useDispatch, useSelector } from 'react-redux';
import { smsOperetion } from 'redux/sms/smsSelector';
import { useState } from 'react';
import { PaymentLessonBtn } from './LessonPayment.styled';
import { Drawer } from 'antd';
import PaymentForm from './PaymentForm';
import RangePickerForm from 'ui/RangePickerForm/RangePickerForm';
import { deletePayment } from 'redux/Lesson/lessonOperetion';
import ButtonLoader from 'ui/ButtonLoader/ButtonLoader';
import PaymentsLessonList from './PaymentsLessonList/PaymentsLessonList';

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
          <ButtonLoader height="24" width="24" />
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
          <PaymentsLessonList
            setEditingPayment={setEditingPayment}
            editingPayment={editingPayment}
            currentPayment={currentPayment}
            handleDeletePayment={handleDeletePayment}
            dateFromExpense={dateFromExpense}
          />
        ) : null}
        <PaymentForm
          isZvitForm={false}
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
