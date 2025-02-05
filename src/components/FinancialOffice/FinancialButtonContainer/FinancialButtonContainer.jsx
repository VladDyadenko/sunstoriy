import React, { useState } from 'react';
import { DatePicker } from 'antd';
import { FaRegCalendarPlus } from 'react-icons/fa';

import {
  BsBarChartLine,
  BsClipboardPulse,
  BsEmojiHeartEyes,
  BsEmojiFrown,
} from 'react-icons/bs';

import {
  CommandLineButton,
  CommandLineWrapper,
  FinancialCommandTitle,
} from './FinancialButtonContainer.styled';

import dayjs from 'dayjs';
import ExpenseContainer from 'components/Expense/ExpenseContainer';
const { RangePicker } = DatePicker;

const FinancialButtonContainer = () => {
  const today = dayjs();

  const [dayOrePariod, setDayOrePariod] = useState('oneDay');

  const [open, setOpen] = useState(false);
  const onCloseDrawerExpense = () => {
    setOpen(false);
  };

  function selectDay(date, dateString) {
    const currentChoice = new Set(dateString);

    currentChoice?.size === 1
      ? setDayOrePariod('oneDay')
      : setDayOrePariod('period');
  }

  return (
    <>
      <CommandLineWrapper>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <FinancialCommandTitle>Фінансові показники:</FinancialCommandTitle>
          <RangePicker defaultValue={[today, today]} onChange={selectDay} />
          <CommandLineButton disabled={dayOrePariod === 'period'}>
            {dayOrePariod === 'period' ? (
              <>
                Доходи за день <FaRegCalendarPlus />
              </>
            ) : (
              <>
                Доходи за день <BsBarChartLine />
              </>
            )}
          </CommandLineButton>
          <CommandLineButton disabled={dayOrePariod === 'period'}>
            {dayOrePariod === 'period' ? (
              <>
                Звіт за день <FaRegCalendarPlus />
              </>
            ) : (
              <>
                Звіт за день <BsClipboardPulse />
              </>
            )}
          </CommandLineButton>
          <CommandLineButton disabled={dayOrePariod === 'oneDay'}>
            {dayOrePariod === 'period' ? (
              <>
                Доходи за період <BsBarChartLine />
              </>
            ) : (
              <>
                Доходи за період <FaRegCalendarPlus />
              </>
            )}
          </CommandLineButton>
          <CommandLineButton disabled={dayOrePariod === 'oneDay'}>
            {dayOrePariod === 'period' ? (
              <>
                Звіт за період <BsClipboardPulse />
              </>
            ) : (
              <>
                Звіт за період
                <FaRegCalendarPlus />
              </>
            )}
          </CommandLineButton>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,
            marginTop: 35,
          }}
        >
          <FinancialCommandTitle>Зарплата вчителів:</FinancialCommandTitle>
          <CommandLineButton disabled={dayOrePariod === 'period'}>
            {dayOrePariod === 'period' ? (
              <FaRegCalendarPlus />
            ) : (
              <>
                День <BsEmojiHeartEyes />
              </>
            )}
          </CommandLineButton>
          <CommandLineButton disabled={dayOrePariod === 'oneDay'}>
            {dayOrePariod === 'period' ? (
              <>
                Період <BsEmojiHeartEyes />
              </>
            ) : (
              <>
                Період <FaRegCalendarPlus />
              </>
            )}
          </CommandLineButton>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,
            marginTop: 35,
          }}
        >
          <FinancialCommandTitle>Інші платежи:</FinancialCommandTitle>
          <CommandLineButton
            onClick={() => setOpen(true)}
            disabled={dayOrePariod === 'period'}
          >
            {dayOrePariod === 'period' ? (
              <>
                Виберіть день <FaRegCalendarPlus />
              </>
            ) : (
              <>
                Додай витрати <BsEmojiFrown />
              </>
            )}
          </CommandLineButton>
          <CommandLineButton
            htmlType="button"
            disabled={dayOrePariod === 'period'}
          >
            {dayOrePariod === 'period' ? (
              <>
                Виберіть день <FaRegCalendarPlus />
              </>
            ) : (
              <>
                Внеси дохід <BsEmojiHeartEyes />
              </>
            )}
          </CommandLineButton>
          <ExpenseContainer
            onCloseDrawerExpense={onCloseDrawerExpense}
            open={open}
          />
        </div>
      </CommandLineWrapper>
    </>
  );
};

export default FinancialButtonContainer;
