import { DatePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/uk_UA';
import dayjs from 'dayjs';
import { useState } from 'react';

const DatePickerForm = ({ setFieldValue, valueBirthDate }) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleDateChange = (date, dateString) => {
    setSelectedDate(date?.valueOf());

    setFieldValue('birthDate', date?.valueOf());

    const currentDate = dayjs();

    const birthDate = dayjs(date?.valueOf());

    const years = currentDate.diff(birthDate, 'year');

    setFieldValue('age', years);
  };

  return (
    <>
      <DatePicker
        size="middle"
        locale={locale}
        format="DD/MM/YYYY"
        value={valueBirthDate ? dayjs(valueBirthDate) : dayjs(selectedDate)}
        onChange={handleDateChange}
      />
    </>
  );
};

export default DatePickerForm;
