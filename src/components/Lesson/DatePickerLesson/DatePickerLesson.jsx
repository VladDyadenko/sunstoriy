import { Select, TimePicker } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import {
  DateInfoContainer,
  DescrContainer,
  DescrPlans,
  TimeContainers,
  WrapperPlans,
} from './DatePickerLesson.styled';
import { getDatesByDayOfWeek } from './dateUtils';
import { ErrorInfo, FormButtonLesson } from '../AddLesson/AddLesson.styled';
import PickerWithTypeLesson from 'ui/PickerWithTypeLesson/PickerWithTypeLesson';
import ButtonLoader from 'ui/ButtonLoader/ButtonLoader';

const { Option } = Select;

const DatePickerLesson = ({
  setFieldValue,
  errors,
  touched,
  timeLessonCurrent,
  setDateCurrentLesson,
  dateLessonCurrent,
  buttonView,
  operetion,
}) => {
  const [type, setType] = useState('Одне заняття');
  const [day, setDay] = useState('1');
  const [timeLesson, setValues] = useState(null);
  const [selectedDateNewLesson, setSelectedDateNewLesson] = useState(null);
  useEffect(() => {
    setDateCurrentLesson(null);
    setSelectedDateNewLesson(null);
  }, [setDateCurrentLesson, type]);

  useEffect(() => {
    const today = dayjs().format('YYYY-MM-DD');
    const selectedDate = new Date(today);
    setDateCurrentLesson(selectedDate.valueOf());
    setSelectedDateNewLesson(selectedDate.valueOf());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (type === 'План занять') {
      const initialStartDate = dayjs().startOf('month').format('YYYY-MM-DD');
      const initialEndDate = dayjs().endOf('month').format('YYYY-MM-DD');
      const startDate = new Date(initialStartDate);
      const endDate = new Date(initialEndDate);
      const dayOfWeek = parseInt(day);
      const dates = getDatesByDayOfWeek(startDate, endDate, dayOfWeek);
      const date = dates.map(date => date.valueOf());
      setDateCurrentLesson(date);
      setSelectedDateNewLesson(date);
    }
  }, [day, setDateCurrentLesson, type]);

  useEffect(() => {
    if (timeLessonCurrent) {
      const dateObjects = timeLessonCurrent.map(timeLessonCurrent =>
        dayjs(timeLessonCurrent)
      );
      setValues(dateObjects);
    }
  }, [timeLessonCurrent]);

  const handleDateChange = (date, dateString) => {
    if (date) {
      if (Array.isArray(dateString) && dateString.length === 2) {
        const startDate = new Date(dateString[0]);
        const endDate = new Date(dateString[1]);
        const dayOfWeek = parseInt(day);
        const dates = getDatesByDayOfWeek(startDate, endDate, dayOfWeek);
        const date = dates.map(date => date.valueOf());

        setDateCurrentLesson(date);
        setSelectedDateNewLesson(date);
        setFieldValue('dateLesson', date);
      } else if (typeof dateString === 'string') {
        const selectedDate = new Date(dateString);

        setDateCurrentLesson(selectedDate.valueOf());
        setSelectedDateNewLesson(selectedDate.valueOf());
        setFieldValue('dateLesson', selectedDate.valueOf());
      }
    }
  };

  const handleTimeLesson = vals => {
    const baseDate = selectedDateNewLesson || dateLessonCurrent; // Используем выбранную дату или дату скопированного занятия
    if (!baseDate) return;

    const baseDayjs = dayjs(baseDate); // Преобразуем baseDate в объект dayjs
    if (!baseDayjs.isValid()) {
      console.error('Invalid baseDate:', baseDate);
      return;
    }

    const sanitizedTime = vals?.map(time => {
      if (!time) return null;
      return baseDayjs // Привязываем время к baseDate
        .set('hour', time.hour()) // Устанавливаем час
        .set('minute', time.minute()) // Устанавливаем минуты
        .set('second', 0) // Устанавливаем секунды
        .set('millisecond', 0) // Устанавливаем миллисекунды
        .toISOString(); // Преобразуем в ISO 8601
    });
    setValues(sanitizedTime);
    setFieldValue('timeLesson', sanitizedTime); // Сохраняем в формате ISO 8601
  };

  useEffect(() => {
    if (timeLesson) {
      setFieldValue('timeLesson', timeLesson);
    }
  }, [setFieldValue, timeLesson]);

  useEffect(() => {
    if (dateLessonCurrent) {
      const timestamp = new Date(dateLessonCurrent).getTime();
      setFieldValue('dateLesson', timestamp);
    }
  }, [setFieldValue, dateLessonCurrent]);

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

        <TimeContainers>
          <DescrPlans>Виберіть дату чи період:</DescrPlans>
          <PickerWithTypeLesson
            type={type}
            onChange={handleDateChange}
            key={day}
            value={dateLessonCurrent}
          />
          {touched.dateLesson && errors.dateLesson && (
            <ErrorInfo>{errors.dateLesson}</ErrorInfo>
          )}
        </TimeContainers>

        <TimeContainers>
          <DescrPlans>Виберіть час заняття:</DescrPlans>
          <TimePicker.RangePicker
            onChange={handleTimeLesson}
            value={
              timeLesson ? [dayjs(timeLesson[0]), dayjs(timeLesson[1])] : null
            }
            minuteStep={5}
            format="HH:mm"
          />
          {touched.timeLesson && errors.timeLesson && (
            <ErrorInfo>{errors.timeLesson}</ErrorInfo>
          )}
        </TimeContainers>
        <FormButtonLesson type="submit">
          {operetion === 'addLesson' ? (
            <ButtonLoader height="21" width="50" />
          ) : buttonView ? (
            'Зберегти зміни'
          ) : (
            'Назад'
          )}
        </FormButtonLesson>
      </WrapperPlans>
    </>
  );
};

export default DatePickerLesson;
