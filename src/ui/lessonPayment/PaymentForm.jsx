import React, { useEffect, useState } from 'react';
import { Notify } from 'notiflix';
import {
  Alert,
  Button,
  Checkbox,
  Form,
  InputNumber,
  Radio,
  Select,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  addPayment,
  updateLesson,
  updatePayment,
} from 'redux/Lesson/lessonOperetion';
import { selectIslessonLoading } from 'redux/Lesson/lessonSelector';

function PaymentForm({
  initialPaymentValues,
  id,
  onCloseDrawer,
  price,
  dateFromExpense,
  editingPayment,
  setCurrentPayment,
  setEditingPayment,
  salaryData,
}) {
  const [form] = Form.useForm();
  const sumForm = Form.useWatch('amount', form);
  const isHappendForm = Form.useWatch('isHappend', form);
  const isNoPayment = Form.useWatch('paymentForm', form);

  const dispatch = useDispatch();
  const paymentLoading = useSelector(selectIslessonLoading);

  const [paymentMethod, setPaymentMethod] = useState(null);
  const [advancePayment, setAdvancePayment] = useState(false);
  const [verifyPaymentForm, setVerifyPaymentForm] = useState(false);

  useEffect(() => {
    setVerifyPaymentForm(isNoPayment === 'noPayment' && editingPayment);
  }, [isNoPayment, editingPayment]);

  useEffect(() => {
    setAdvancePayment(sumForm > price && !isHappendForm);
  }, [price, sumForm, isHappendForm]);

  const handleAddPayment = async values => {
    const statusLesson = values.isHappend ? 'Відпрацьоване' : 'Заплановане';
    const paymentData = {
      date: dateFromExpense,
      amount: values.amount || 0,
      paymentForm: values.paymentForm,
      bank: values.bank,
      isHappend: statusLesson,
    };
    salaryData.isHappend = statusLesson;
    const lessonData = { id, values: salaryData };
    if (values.paymentForm === 'cash') {
      paymentData.bank = '';
    }
    if (values.paymentForm === 'noPayment') {
      paymentData.bank = '';
      paymentData.amount = 0;
    }

    const combinedData = { id, values: paymentData };
    await dispatch(addPayment(combinedData)).then(async ({ payload }) => {
      if (
        payload.isHappend &&
        (payload.isHappend === 'Відпрацьоване' ||
          payload.isHappend === 'Заплановане')
      ) {
        await dispatch(updateLesson(lessonData));
        if (payload.isHappend === 'Відпрацьоване' && payload.sum.length === 1) {
          Notify.success('Зарплата нарахована');
        } else if (payload.isHappend === 'Заплановане') {
          Notify.success('Зарплата перерахована');
        }
      }
      setCurrentPayment(payload.sum);
      onCloseDrawer();
    });
  };

  const handleEditPayment = async values => {
    const statusLesson = values.isHappend ? 'Відпрацьоване' : 'Заплановане';
    const paymentData = {
      date: dateFromExpense,
      amount: values.amount || 0,
      paymentForm: values.paymentForm,
      bank: values.bank,
      isHappend: statusLesson,
    };
    salaryData.isHappend = statusLesson;
    const lessonData = { id, values: salaryData };
    if (values.paymentForm === 'cash') {
      paymentData.bank = '';
    }
    if (values.paymentForm === 'noPayment') {
      paymentData.bank = '';
      paymentData.amount = 0;
    }
    const combinedData = {
      lessonId: id,
      paymentId: editingPayment._id,
      values: paymentData,
    };
    await dispatch(updatePayment(combinedData)).then(async ({ payload }) => {
      if (
        payload.isHappend &&
        (payload.isHappend === 'Відпрацьоване' ||
          payload.isHappend === 'Заплановане')
      ) {
        await dispatch(updateLesson(lessonData));
        if (payload.isHappend === 'Відпрацьоване' && payload.sum.length === 1) {
          Notify.success('Зарплата нарахована');
        } else if (payload.isHappend === 'Заплановане') {
          Notify.success('Зарплата перерахована');
        }
      }
      setCurrentPayment(payload.sum);
      setEditingPayment(null);
      onCloseDrawer();
    });
  };

  return (
    <>
      <Form
        form={form}
        initialValues={editingPayment || initialPaymentValues}
        onFinish={editingPayment ? handleEditPayment : handleAddPayment}
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
          rules={
            paymentMethod === 'cashless' || paymentMethod === 'cash'
              ? [{ required: true, message: 'Внесіть суму оплати' }]
              : []
          }
          label="Сума"
          name="amount"
        >
          <InputNumber />
        </Form.Item>
        {advancePayment && (
          <Alert
            message="Аванс (сума більше вартості уроку) можна вносити тільки у відпрацьований урок!"
            type="error"
            showIcon
            style={{ marginBottom: 16 }}
          />
        )}
        {verifyPaymentForm && (
          <Alert
            message="Виберіть форму оплати!"
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
            justifyContent: 'center',
            gap: 15,
            marginTop: 40,
          }}
        >
          <Button
            style={{ width: '40%' }}
            type="primary"
            onClick={onCloseDrawer}
            htmlType="button"
          >
            Відмінити
          </Button>
          <Button
            disabled={advancePayment || verifyPaymentForm}
            loading={paymentLoading}
            style={{ width: '40%' }}
            type="primary"
            htmlType="submit"
          >
            {editingPayment ? 'Оновити платіж' : 'Додати платіж'}
          </Button>
        </div>
      </Form>
    </>
  );
}

export default PaymentForm;
