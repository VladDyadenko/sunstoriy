import { Button, List, Popconfirm } from 'antd';
import React from 'react';
import {
  PaymentContainer,
  PaymentInfoContainer,
  PaymentTitle,
  PaymentTitleContainer,
} from './PaymentsLessonList.styled';

const PaymentsLessonList = ({
  setEditingPayment,
  currentPayment,
  editingPayment,
  handleDeletePayment,
}) => {
  return (
    <>
      <PaymentContainer
        header={
          <PaymentTitleContainer>
            <PaymentTitle>Список платежів:</PaymentTitle>
            <Button type="dashed" onClick={() => setEditingPayment(null)}>
              Вийти з редагування
            </Button>
          </PaymentTitleContainer>
        }
        dataSource={currentPayment}
        renderItem={payment => {
          const descrFormTransform =
            payment?.paymentForm === 'cash' ? 'Готівка' : 'Безготівкова';
          const descrBankTransform =
            payment?.paymentForm === 'cashless'
              ? payment?.bank === 'MonoBank'
                ? 'Монобанк'
                : 'Приватбанк'
              : '';
          return (
            <List.Item
              style={{
                backgroundColor:
                  editingPayment?._id === payment._id
                    ? '#f0f0f0'
                    : 'transparent',
              }}
              actions={[
                <Button
                  type="primary"
                  size="small"
                  ghost
                  onClick={() => setEditingPayment(payment)}
                >
                  Редагувати
                </Button>,
                <Popconfirm
                  title="Ви впевнені, що хочете видалити цей платіж?"
                  onConfirm={() => handleDeletePayment(payment._id)}
                  okText="Так"
                  cancelText="Ні"
                >
                  <Button type="primary" size="small" danger ghost>
                    Видалити
                  </Button>
                </Popconfirm>,
              ]}
            >
              <PaymentInfoContainer>
                <List.Item.Meta
                  title="Сума"
                  description={`${payment.amount} грн`}
                />
                <List.Item.Meta
                  title="Форма"
                  description={`
                      ${descrFormTransform ? `${descrFormTransform}` : ''}
                      `}
                />
                {descrBankTransform === '' ? null : (
                  <List.Item.Meta
                    title="Банк"
                    description={`${
                      descrBankTransform ? `${descrBankTransform}` : ''
                    }`}
                  />
                )}

                <List.Item.Meta
                  title="Дата платежу"
                  description={`${
                    payment.date ? `${payment.date.split('T')[0]}` : ''
                  }`}
                />
              </PaymentInfoContainer>
            </List.Item>
          );
        }}
      />
    </>
  );
};
export default PaymentsLessonList;
