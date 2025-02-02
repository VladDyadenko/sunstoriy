import { useSelector } from 'react-redux';
import { smsOperetion } from 'redux/sms/smsSelector';
import { useState } from 'react';
import { CirclesWithBar } from 'react-loader-spinner';
import { PaymentLessonBtn } from './LessonPayment.styled';
import { Drawer } from 'antd';
import PaymentForm from './PaymentForm';

const LessonPayment = ({ lesson, closePopover, isLessonPaymented }) => {
  const { _id, bank, paymentForm, price, isHappend } = lesson;

  const initialPaymentValues = {
    sum: price,
    paymentForm: paymentForm ? paymentForm : 'noPayment',
    bank: bank ? bank : 'PrivatBank',
    isHappend: isHappend === 'Відпрацьоване',
  };
  const operetion = useSelector(smsOperetion);

  const [open, setOpen] = useState(false);
  const [amountPaid, setAmountPaid] = useState(price);

  const showDrawer = () => {
    setOpen(true);
    closePopover();
  };

  const onCloseDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <PaymentLessonBtn type="button" onClick={showDrawer}>
        {operetion === _id ? (
          <CirclesWithBar
            height="24"
            width="24"
            color="#ffffff"
            wrapperStyle={{}}
            visible={true}
            ariaLabel="circles-with-bar-loading"
          />
        ) : isLessonPaymented &&
          (isLessonPaymented === 'cash' || isLessonPaymented === 'cashless') ? (
          `Оплачено: ${amountPaid} грн`
        ) : (
          'Очікує оплату'
        )}
      </PaymentLessonBtn>

      <Drawer
        title="Інформація по оплаті"
        placement="right"
        width={340}
        onClose={onCloseDrawer}
        open={open}
      >
        <PaymentForm
          price={price}
          initialPaymentValues={initialPaymentValues}
          onCloseDrawer={onCloseDrawer}
          id={_id}
          setAmountPaid={setAmountPaid}
        />
      </Drawer>
    </>
  );
};
export default LessonPayment;
