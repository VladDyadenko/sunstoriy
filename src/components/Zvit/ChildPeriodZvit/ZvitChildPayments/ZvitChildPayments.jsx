import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePayment } from 'redux/Lesson/lessonOperetion';
import PaymentForm from 'ui/lessonPayment/PaymentForm';
import PaymentsLessonList from 'ui/lessonPayment/PaymentsLessonList/PaymentsLessonList';
import RangePickerForm from 'ui/RangePickerForm/RangePickerForm';

const ZvitChildPayments = ({ selectedLessonData, setOpenPaymentDrawer }) => {
  const dispatch = useDispatch();

  const { payments, id, salaryData, price, dateLesson } = selectedLessonData;
  const initialPaymentValues = {
    date: dateLesson,
    amount: 0,
    paymentForm: 'noPayment',
    bank: '',
    isHappend: 'Відпрацьоване',
  };

  const [currentPayment, setCurrentPayment] = useState(
    payments ? payments : []
  );
  useEffect(() => {
    if (payments) {
      setCurrentPayment(payments);
    }
  }, [payments]);
  const [editingPayment, setEditingPayment] = useState(null);

  const [dateFromExpense, setDateFromExpense] = useState(
    new Date().toISOString().split('T')[0]
  );
  const handleDeletePayment = async paymentId => {
    const combinedData = { lessonId: id, paymentId };
    await dispatch(deletePayment(combinedData)).then(({ payload }) => {
      setCurrentPayment(payload.sum);
      setEditingPayment(null);
      setOpenPaymentDrawer(false);
    });
  };
  const onCloseDrawer = () => {
    setOpenPaymentDrawer(false);
  };
  return (
    <>
      <RangePickerForm setDateFromExpense={setDateFromExpense} />
      {payments && payments.length > 0 ? (
        <PaymentsLessonList
          currentPayment={currentPayment}
          dateFromExpense={dateFromExpense}
          handleDeletePayment={handleDeletePayment}
          setEditingPayment={setEditingPayment}
          editingPayment={editingPayment}
        />
      ) : null}

      <PaymentForm
        isZvitForm={true}
        initialPaymentValues={initialPaymentValues}
        id={id}
        onCloseDrawer={onCloseDrawer}
        price={price}
        dateFromExpense={dateFromExpense}
        setEditingPayment={setEditingPayment}
        editingPayment={editingPayment}
        setCurrentPayment={setCurrentPayment}
        salaryData={salaryData}
      />
    </>
  );
};

export default ZvitChildPayments;
