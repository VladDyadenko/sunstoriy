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
} from './FinancialButtonContainer.styled';

import dayjs from 'dayjs';
import ExpenseContainer from 'components/Expense/ExpenseContainer';
import { useDispatch } from 'react-redux';
import { createZvitSelectedPeriod } from 'redux/zvit/zvitOperetion';
import ZvitReportTitle from 'ui/ZvitReportTitle/ZvitReportTitle';
const { RangePicker } = DatePicker;

const FinancialButtonContainer = ({ setDateFromTitle, setTypeZvit }) => {
  const dispatch = useDispatch();
  const today = dayjs();

  const [dayOrePariod, setDayOrePariod] = useState('oneDay');
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const [dateFromExpense, setDateFromExpense] = useState(
    new Date().toISOString().split('T')[0]
  );

  const [open, setOpen] = useState(false);
  const onCloseDrawerExpense = () => {
    setOpen(false);
  };

  function selectDay(dates, dateStrings) {
    if (!dates || dates.length === 0) return;
    setDateFromExpense(dateStrings[0]);

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
    setDateFromTitle(
      isOneDay
        ? `Обороти за ${dateStrings[0].split('-').reverse().join('-')}`
        : `Обороти з ${dateStrings[0]
            .split('-')
            .reverse()
            .join('-')} по ${dateStrings[1].split('-').reverse().join('-')}`
    );
  }

  const createZvitForPeriod = async period => {
    if (!period) return;
    setTypeZvit('report_for_period');

    try {
      await dispatch(createZvitSelectedPeriod(period));
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
          <ZvitReportTitle title="Фінансові показники:" />
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
          <CommandLineButton
            onClick={() => createZvitForPeriod(selectedPeriod)}
            disabled={dayOrePariod === 'period'}
          >
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
          <CommandLineButton
            onClick={() => createZvitForPeriod(selectedPeriod)}
            disabled={dayOrePariod === 'oneDay'}
          >
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
          <ZvitReportTitle title="Зарплата вчителів:" />
          <CommandLineButton disabled={dayOrePariod === 'period'}>
            {dayOrePariod === 'period' ? (
              <>
                День <FaRegCalendarPlus />
              </>
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
          <ZvitReportTitle title="Внесення розходів" />
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
            selectedPeriod={dateFromExpense}
          />
        </div>
      </CommandLineWrapper>
    </>
  );
};

export default FinancialButtonContainer;
