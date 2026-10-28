import { useState, memo } from 'react';
import { useSelector } from 'react-redux';
import { Select } from 'antd';
import PickerWithTypeLesson from 'ui/PickerWithTypeLesson/PickerWithTypeLesson';
import {
  ButtonChoseDate,
  DescrContainer,
  IconBtn,
  Wrapper,
} from './SelectDate.styled';
import { handleDateChange } from './GetDateFunction';
import ButtonLoader from 'ui/ButtonLoader/ButtonLoader';
import { selectOfficesOperetion } from 'redux/offices/officesSelector';
const { Option } = Select;

const SelectDate = ({
  pageName,
  setLessonDates,
  type,
  setType,
  dateCurrentLesson,
  teachers,
  teacher,
  setTeacher,
  onLessonsChange,
  offices,
}) => {
  const [day, setDay] = useState('1');
  const operetion = useSelector(selectOfficesOperetion);
  const handleChange = (date, dateString) => {
    handleDateChange(date, dateString, setLessonDates, day, type, pageName);
  };

  // useEffect(() => {
  //   if (type === 'Період' || type === 'Період та день тижня') {
  //     const startDate = dayjs(dateCurrentLesson[0]).toDate();
  //     const endDate = dayjs(
  //       dateCurrentLesson[dateCurrentLesson.length - 1]
  //     ).toDate();
  //     const dayOfWeek = parseInt(day);
  //     const dates = getDates(startDate, endDate, dayOfWeek, type);
  //     const date = dates?.map(date => date.valueOf());

  //     if (date?.length > 0) {
  //       const choesData = {
  //         offices: [office],
  //         dateCurrentLesson: date,
  //       };
  //       onLessonsChange(choesData);
  //       localStorageHelper.setData(pageName, date);
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [day, dateCurrentLesson]);

  const handleChosePeriod = () => {
    if (dateCurrentLesson && offices.length > 0) {
      const choesData = {
        offices,
        dateCurrentLesson: dateCurrentLesson,
      };
      onLessonsChange(choesData);
    }
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
      <PickerWithTypeLesson type={type} onChange={handleChange} />
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
        {operetion === 'choseLesson' || operetion === 'allLessons' ? (
          <ButtonLoader height="22" width="50" />
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

export default memo(SelectDate);
