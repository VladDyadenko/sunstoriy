import { Alert, Button, Drawer, Form, InputNumber, Radio, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateLesson } from 'redux/Lesson/lessonOperetion';
import {
  getZvitChildByIdAndPeriod,
  getZvitChildrensPeriod,
} from 'redux/zvit/zvitOperetion';

const PaymentChuldLesson = ({
  selectedChildData,
  selectedPeriod,
  selectedLessonData,
  openPaymentDrawer,
  setOpenPaymentDrawer,
}) => {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const { id, price, sum } = selectedLessonData;
  const dutyToLesson = sum && sum !== 0 && sum < price ? price - sum : price;
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const sumForm = Form.useWatch('sum', form);
  const [advancePayment, setAdvancePayment] = useState(false);

  useEffect(() => {
    setAdvancePayment(sum + sumForm > price);
  }, [price, sumForm, sum]);

  return (
    <>
      <Drawer
        open={openPaymentDrawer}
        title="Внесення оплати за заняття"
        placement="right"
        width={340}
      >
        <p style={{ marginTop: 20, marginBottom: 20 }}>
          Заборгованість: {dutyToLesson}
        </p>
        <Form
          form={form}
          initialValues={{ sum: 0 }}
          onFinish={async values => {
            if (values.paymentForm === 'cash') {
              values.bank = '';
            }
            const combinedData = { id, values };
            try {
              await dispatch(updateLesson(combinedData)).then(async () => {
                const choesData = {
                  id: selectedChildData.child,
                  selectedPeriod,
                };
                await dispatch(getZvitChildByIdAndPeriod(choesData));
                await dispatch(getZvitChildrensPeriod(selectedPeriod));
              });
            } catch (error) {
              console.error('Помилка при оновленні уроку або звіту:', error);
            } finally {
              setOpenPaymentDrawer(false);
              form.resetFields();
            }
          }}
        >
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
                  form.resetFields(['bank']);
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
              paymentMethod === 'cashless'
                ? [{ required: true, message: 'Оберіть банк' }]
                : []
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
            rules={[{ required: true, message: 'Внесіть суму оплати' }]}
            label="Сума"
            name="sum"
          >
            <InputNumber />
          </Form.Item>
          {advancePayment && (
            <Alert
              message="Сума перевищує вартість уроку!"
              type="error"
              showIcon
              style={{ marginBottom: 16 }}
            />
          )}
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
              onClick={() => setOpenPaymentDrawer(false)}
              htmlType="button"
            >
              Вийти
            </Button>
            <Button
              disabled={advancePayment}
              style={{ width: '100%' }}
              type="primary"
              htmlType="submit"
            >
              Зберегти зміни
            </Button>
          </div>
        </Form>
      </Drawer>
    </>
  );
};

export default PaymentChuldLesson;
