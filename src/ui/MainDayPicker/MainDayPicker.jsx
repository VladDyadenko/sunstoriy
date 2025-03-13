// import { format } from "date-fns";
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';
import {
  DataPickerButton,
  PickerContainer,
  PickerFooter,
  css,
} from './MainDayPicker.styled';
import { endOfCurrentWeek, startOfCurrentWeek } from './constantDayPicker';

export default function MainDayPicker({ onClose, setCurrentDate }) {
  const [range, setRange] = useState({
    from: startOfCurrentWeek.valueOf(),
    to: endOfCurrentWeek.valueOf(),
  });
  const defaultFooter = (
    <PickerFooter>
      {format(startOfCurrentWeek, 'dd.MM.yyyy')} –
      {format(endOfCurrentWeek, 'dd.MM.yyyy')}
    </PickerFooter>
  );

  let footer = defaultFooter;
  if (range?.from) {
    if (!range.to) {
      footer = <PickerFooter>{format(range.from, 'dd.MM.yyyy')}</PickerFooter>;
    } else if (range.to) {
      footer = (
        <PickerFooter>
          {format(range.from, 'dd.MM.yyyy')} – –{format(range.to, 'dd.MM.yyyy')}
        </PickerFooter>
      );
    }
  }
  const handleSelect = selectedRange => {
    if (selectedRange && selectedRange.from && selectedRange.to) {
      const newRange = {
        from: selectedRange.from.valueOf(),
        to: selectedRange.to.valueOf(),
      };
      setRange(newRange);
    }
  };
  const handleSelectDate = () => {
    setCurrentDate(footer);
    onClose();
  };
  return (
    <>
      <PickerContainer>
        <style>{css}</style>
        <DayPicker
          showOutsideDays
          fixedWeeks
          id="test"
          mode="range"
          selected={range}
          footer={footer}
          onSelect={handleSelect}
          locale={uk}
          modifiersClassNames={{
            selected: 'my-selected',
            today: 'my-today',
          }}
          styles={{
            caption: { color: ' var(--main-green' },
          }}
        />
      </PickerContainer>
      <DataPickerButton type="button" onClick={handleSelectDate}>
        Перейти до перегляду
      </DataPickerButton>
    </>
  );
}
