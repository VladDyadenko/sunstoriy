import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { Collapse } from 'antd';
import { CirclesWithBar } from 'react-loader-spinner';
import {
  selectChoseLessons,
  selectLessonOperetion,
} from 'redux/Lesson/lessonSelector';
import { choseLessonGraph } from 'redux/Lesson/lessonOperetion';
import {
  BtnContainer,
  ButtonSelectPeriod,
  ChoseLessonsContainer,
  IconBtn,
} from './ChoseLessonContainer.styled';
import OfficeScheduleOnDay from '../OfficeScheduleOnDay/OfficeScheduleOnDay';
import ChooseDataLessons from '../ChooseDataLessons/ChooseDataLessons';

const ChoseLessonContainer = ({ dateCurrentLesson, offices, setOffices }) => {
  const [lessons, setLessons] = useState([]);
  const [lessonDates, setLessonDates] = useState([]);
  const choseLessons = useSelector(selectChoseLessons);
  const operetion = useSelector(selectLessonOperetion);

  const dispatch = useDispatch();

  useEffect(() => {
    if (choseLessons?.length > 0) {
      const flattenedLessons = choseLessons.flat();
      setLessons(flattenedLessons);
      const uniqueDates = [
        ...new Set(flattenedLessons.map(lesson => lesson.dateLesson)),
      ];

      setLessonDates(uniqueDates);
    } else setLessonDates(null);
  }, [choseLessons]);

  const items = lessonDates?.map(date => {
    return {
      key: date,
      label: <span>{dayjs(date).format('DD-MM-YYYY')}</span>,
      children: <OfficeScheduleOnDay lessons={lessons} date={date} />,
    };
  });

  const handleChosePeriod = e => {
    const data = { offices, dateCurrentLesson };
    dispatch(choseLessonGraph(data));
  };

  return (
    <ChoseLessonsContainer>
      <BtnContainer>
        <ChooseDataLessons setOffices={setOffices} />
        <ButtonSelectPeriod type="button" onClick={handleChosePeriod}>
          {operetion === 'choseLesson' ? (
            <CirclesWithBar
              height="16"
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
              Переглянути розклад
              <IconBtn />
            </>
          )}
        </ButtonSelectPeriod>
      </BtnContainer>
      <Collapse style={{ overflow: 'auto' }} items={items} />
    </ChoseLessonsContainer>
  );
};

export default ChoseLessonContainer;
