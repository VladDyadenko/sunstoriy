import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { DatePicker } from 'antd';
import { FaRegCalendarPlus } from 'react-icons/fa';
import dayjs from 'dayjs';
import 'dayjs/locale/uk'; // Імпортуємо українську локаль
import locale from 'antd/es/date-picker/locale/uk_UA';

import { BsClipboardPulse, BsEmojiHeartEyes } from 'react-icons/bs';

import {
  CommandLineButton,
  CommandLineWrapper,
} from './FinancialButtonContainer.styled';

import ExpenseContainer from 'components/Expense/ExpenseContainer';
import { createZvitSelectedPeriod } from 'redux/zvit/zvitOperetion';
import ZvitReportTitle from 'ui/ZvitReportTitle/ZvitReportTitle';
import { CirclesWithBar } from 'react-loader-spinner';
import Expenses from 'components/Zvit/Expenses/Expenses';
import { funFormattedDate } from 'assets/constants/transformation';
import { formatDateTitle } from 'assets/constants/reusableFunctions';
import { getSalarisByDate } from 'redux/salary/salaryOperetion';
import SalarisForm from 'components/SalarisForm/SalarisForm';
const { RangePicker } = DatePicker;

const FinancialButtonContainer = ({
  dayOrePariod,
  setDayOrePariod,
  setDateFromTitle,
  zvitIsLoading,
  selectedPeriod,
  setSelectedPeriod,
  selectedDateString,
  setSelectedDateString,
}) => {
  const dispatch = useDispatch();
  const today = dayjs();

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
    setSelectedDateString(dateStrings);

    const { formattedDates, isOneDay } = funFormattedDate(dates);

    setSelectedPeriod(formattedDates);

    setDayOrePariod(isOneDay ? 'oneDay' : 'period');
  }

  const createZvitForPeriod = async period => {
    if (!period) return;

    await dispatch(createZvitSelectedPeriod(period)).then(() =>
      setDateFromTitle(formatDateTitle(dayOrePariod, selectedDateString))
    );
  };
  const createSalaryZvitForPeriod = async period => {
    if (!period) return;

    await dispatch(getSalarisByDate(period)).then(() =>
      setDateFromTitle(formatDateTitle(dayOrePariod, selectedDateString))
    );
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
          <RangePicker
            defaultValue={[today, today]}
            onChange={selectDay}
            locale={locale}
            style={{ marginBottom: 20 }}
          />
          <ZvitReportTitle title="Фінансові показники:" />
          <CommandLineButton
            onClick={() => createZvitForPeriod(selectedPeriod)}
          >
            <>
              {zvitIsLoading ? (
                <CirclesWithBar
                  height="21"
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
                  Обіг коштів за період <BsClipboardPulse />
                </>
              )}
            </>
          </CommandLineButton>
          <Expenses
            selectedPeriod={selectedPeriod}
            dayOrePariod={dayOrePariod}
            selectedDateString={selectedDateString}
            setDateFromTitle={setDateFromTitle}
          />
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
          <CommandLineButton
            onClick={() => createSalaryZvitForPeriod(selectedPeriod)}
          >
            <>
              За вибраний період <BsEmojiHeartEyes />
            </>
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
            <>
              Виберіть день <FaRegCalendarPlus />
            </>
          </CommandLineButton>
          {/* <CommandLineButton
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
          </CommandLineButton> */}
          <ExpenseContainer
            onCloseDrawerExpense={onCloseDrawerExpense}
            open={open}
            setOpen={setOpen}
            selectedPeriod={dateFromExpense}
          />
          <SalarisForm selectedPeriod={dateFromExpense} />
        </div>
      </CommandLineWrapper>
    </>
  );
};

export default FinancialButtonContainer;
