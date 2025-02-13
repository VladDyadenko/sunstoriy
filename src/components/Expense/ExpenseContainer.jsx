import { Drawer, Form, InputNumber, Select, Input, Button, Radio } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { categoryExpense } from 'assets/constants/mainConstans';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense, updateExpense } from 'redux/expense/expenseOperetion';
import { DateDescription, DateTitle } from './ExpenseContainer.styled';
import { selectExpenseSelected } from 'redux/expense/expenceSelector';
import { clearExpenseSelected } from 'redux/expense/expenseSlice';

const ExpenseContainer = ({
  setOpen,
  selectedPeriod,
  open,
  onCloseDrawerExpense,
}) => {
  const [form] = useForm();
  const [paymentMethod, setPaymentMethod] = useState(null);
  const dispatch = useDispatch();
  const updateExpenseInfo = useSelector(selectExpenseSelected);

  useEffect(() => {
    if (updateExpenseInfo) {
      setOpen(true);
      form.setFieldsValue({
        date: updateExpenseInfo.date
          ? updateExpenseInfo.date.split('T')[0]
          : selectedPeriod,
        category: updateExpenseInfo.category || 'Інше',
        amount: updateExpenseInfo.amount || null,
        paymentForm: updateExpenseInfo.paymentForm || 'cash',
        bank: updateExpenseInfo.bank || '',
        description: updateExpenseInfo.description || '',
      });
      setPaymentMethod(updateExpenseInfo.paymentForm || 'cash');
    }
  }, [updateExpenseInfo, setOpen, form, selectedPeriod]);

  return (
    <>
      <Drawer
        title="Поточні витрати"
        placement="right"
        width={340}
        onClose={onCloseDrawerExpense}
        open={open}
      >
        <Form
          form={form}
          initialValues={{
            date: null,
            category: 'Інше',
            amount: null,
            paymentForm: 'cash',
            bank: '',
            description: '',
          }}
          onFinish={async values => {
            if (updateExpenseInfo) {
              const expenseData = { id: updateExpenseInfo._id, values };
              await dispatch(updateExpense(expenseData)).then(async () => {
                dispatch(clearExpenseSelected());
                onCloseDrawerExpense();
              });
            } else {
              if (values.paymentForm === 'cash') {
                values.bank = '';
              }
              values.date = selectedPeriod;
              await dispatch(addExpense(values)).then(() => {
                onCloseDrawerExpense();
              });
            }
          }}
        >
          <DateTitle>
            Дата витрат: <DateDescription>{selectedPeriod}</DateDescription>
          </DateTitle>

          <Form.Item
            label="Категорія витрат"
            name="category"
            rules={[{ required: true, message: 'Виберіть категорію' }]}
          >
            <Select>
              {categoryExpense.map(expense => (
                <Select.Option key={expense.category} value={expense.category}>
                  {expense.title}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: 'Внесіть суму витрат' }]}
            label="Сума"
            name="amount"
          >
            <InputNumber style={{ width: '100%' }} placeholder="Вкажіть суму" />
          </Form.Item>
          <Form.Item
            label="Форма оплати"
            name="paymentForm"
            onChange={e => {
              if (e.target.value === 'cash') {
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
          <Form.Item label="Опис витрат" name="description">
            <Input.TextArea
              placeholder="За потребою додайте опис"
              autoSize={{
                minRows: 1,
                maxRows: 5,
              }}
            />
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
              onClick={onCloseDrawerExpense}
              htmlType="button"
            >
              Відмінити
            </Button>
            <Button style={{ width: '100%' }} type="primary" htmlType="submit">
              Зберегти зміни
            </Button>
          </div>
        </Form>
      </Drawer>
    </>
  );
};

export default ExpenseContainer;
