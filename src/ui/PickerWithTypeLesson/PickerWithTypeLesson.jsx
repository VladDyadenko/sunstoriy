import locale from 'antd/es/date-picker/locale/uk_UA';
import dayjs from 'dayjs';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;
const PickerWithTypeLesson = ({ type, onChange, value }) => {
  const startDate = dayjs().startOf('week');
  const endDate = dayjs().endOf('week');

  const initialDateValues = [startDate, endDate];

  if (type === 'Одне заняття')
    return (
      <DatePicker
        format="YYYY-MM-DD"
        size="middle"
        locale={locale}
        defaultValue={dayjs()}
        onChange={onChange}
        value={value ? dayjs(value) : dayjs()}
      />
    );
  if (
    type === 'План занять' ||
    type === 'Період' ||
    type === 'Період та день тижня'
  )
    return (
      <RangePicker
        format="YYYY-MM-DD"
        size="middle"
        locale={locale}
        className="custom-datepicker"
        onChange={onChange}
        defaultValue={initialDateValues}
      />
    );
  return <DatePicker picker={type} onChange={onChange} />;
};

export default PickerWithTypeLesson;
