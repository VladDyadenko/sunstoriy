import { useDispatch, useSelector } from 'react-redux';
import { sendSms } from 'redux/sms/smsOperetion';
import { SendSmsBtn } from './SendSms.styled';
import { Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import {
  formatDate,
  formatTime,
  transliterate,
} from 'assets/constants/ConvertToCyrillica';
import { smsOperetion } from 'redux/sms/smsSelector';
import { useEffect, useState } from 'react';
import ButtonLoader from 'ui/ButtonLoader/ButtonLoader';

const SendSms = ({ lesson }) => {
  const dispatch = useDispatch();
  const operetion = useSelector(smsOperetion);

  const {
    dateLesson,
    timeLesson,
    office,
    matherPhone,
    mather,
    _id,
    isSendSms,
  } = lesson;

  const [statusSendSms, setStatusSendSms] = useState(false);

  useEffect(() => {
    if (isSendSms) {
      setStatusSendSms(isSendSms);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatDateSms = formatDate(dateLesson);

  const formatTimeSms = formatTime(timeLesson[0]);

  const matherSms = mather ? transliterate(mather) : '';

  function phraseOfficeToSms(text) {
    if (text === 'Сенсорна') {
      return 'занятті у Сенсорній кімнаті';
    }
    if (text === 'Реабілітолог') {
      return 'масаж';
    }
    if (text === 'Діагностика') {
      return 'на діагностику';
    }
    if (text === 'Логопед') {
      return 'занятті з Логопедом';
    }
    if (text === 'Корекційний') {
      return 'занятті з Корекційним педагогом';
    }
    if (text === 'Preschool-інклюзія' || text === 'Preschool') {
      return 'занятті з підготовки до школи';
    } else {
      return 'занятті з фахівцем';
    }
  }

  const templateSms = `Доброго дня, ${matherSms}! Очікуємо Вас на ${phraseOfficeToSms(
    office
  )} ${formatDateSms} на ${formatTimeSms} годину!`;
  const messageInSms = transliterate(templateSms);

  const hendleSendSMS = () => {
    if (matherPhone === '') {
      return;
    }
    const smsDataInfo = {
      phone: `${matherPhone}`,
      message: `${messageInSms}`,
      src_addr: 'SunstoriY',
      _id,
    };

    dispatch(sendSms(smsDataInfo)).then(value => {
      const status = value.payload.status;
      if (status === 'ENROUTE' || status === 'DELIVRD') {
        setStatusSendSms(true);
      }
    });
  };

  return (
    <>
      <Popconfirm
        title="Зміст СМС"
        description={messageInSms}
        icon={
          <QuestionCircleOutlined
            style={{
              color: 'red',
            }}
          />
        }
        onConfirm={() => {
          hendleSendSMS();
        }}
      >
        <SendSmsBtn disabled={statusSendSms} type="button">
          {operetion === _id ? (
            <ButtonLoader height="24" width="24" />
          ) : statusSendSms ? (
            'СМС Надіслано'
          ) : (
            'Відправити СМС'
          )}
        </SendSmsBtn>
      </Popconfirm>
    </>
  );
};

export default SendSms;
