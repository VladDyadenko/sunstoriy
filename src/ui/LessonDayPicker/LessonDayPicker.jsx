import dayjs from 'dayjs';
import { DatePicker } from 'antd';
import {
  DayPickerContainer,
  DayPickerTitle,
  DayPickerWrapper,
} from './LessonDayPicker.styled';

const { RangePicker } = DatePicker;
const css = `
.ant-picker-dropdown:where(.css-dev-only-do-not-override-17a39f8) .ant-picker-dropdown-range .ant-picker-dropdown-placement-bottomRight{
  inset: 171.297px auto auto 50px;
}
`;

const onRangeChange = (dates, dateStrings) => {
  if (dates) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  } else {
    console.log('Clear');
  }
};
const rangePresets = [
  {
    label: 'Last 7 Days',
    value: [dayjs().add(-7, 'd'), dayjs()],
  },
  {
    label: 'Last 14 Days',
    value: [dayjs().add(-14, 'd'), dayjs()],
  },
];

function LessonDayPicker() {
  return (
    <DayPickerContainer>
      <DayPickerTitle>Виберіть диапазон:</DayPickerTitle>
      <style>{css}</style>
      <DayPickerWrapper direction="vertical" size={12}>
        <RangePicker
          bordered={true}
          presets={rangePresets}
          onChange={onRangeChange}
        />
      </DayPickerWrapper>
    </DayPickerContainer>
  );
}

export default LessonDayPicker;
