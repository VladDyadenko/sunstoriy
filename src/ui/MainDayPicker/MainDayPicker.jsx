// import { format } from "date-fns";
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';
import { PickerContainer, PickerFooter } from './MainDayPicker.styled';
const mainGreenColor = 'var(--main-green)';

const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid transparent;
    color: ${mainGreenColor};
        background-color: #fff;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: ${mainGreenColor};
    color: ${mainGreenColor};
  }
  .my-today { 
    font-weight: bold;
    font-size: 120%; 
    color: red;
  }
  .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
    background-color: #fff;
}
.rdp {
    --rdp-cell-size: 30px;}
`;

export default function MainDayPicker() {
  const [range, setRange] = useState(null);

  let footer = <PickerFooter>Виберіть перший день</PickerFooter>;
  if (range?.from) {
    if (!range.to) {
      footer = <PickerFooter>{format(range.from, 'dd.MM.yyyy')}</PickerFooter>;
    } else if (range.to) {
      footer = (
        <PickerFooter>
          {format(range.from, 'dd.MM.yyyy')}– –{format(range.to, 'dd.MM.yyyy')}
        </PickerFooter>
      );
    }
  }
  return (
    <PickerContainer>
      <style>{css}</style>
      <DayPicker
        showOutsideDays
        fixedWeeks
        id="test"
        mode="range"
        selected={range}
        footer={footer}
        onSelect={setRange}
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
  );
}
