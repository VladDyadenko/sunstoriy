import {
  Button,
  Checkbox,
  Drawer,
  Form,
  Input,
  InputNumber,
  Select,
} from 'antd';
import { useForm } from 'antd/es/form/Form';
import {
  ButtonContainer,
  DateDescription,
  DateTitle,
} from 'components/Expense/ExpenseContainer.styled';
import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense } from 'redux/expense/expenseOperetion';
import { updateSalary } from 'redux/salary/salaryOperetion';
import { selectSalarySelected } from 'redux/salary/salarySelector';
import { clearSalarySelected } from 'redux/salary/salarySlice';

const SalarisForm = ({ selectedPeriod }) => {
  const [form] = useForm();
  const dispatch = useDispatch();
  const updateSalaryData = useSelector(selectSalarySelected);

  const [open, setOpen] = useState(false);
  const [paymentSelected, setPaymentSelected] = useState(null);

  const onCloseDrawerSalary = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (updateSalaryData) {
      setOpen(true);
    }
  }, [updateSalaryData]);

  useEffect(() => {
    if (updateSalaryData) {
      setOpen(true);
      // Встановлюємо початкові значення для форми
      form.setFieldsValue({
        amount_cash: null,
        amount_cashless: null,
        amount_debt: updateSalaryData?.amount_debt, // Початкове значення для заборгованості
      });
    }
  }, [updateSalaryData, form]);

  const currentDay = new Date().toISOString().split('T')[0];

  const currentDayDescr = new Date()
    .toLocaleDateString('uk-UA', {
      day: '2-digit',
      month: '2-digit',
    })
    .replace(/\./g, '.');

  return (
    <Drawer
      title="Виплата зарплати фахівцям"
      placement="right"
      width={340}
      open={open}
      onClose={onCloseDrawerSalary}
    >
      <DateTitle>
        <p style={{ marginBottom: 15 }}>
          Фахівець:
          <DateDescription>{` ${updateSalaryData?.name}  ${updateSalaryData?.surname}`}</DateDescription>
        </p>
        <p>
          Дата нарахування:
          <DateDescription>{selectedPeriod}</DateDescription>
        </p>
        <p>
          Дата виплати:
          <DateDescription>{currentDay}</DateDescription>
        </p>
        <p>
          Сума до виплати:
          <DateDescription>{updateSalaryData?.amount_accrued}</DateDescription>
        </p>
      </DateTitle>

      <Form
        form={form}
        initialValues={{
          amount_cash: null,
          amount_cashless: null,
          amount_debt: updateSalaryData?.amount_debt,
        }}
        onFinish={async values => {
          const totalPaid =
            (values.amount_cash || 0) + (values.amount_cashless || 0);
          if (totalPaid > updateSalaryData?.amount_debt) {
            return Notify.failure('Сума виплати перевищує заборгованність!');
          }
          values.date = updateSalaryData.date;
          values.comment = [
            values.amount_cash ? `${values.amount_cash} грн` : null,
            values.amount_cashless ? `${values.amount_cashless} грн` : null,
            `виплачено ${currentDayDescr}`,
          ]
            .filter(Boolean)
            .join(' ');

          console.log('values', values);
          const salaryData = { id: updateSalaryData._id, values };

          await dispatch(updateSalary(salaryData)).then(() => {
            onCloseDrawerSalary();
            // Додаємо витрати
            if (values.amount_cash > 0 || values.amount_cash < 0) {
              dispatch(
                addExpense({
                  date: currentDay,
                  salaryId: updateSalaryData?._id,
                  category: `Зарплата ${updateSalaryData?.name} ${updateSalaryData?.surname}`,
                  amount: values.amount_cash,
                  paymentForm: 'cash',
                  bank: '',
                  description: `Нараховано ${
                    updateSalaryData?.date.split('T')[0]
                  }`,
                })
              );
            }
            if (values.amount_cashless > 0 || values.amount_cashless < 0) {
              dispatch(
                addExpense({
                  date: currentDay,
                  salaryId: updateSalaryData?._id,
                  category: `Зарплата ${updateSalaryData?.name} ${updateSalaryData?.surname}`,
                  amount: values.amount_cashless,
                  paymentForm: 'cashless',
                  bank: values.bank,
                  description: `Нараховано ${
                    updateSalaryData?.date.split('T')[0]
                  }`,
                })
              );
            }

            form.resetFields();
            dispatch(clearSalarySelected());
          });
        }}
      >
        <Form.Item label="Форма виплати" name="paymentMethod">
          <Checkbox.Group
            onChange={values => {
              setPaymentSelected(values);
              if (!values?.includes('cashless')) {
                form.setFieldsValue({ bank: undefined });
                form.resetFields(['bank']);
              }
            }}
          >
            <Checkbox value="cash">Готівка</Checkbox>
            <Checkbox value="cashless">Безготівкова</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        {/* Поле для виплати готівкою */}
        {paymentSelected?.includes('cash') && (
          <Form.Item label="Сума готівкою" name="amount_cash">
            <InputNumber
              style={{ width: '100%' }}
              placeholder="Сума готівкою"
              onChange={value => {
                const cashless = form.getFieldValue('amount_cashless') || 0;
                form.setFieldsValue({
                  amount_debt:
                    updateSalaryData?.amount_debt - (value || 0) - cashless,
                });
              }}
            />
          </Form.Item>
        )}

        {/* Поле для виплати безготівково */}
        {paymentSelected?.includes('cashless') && (
          <>
            <Form.Item
              label="Банк"
              name="bank"
              rules={[{ required: true, message: 'Оберіть банк' }]}
            >
              <Select>
                <Select.Option value="PrivatBank">ПриватБанк</Select.Option>
                <Select.Option value="MonoBank">Монобанк</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Сума безготівково" name="amount_cashless">
              <InputNumber
                style={{ width: '100%' }}
                placeholder="Сума безготівково"
                onChange={value => {
                  const cash = form.getFieldValue('amount_cash') || 0;
                  form.setFieldsValue({
                    amount_debt:
                      updateSalaryData?.amount_debt - (value || 0) - cash,
                  });
                }}
              />
            </Form.Item>
          </>
        )}
        <Form.Item label="Заборгованність" name="amount_debt">
          <InputNumber style={{ width: '100%' }} readOnly />
        </Form.Item>

        <Form.Item label="Примітки" name="comment">
          <Input.TextArea
            placeholder="Інформація за потреби"
            autoSize={{
              minRows: 1,
              maxRows: 5,
            }}
          />
        </Form.Item>
        <ButtonContainer>
          <Button
            style={{ width: '100%' }}
            type="primary"
            onClick={() => setOpen(false)}
            htmlType="button"
          >
            Відмінити
          </Button>
          <Button style={{ width: '100%' }} type="primary" htmlType="submit">
            Зберегти зміни
          </Button>
        </ButtonContainer>
      </Form>
    </Drawer>
  );
};

export default SalarisForm;
