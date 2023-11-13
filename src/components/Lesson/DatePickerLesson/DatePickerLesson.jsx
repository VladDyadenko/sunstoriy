import { DatePicker, Select, TimePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/uk_UA';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import {
  DateInfoContainer,
  DescrContainer,
  DescrPlans,
  TimeContainers,
  WrapperPlans,
} from './DatePickerLesson.styled';
import { getDatesByDayOfWeek } from './dateUtils';
import { ErrorInfo } from '../AddLesson/AddLesson.styled';

const { RangePicker } = DatePicker;
const PickerWithTypeLesson = ({ type, onChange }) => {
  if (type === 'Одне заняття')
    return (
      <DatePicker
        format="YYYY-MM-DD"
        size="middle"
        locale={locale}
        defaultValue={dayjs()}
        onChange={onChange}
      />
    );
  if (type === 'План занять')
    return (
      <RangePicker
        format="YYYY-MM-DD"
        size="middle"
        locale={locale}
        className="custom-datepicker"
        onChange={onChange}
        defaultValue={dayjs()}
      />
    );
  return <DatePicker picker={type} onChange={onChange} />;
};

const { Option } = Select;

const DatePickerLesson = ({
  setFieldValue,
  office,
  errors,
  touched,
  timeLessonCurrent,
  setDateCurrentLesson,
}) => {
  const [type, setType] = useState('Одне заняття');
  const [day, setDay] = useState('1');

  const [timeLesson, setValues] = useState(null);

  useEffect(() => {
    setDateCurrentLesson(null);
  }, [setDateCurrentLesson, type]);

  useEffect(() => {
    if (timeLessonCurrent) {
      const dateObjects = timeLessonCurrent.map(timeLessonCurrent =>
        dayjs(timeLessonCurrent)
      );
      setValues(dateObjects);
    }
  }, [timeLessonCurrent]);

  // useEffect(() => {
  //   if (!addSuccessLesson || addSuccessLesson) {
  //     setValues(null);
  //   }
  // }, [addSuccessLesson]);

  const handleDateChange = (date, dateString) => {
    if (date) {
      if (Array.isArray(dateString) && dateString.length === 2) {
        const startDate = new Date(dateString[0]);
        const endDate = new Date(dateString[1]);
        const dayOfWeek = parseInt(day);
        const dates = getDatesByDayOfWeek(startDate, endDate, dayOfWeek);
        const date = dates.map(date => date.valueOf());
        setDateCurrentLesson(date);
        setFieldValue('dateLesson', date);
      } else if (typeof dateString === 'string') {
        const selectedDate = new Date(dateString);
        setDateCurrentLesson(selectedDate.valueOf());
        setFieldValue('dateLesson', selectedDate.valueOf());
      }
    }
  };

  const handleTimeLesson = vals => {
    const sanitizedTime = vals.map(time => time.startOf('minute'));
    setValues(sanitizedTime);
  };

  useEffect(() => {
    if (timeLesson) {
      setFieldValue('timeLesson', timeLesson);
    }
  }, [setFieldValue, timeLesson]);

  return (
    <>
      <WrapperPlans>
        <DateInfoContainer>
          <DescrContainer>
            <DescrPlans>Період:</DescrPlans>
            <Select value={type} onChange={setType}>
              <Option value="Одне заняття">Одне заняття</Option>
              <Option value="План занять">План занять</Option>
            </Select>
          </DescrContainer>
          {type === 'План занять' ? (
            <DescrContainer>
              <DescrPlans>День тижня:</DescrPlans>
              <Select value={day} onChange={setDay}>
                <Option value="1">Понеділок</Option>
                <Option value="2">Вівторок</Option>
                <Option value="3">Середа</Option>
                <Option value="4">Четвер</Option>
                <Option value="5">П'ятниця</Option>
                <Option value="6">Субота</Option>
              </Select>
            </DescrContainer>
          ) : null}
        </DateInfoContainer>

        <TimeContainers>
          <DescrPlans>Виберіть дату чи період:</DescrPlans>
          <PickerWithTypeLesson
            type={type}
            onChange={handleDateChange}
            key={day}
          />
          {touched.dateLesson && errors.dateLesson && (
            <ErrorInfo>{errors.dateLesson}</ErrorInfo>
          )}
        </TimeContainers>

        <TimeContainers>
          <DescrPlans>Виберіть час заняття:</DescrPlans>
          <TimePicker.RangePicker
            onChange={handleTimeLesson}
            value={timeLesson ? [timeLesson[0], timeLesson[1]] : null}
            minuteStep={5}
            format="HH:mm"
          />
          {touched.timeLesson && errors.timeLesson && (
            <ErrorInfo>{errors.timeLesson}</ErrorInfo>
          )}
        </TimeContainers>
      </WrapperPlans>
    </>
  );
};

export default DatePickerLesson;
