import { DatePicker, Select, TimePicker } from 'antd';

import locale from 'antd/es/date-picker/locale/uk_UA';
import dayjs from 'dayjs';
import { useState } from 'react';
import {
  DateInfoContainer,
  DescrContainer,
  DescrPlans,
  WrapperPlans,
} from './DatePickerLesson.styled';
import { getDatesByDayOfWeek } from './dateUtils';

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

const DatePickerLesson = ({ setFieldValue }) => {
  const [type, setType] = useState('Одне заняття');
  const [day, setDay] = useState('1');
  const [selectedDates, setSelectedDates] = useState(null);
  console.log(selectedDates);

  const handleDateChange = (date, dateString) => {
    if (date) {
      if (Array.isArray(dateString) && dateString.length === 2) {
        const startDate = new Date(dateString[0]);
        const endDate = new Date(dateString[1]);
        const dayOfWeek = parseInt(day);
        const dates = getDatesByDayOfWeek(startDate, endDate, dayOfWeek);
        setSelectedDates(dates);
      } else if (typeof dateString === 'string') {
        const selectedDate = new Date(dateString);
        setFieldValue('dateLesson', selectedDate.valueOf());
      }
    }
  };

  const handleTimeChange = (time, dateString) => {
    setFieldValue('timeLesson', dateString);
  };
  return (
    <>
      <WrapperPlans>
        <DateInfoContainer>
          <DescrContainer>
            <DescrPlans>Дата:</DescrPlans>
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

        <PickerWithTypeLesson type={type} onChange={handleDateChange} />
        <TimePicker onChange={handleTimeChange} secondStep={60} />
      </WrapperPlans>
    </>
  );
};

export default DatePickerLesson;
