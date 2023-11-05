import { DatePicker, Select, TimePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/uk_UA';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  BtnContainer,
  ButtonSelectPeriod,
  DateInfoContainer,
  DescrContainer,
  DescrPlans,
  IconBtn,
  TimeContainer,
  TimeContainers,
  WrapperPlans,
} from './DatePickerLesson.styled';
import { getDatesByDayOfWeek } from './dateUtils';
import { choseLessonGraph } from 'redux/Lesson/lessonOperetion';
import { ErrorInfo } from '../AddLesson/AddLesson.styled';
import ChooseDataLessons from '../ChooseDataLessons/ChooseDataLessons';

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

const DatePickerLesson = ({
  addSuccessLesson,
  setFieldValue,
  office,
  errors,
  touched,
}) => {
  const [type, setType] = useState('Одне заняття');
  const [day, setDay] = useState('1');
  const [dateLesson, setDateLesson] = useState(null);

  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!addSuccessLesson || addSuccessLesson) {
      setStartTime(null);
      setEndTime(null);
    }
  }, [addSuccessLesson]);

  const handleDateChange = (date, dateString) => {
    if (date) {
      if (Array.isArray(dateString) && dateString.length === 2) {
        const startDate = new Date(dateString[0]);
        const endDate = new Date(dateString[1]);
        const dayOfWeek = parseInt(day);
        const dates = getDatesByDayOfWeek(startDate, endDate, dayOfWeek);
        const date = dates.map(date => date.valueOf());
        setDateLesson(date);
        setFieldValue('dateLesson', date);
      } else if (typeof dateString === 'string') {
        const selectedDate = new Date(dateString);
        setDateLesson(selectedDate.valueOf());
        setFieldValue('dateLesson', selectedDate.valueOf());
      }
    }
  };
  const handleChosePeriod = e => {
    const data = { office, dateLesson };
    dispatch(choseLessonGraph(data));
  };
  const handleTimeStartLesson = (time, dateString) => {
    setStartTime(dateString);
  };
  const handleTimeEndLesson = (time, dateString) => {
    setEndTime(dateString);
  };
  useEffect(() => {
    if (startTime && endTime) {
      const startTimeFormatted = formatTime(startTime);
      const endTimeFormatted = formatTime(endTime);
      const timeString = `${startTimeFormatted} - ${endTimeFormatted}`;
      setFieldValue('timeLesson', timeString);
    }
  }, [endTime, setFieldValue, startTime]);

  const formatTime = time => {
    const [hours, minutes] = time.split(':');
    return `${hours}:${minutes}`;
  };

  return (
    <>
      <WrapperPlans>
        <DateInfoContainer>
          <DescrContainer>
            <DescrPlans>Період:</DescrPlans>
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
        {touched.dateLesson && errors.dateLesson && (
          <ErrorInfo>{errors.dateLesson}</ErrorInfo>
        )}
        <TimeContainer>
          <TimeContainers>
            <DescrPlans>Початок:</DescrPlans>
            <TimePicker onChange={handleTimeStartLesson} secondStep={60} />
            {touched.timeLesson && errors.timeLesson && (
              <ErrorInfo>{errors.timeLesson}</ErrorInfo>
            )}
          </TimeContainers>
          <TimeContainers>
            <DescrPlans>Кінець:</DescrPlans>
            <TimePicker onChange={handleTimeEndLesson} secondStep={60} />
            {touched.timeLesson && errors.timeLesson && (
              <ErrorInfo>{errors.timeLesson}</ErrorInfo>
            )}
          </TimeContainers>
        </TimeContainer>
      </WrapperPlans>

      <BtnContainer>
        <ChooseDataLessons />
        <ButtonSelectPeriod type="button" onClick={handleChosePeriod}>
          Підібрати час заняття
          <IconBtn />
        </ButtonSelectPeriod>
      </BtnContainer>
    </>
  );
};

export default DatePickerLesson;
