import { useDispatch, useSelector } from 'react-redux';
import { sendSms } from 'redux/sms/smsOperetion';
import { SendSmsBtn } from './SendSms.styled';
import { Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { CirclesWithBar } from 'react-loader-spinner';
import {
  formatDate,
  formatTime,
  transliterate,
} from 'assets/constants/ConvertToCyrillica';
import { smsOperetion } from 'redux/sms/smsSelector';
import { useEffect, useState } from 'react';

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
    if (lesson) {
      setStatusSendSms(isSendSms);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatDateSms = formatDate(dateLesson);

  const formatTimeSms = formatTime(timeLesson[0]);

  const matherSms = mather ? transliterate(mather) : '';

  function phraseOfficeToSms(text) {
    if (text === 'Сенсорна') {
      return 'у Сенсорній кімнаті';
    }
    if (text === 'Логопед') {
      return 'з Логопедом';
    }
    if (text === 'Корекційний') {
      return 'з Корекційним педагогом';
    }
    if (text === 'Preschool-інклюзія' || text === 'Preschool') {
      return 'з підготовки до школи';
    } else {
      return 'з фахівцем';
    }
  }

  const templateSms = `Доброго дня, ${matherSms}! Очікуємо Вас на занятті ${phraseOfficeToSms(
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
      src_addr: 'Zamovlennia',
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
            <CirclesWithBar
              height="24"
              width="24"
              color="#ffffff"
              wrapperStyle={{}}
              visible={true}
              ariaLabel="circles-with-bar-loading"
            />
          ) : (
            'Відправити СМС'
          )}
        </SendSmsBtn>
      </Popconfirm>
    </>
  );
};

export default SendSms;
