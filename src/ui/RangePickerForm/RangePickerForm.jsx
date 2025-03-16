import { DatePicker } from 'antd';
import React from 'react';
import dayjs from 'dayjs';
import locale from 'antd/es/date-picker/locale/uk_UA';
import 'dayjs/locale/uk';
import { funFormattedDate } from 'utils/dateTransform';

const { RangePicker } = DatePicker;

const RangePickerForm = ({
  setSelectedDateString = () => {},
  setDateFromExpense = () => {},
  setSelectedPeriod = () => {},
  setDayOrePariod = () => {},
}) => {
  const today = dayjs();

  const selectDay = (dates, dateStrings) => {
    if (!dates || dates.length === 0) return;

    if (setDateFromExpense) {
      setDateFromExpense(dateStrings[0]);
    }
    if (setSelectedDateString) {
      setSelectedDateString(dateStrings);
    }

    const { formattedDates, isOneDay } = funFormattedDate(dates);

    if (setSelectedPeriod) {
      setSelectedPeriod(formattedDates);
    }
    if (setDayOrePariod) {
      setDayOrePariod(isOneDay ? 'oneDay' : 'period');
    }
  };

  return (
    <>
      <RangePicker
        defaultValue={[today, today]}
        onChange={selectDay}
        locale={locale}
        style={{ marginBottom: 20, borderColor: '#fce010' }}
      />
    </>
  );
};

export default RangePickerForm;
