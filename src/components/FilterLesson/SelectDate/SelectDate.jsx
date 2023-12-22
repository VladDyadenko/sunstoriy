import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CirclesWithBar } from 'react-loader-spinner';
import { Select } from 'antd';
import PickerWithTypeLesson from 'ui/PickerWithTypeLesson/PickerWithTypeLesson';
import {
  ButtonChoseDate,
  DescrContainer,
  IconBtn,
  Wrapper,
} from './SelectDate.styled';
import { getDates } from './GetDateFunction';
import { selectLessonOperetion } from 'redux/Lesson/lessonSelector';
const { Option } = Select;

const SelectDate = ({
  setLessonDates,
  type,
  setType,
  dateCurrentLesson,
  teachers,
  teacher,
  setTeacher,
  onLessonsChange,
}) => {
  const [day, setDay] = useState('1');
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
  useEffect(() => {
    if (type === 'Період' || type === 'Період та день тижня') {
      const startDate = dayjs(dateCurrentLesson[0]).toDate();
      const endDate = dayjs(
        dateCurrentLesson[dateCurrentLesson.length - 1]
      ).toDate();
      const dayOfWeek = parseInt(day);
      const dates = getDates(startDate, endDate, dayOfWeek, type);
      const date = dates.map(date => date.valueOf());
      onLessonsChange(date);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [day, type, dateCurrentLesson]);

  const handleChosePeriod = () => {
    onLessonsChange(dateCurrentLesson);
  };
  return (
    <Wrapper>
      <Select value={type} onChange={setType}>
        <Option value="Один день">Один день</Option>
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
      {teachers?.length > 1 ? (
        <DescrContainer>
          <Select
            value={teacher}
            onChange={setTeacher}
            placeholder="Фахівці"
            allowClear
          >
            {teachers?.map(teacher => (
              <Option key={teacher} value={teacher}>
                {teacher}
              </Option>
            ))}
          </Select>
        </DescrContainer>
      ) : null}
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
