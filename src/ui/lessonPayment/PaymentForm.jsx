import React, { useState } from 'react';
import { Button, Checkbox, Form, InputNumber, Radio, Select } from 'antd';
import { useDispatch } from 'react-redux';
import { updateLesson } from 'redux/Lesson/lessonOperetion';

function PaymentForm({
  initialPaymentValues,
  id,
  onCloseDrawer,
  setAmountPaid,
}) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const [paymentMethod, setPaymentMethod] = useState(null);

  return (
    <Form
      form={form}
      initialValues={initialPaymentValues}
      onFinish={async values => {
        if (values.paymentForm === 'cash') {
          values.bank = '';
        }
        if (values.paymentForm === 'noPayment') {
          values.bank = '';
          values.sum = 0;
        }
        values.isHappend = values.isHappend ? 'Відпрацьоване' : 'Заплановане';

        setAmountPaid(values.sum);
        onCloseDrawer();

        const combinedData = { id, values };

        await dispatch(updateLesson(combinedData)).then(() => {});
      }}
    >
      <Form.Item
        label="Заняття відпрацьовано"
        name="isHappend"
        valuePropName="checked"
      >
        <Checkbox />
      </Form.Item>
      <Form.Item
        label="Форма оплати"
        name="paymentForm"
        onChange={e => {
          if (e.target.value === 'cash' || e.target.value === 'noPayment') {
            form.setFieldsValue({ bank: '' });
          }
        }}
      >
        <Radio.Group
          onChange={e => {
            setPaymentMethod(e.target.value);
            if (e.target.value !== 'cashless') {
              form.setFieldsValue({ bank: undefined });
              form.resetFields(['bank', 'sum']);
            }
          }}
        >
          <Radio value="cash">Готівка</Radio>
          <Radio value="cashless">Безготівкова</Radio>
          <Radio value="noPayment">Не сплачено</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        rules={
          paymentMethod === 'cashless' && [
            { required: true, message: 'Оберіть банк' },
          ]
        }
        label="Виберіть банк"
        name="bank"
        style={{ width: 250 }}
      >
        <Select>
          <Select.Option value="PrivatBank">ПриватБанк</Select.Option>
          <Select.Option value="MonoBank">Монобанк</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        rules={
          (paymentMethod === 'cashless' || paymentMethod === 'cash') && [
            { required: true, message: 'Внесіть суму оплати' },
          ]
        }
        label="Сума"
        name="sum"
      >
        <InputNumber />
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
          htmlType="button"
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
