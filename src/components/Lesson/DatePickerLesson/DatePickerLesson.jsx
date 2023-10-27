import { DatePicker, Select, TimePicker } from 'antd';

import locale from 'antd/es/date-picker/locale/uk_UA';
import dayjs from 'dayjs';
import { useState } from 'react';
import {
  DescrContainer,
  DescrPlans,
  WrapperPlans,
} from './DatePickerLesson.styled';

const { RangePicker } = DatePicker;
const PickerWithTypeLesson = ({ type, onChange }) => {
  if (type === 'Одне заняття')
    return (
      <DatePicker
        format="DD/MM/YYYY"
        size="middle"
        locale={locale}
        defaultValue={dayjs()}
        onChange={onChange}
      />
    );
  if (type === 'План занять')
    return (
      <RangePicker
        format="DD/MM/YYYY"
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
const DatePickerLesson = () => {
  const [type, setType] = useState('Одне заняття');
  const [day, setDay] = useState('Понеділок');

  const handleDateChange = (date, dateString) => {
    console.log(dateString);
  };
  const handleTimeChange = (time, dateString) => {
    console.log(dateString);
  };
  return (
    <>
      <WrapperPlans>
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
              <Option value="Понеділок">Понеділок</Option>
              <Option value="Вівторок">Вівторок</Option>
              <Option value="Середа">Середа</Option>
              <Option value="Четвер">Четвер</Option>
              <Option value="П'ятниця">П'ятниця</Option>
              <Option value="Субота">Субота</Option>
            </Select>
          </DescrContainer>
        ) : null}
        <PickerWithTypeLesson type={type} onChange={handleDateChange} />
        <TimePicker onChange={handleTimeChange} />
      </WrapperPlans>
    </>
  );
};

export default DatePickerLesson;
