import React from 'react';
import { Button, Form, InputNumber, Radio, Select } from 'antd';
import { useDispatch } from 'react-redux';
import { updateLesson } from 'redux/Lesson/lessonOperetion';

function PaymentForm({
  initialPaymentValues,
  id,
  price,
  setIsPaymentLesson,
  onCloseDrawer,
}) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onPaymentFormChange = value => {
    if (value === 'cash' || value === 'noPayment') {
      // Очистити поле "bank" і зробити його неактивним
      form.setFieldsValue({ bank: undefined });
    }
  };
  return (
    <Form
      form={form}
      initialValues={initialPaymentValues}
      onFinish={async values => {
        if (values.paymentForm === 'cash') {
          delete values.bank;
        }
        if (values.paymentForm === 'noPayment') {
          delete values.bank;
          delete values.sum;
        }

        onCloseDrawer();
        const combinedData = { id, values };

        await dispatch(updateLesson(combinedData)).then(() => {
          values.paymentForm === 'noPayment'
            ? setIsPaymentLesson(false)
            : setIsPaymentLesson(true);
        });
      }}
    >
      <Form.Item
        label="Форма оплати"
        name="paymentForm"
        onChange={e => onPaymentFormChange(e.target.value)}
      >
        <Radio.Group>
          <Radio value="cash">Готівка</Radio>
          <Radio value="cashless">Безготівкова</Radio>
          <Radio value="noPayment">Не сплачено</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Виберіть банк" name="bank" style={{ width: 250 }}>
        <Select>
          <Select.Option value="PrivatBank">ПриватБанк</Select.Option>
          <Select.Option value="MonoBank">Монобанк</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Сума" name="sum">
        <InputNumber disabled />
      </Form.Item>
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <Button
          style={{ width: '100%' }}
          type="primary"
          onClick={onCloseDrawer}
        >
          Відмінити
        </Button>
        <Button style={{ width: '100%' }} type="primary" htmlType="submit">
          Зберегти зміни
        </Button>
      </div>
    </Form>
  );
}

export default PaymentForm;
