import styled from 'styled-components';
import { Space, DatePicker } from 'antd';
const { RangePicker } = DatePicker;

export const DayPickerContainer = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const DayPickerTitle = styled.h3`
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 22px;
  color: var(--main-green);
`;
export const DayPickerWrapper = styled(Space)`
  :where(.css-dev-only-do-not-override-17a39f8).ant-picker {
    border: 2px solid var(--main-green);
    padding: 5px 20px;
    width: 345px;
  }

  :where(.css-dev-only-do-not-override-17a39f8).ant-picker
    .ant-picker-input
    > input::placeholder {
    font-family: 'RobotoSlab';
    font-weight: 500;
    font-size: 20px;
    color: var(--main-green);
  }
  .anticon {
    color: var(--main-green);
  }
`;

export const RangePickerLesson = styled(RangePicker)``;
