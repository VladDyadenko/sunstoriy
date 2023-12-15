import { Select } from 'antd';
import PickerWithTypeLesson from 'ui/PickerWithTypeLesson/PickerWithTypeLesson';
import {
  ButtonChoseDate,
  DescrContainer,
  IconBtn,
  Wrapper,
} from './SelectDate.styled';
import { getDates } from './GetDateFunction';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sensornayaLessons } from 'redux/Lesson/lessonOperetion';
import { selectLessonOperetion } from 'redux/Lesson/lessonSelector';
import { CirclesWithBar } from 'react-loader-spinner';
const { Option } = Select;

const SelectDate = ({ setLessonDates, type, setType, dateCurrentLesson }) => {
  const [day, setDay] = useState('1');
  const dispatch = useDispatch();
  const operetion = useSelector(selectLessonOperetion);

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
  const handleChosePeriod = () => {
    // const data = { offices: ['Сенсорна'], dateCurrentLesson };
    dispatch(sensornayaLessons(dateCurrentLesson));
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
      <ButtonChoseDate type="button" onClick={handleChosePeriod}>
        {operetion === 'sensornayaLessons' ? (
          <CirclesWithBar
            height="22"
            width="50"
            color="#ffffff"
            wrapperStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            visible={true}
            ariaLabel="circles-with-bar-loading"
          />
        ) : (
          <>
            <IconBtn />
            Застосувати зміни
          </>
        )}
      </ButtonChoseDate>
    </Wrapper>
  );
};

export default SelectDate;