import { useSelector } from 'react-redux';
import { smsOperetion } from 'redux/sms/smsSelector';
import { useEffect, useState } from 'react';
import { CirclesWithBar } from 'react-loader-spinner';
import { PaymentLessonBtn } from './LessonPayment.styled';
import { Drawer } from 'antd';
import PaymentForm from './PaymentForm';

const LessonPayment = ({ lesson, closePopover }) => {
  const { _id, bank, paymentForm, price } = lesson;

  const initialPaymentValues = {
    sum: price,
    paymentForm: paymentForm ? paymentForm : 'cashless',
    bank: bank ? bank : 'PrivatBank',
  };
  const operetion = useSelector(smsOperetion);

  const [isPaymentLesson, setIsPaymentLesson] = useState(false);

  useEffect(() => {
    if (
      (paymentForm && paymentForm === 'cash') ||
      (paymentForm && paymentForm === 'cashless')
    ) {
      setIsPaymentLesson(true);
    }
  }, [paymentForm]);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
    closePopover();
  };

  const onCloseDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <PaymentLessonBtn
        disabled={isPaymentLesson}
        type="button"
        onClick={showDrawer}
      >
        {operetion === _id ? (
          <CirclesWithBar
            height="24"
            width="24"
            color="#ffffff"
            wrapperStyle={{}}
            visible={true}
            ariaLabel="circles-with-bar-loading"
          />
        ) : isPaymentLesson ? (
          `Оплачено: ${price} грн`
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
          setIsPaymentLesson={setIsPaymentLesson}
          onCloseDrawer={onCloseDrawer}
          id={_id}
        />
      </Drawer>
    </>
  );
};
export default LessonPayment;
