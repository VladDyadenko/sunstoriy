import { Select } from 'antd';
import PickerWithTypeLesson from 'ui/PickerWithTypeLesson/PickerWithTypeLesson';
import { DescrContainer, Wrapper } from './SelectDate.styled';
import { getDates } from './GetDateFunction';
import { useState } from 'react';
const { Option } = Select;

const SelectDate = ({ setLessonDates, type, setType }) => {
  const [day, setDay] = useState('1');

  const handleDateChange = (date, dateString) => {
    if (date) {
      if (Array.isArray(dateString) && dateString.length === 2) {
        const startDate = new Date(dateString[0]);
        const endDate = new Date(dateString[1]);
        const dayOfWeek = parseInt(day);
        const dates = getDates(startDate, endDate, dayOfWeek, type);
        const date = dates.map(date => date.valueOf());
        setLessonDates(date);
      } else if (typeof dateString === 'string') {
        const selectedDate = new Date(dateString);
        setLessonDates(selectedDate.valueOf());
      }
    }
  };
  return (
    <Wrapper>
      <Select value={type} onChange={setType}>
        <Option value="Один ден">Один день</Option>
        <Option value="Період">Період</Option>
        <Option value="Період та день тижня">Період та день тижня</Option>
      </Select>
      {type === 'Період та день тижня' ? (
        <DescrContainer>
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
      <PickerWithTypeLesson type={type} onChange={handleDateChange} />
    </Wrapper>
  );
};

export default SelectDate;
