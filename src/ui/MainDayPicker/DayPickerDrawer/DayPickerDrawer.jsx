import { useState } from 'react';
import { format } from 'date-fns';
import MainDayPicker from '../MainDayPicker';
import {
  ButtonDrawer,
  ButtonIcon,
  DateDescr,
  DrawerLesson,
  LessonDrawerWrapper,
  RadioDrawer,
  SpaceDrawer,
} from './DayPickerDrawer.styled';
import { endOfCurrentWeek, startOfCurrentWeek } from '../constantDayPicker';
import { PickerFooter } from '../MainDayPicker.styled';

function DayPickerDrawer() {
  const [open, setOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(null);

  const defaultCurrentDate = (
    <PickerFooter>
      {format(startOfCurrentWeek, 'dd.MM.yyyy')} –
      {format(endOfCurrentWeek, 'dd.MM.yyyy')}
    </PickerFooter>
  );
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <LessonDrawerWrapper>
      <SpaceDrawer>
        <RadioDrawer value="right" />
        <ButtonDrawer type="primary" onClick={showDrawer}>
          <ButtonIcon />
          Виберіть дату або диапазон
        </ButtonDrawer>
        {currentDate === null ? (
          <DateDescr>{defaultCurrentDate}</DateDescr>
        ) : (
          <DateDescr>{currentDate}</DateDescr>
        )}
      </SpaceDrawer>
      <DrawerLesson
        title="Вибраний диапазон виведеться на екран"
        closable={false}
        onClose={onClose}
        open={open}
      >
        <MainDayPicker onClose={onClose} setCurrentDate={setCurrentDate} />
      </DrawerLesson>
    </LessonDrawerWrapper>
  );
}

export default DayPickerDrawer;
