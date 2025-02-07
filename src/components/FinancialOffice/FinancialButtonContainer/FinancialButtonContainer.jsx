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
import { getZvitOneMonthTotal } from 'redux/zvit/api';
const { RangePicker } = DatePicker;

const FinancialButtonContainer = () => {
  const today = dayjs();

  const [dayOrePariod, setDayOrePariod] = useState('oneDay');
  const [selectedPeriod, setSelectedPeriod] = useState(null);

  const [open, setOpen] = useState(false);
  const onCloseDrawerExpense = () => {
    setOpen(false);
  };

  function selectDay(dates, dateStrings) {
    if (!dates || dates.length === 0) return;

    // Отримуємо дати у форматі JavaScript Date
    const startDate = new Date(dates[0].toDate());
    const endDate = new Date(dates[1].toDate());

    // Обнуляємо години для початку дня
    startDate.setUTCHours(0, 0, 0, 0);
    endDate.setUTCHours(23, 59, 59, 999);

    const isOneDay =
      startDate.getUTCFullYear() === endDate.getUTCFullYear() &&
      startDate.getUTCMonth() === endDate.getUTCMonth() &&
      startDate.getUTCDate() === endDate.getUTCDate();

    // Форматуємо для бекенду
    const formattedDates = {
      startDate: startDate.toISOString(), // 2025-02-01T00:00:00.000Z
      endDate: endDate.toISOString(), // 2025-02-08T23:59:59.999Z
    };
    setSelectedPeriod(formattedDates);

    setDayOrePariod(isOneDay ? 'oneDay' : 'period');
  }

  const fetchZvitOneMonthTotal = async period => {
    if (!period) return;

    try {
      const { totalData } = await getZvitOneMonthTotal(period);
      console.log('✅ totalProfit:', totalData);
    } catch (error) {
      console.error('❌ Error fetching total profit:', error);
    }
  };

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
          <CommandLineButton
            onClick={() => fetchZvitOneMonthTotal(selectedPeriod)}
            disabled={dayOrePariod === 'period'}
          >
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
          <CommandLineButton
            onClick={() => fetchZvitOneMonthTotal(selectedPeriod)}
            disabled={dayOrePariod === 'oneDay'}
          >
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
