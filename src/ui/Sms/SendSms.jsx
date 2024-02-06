import { useDispatch, useSelector } from 'react-redux';
import { sendSms } from 'redux/sms/smsOperetion';
import { SendSmsBtn } from './SendSms.styled';
import { Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { selectOfficesOperetion } from 'redux/offices/officesSelector';
import { CirclesWithBar } from 'react-loader-spinner';
import {
  formatDate,
  formatTime,
  transliterate,
} from 'assets/constants/ConvertToCyrillica';

const SendSms = ({ lesson }) => {
  const dispatch = useDispatch();
  const operetion = useSelector(selectOfficesOperetion);

  const { dateLesson, timeLesson, office, matherPhone, mather } = lesson;

  const formatDateSms = formatDate(dateLesson);

  const formatTimeSms = formatTime(timeLesson[0]);

  const templateSms = `Доброго дня, ${mather}! Очікуємо Вас на занятті з ${office} ${formatDateSms} на ${formatTimeSms} годину!`;
  const messageInSms = transliterate(templateSms);
  //   console.log(messageInSms);

  const hendleSendSMS = () => {
    if (matherPhone === '') {
      return;
    }
    const smsData = {
      phone: `${matherPhone}`,
      message: `${messageInSms}`,
      src_addr: 'Zamovlennia',
    };

    dispatch(sendSms(smsData));
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
        <SendSmsBtn type="button">
          {operetion === lesson._id ? (
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
