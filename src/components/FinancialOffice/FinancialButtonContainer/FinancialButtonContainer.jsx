import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { DatePicker, Divider } from 'antd';
import { FaRegCalendarPlus } from 'react-icons/fa';
import dayjs from 'dayjs';
import 'dayjs/locale/uk'; // Імпортуємо українську локаль
import locale from 'antd/es/date-picker/locale/uk_UA';

import { BsClipboardPulse, BsEmojiHeartEyes } from 'react-icons/bs';

import {
  CommandLineButton,
  CommandLineWrapper,
  SectionsContainer,
} from './FinancialButtonContainer.styled';

import ExpenseContainer from 'components/Expense/ExpenseContainer';
import {
  createZvitSelectedPeriod,
  getZvitChildrensPeriod,
} from 'redux/zvit/zvitOperetion';
import ZvitReportTitle from 'ui/ZvitReportTitle/ZvitReportTitle';
import { CirclesWithBar } from 'react-loader-spinner';
import { funFormattedDate } from 'assets/constants/transformation';
import { formatDateTitle } from 'assets/constants/reusableFunctions';
import { getSalarisByDate } from 'redux/salary/salaryOperetion';
import SalarisForm from 'components/SalarisForm/SalarisForm';
import { selectSalaryLoading } from 'redux/salary/salarySelector';
import { getExpensesByDate } from 'redux/expense/expenseOperetion';
import { selectExpenseLoading } from 'redux/expense/expenceSelector';
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
  setTypeZvit,
  childrensLoading,
}) => {
  const dispatch = useDispatch();
  const today = dayjs();

  const salariesLoading = useSelector(selectSalaryLoading);
  const loading = useSelector(selectExpenseLoading);

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
    setTypeZvit('report_period');
    await dispatch(createZvitSelectedPeriod(period)).then(() =>
      setDateFromTitle(formatDateTitle(dayOrePariod, selectedDateString))
    );
  };
  const getExpensesBySelectedPeriod = async period => {
    if (!period) return;
    setTypeZvit('report_expenses');

    await dispatch(getExpensesByDate(period)).then(() =>
      setDateFromTitle(formatDateTitle(dayOrePariod, selectedDateString))
    );
  };
  const createSalaryZvitForPeriod = async period => {
    if (!period) return;
    setTypeZvit('report_salaries');

    await dispatch(getSalarisByDate(period)).then(() =>
      setDateFromTitle(formatDateTitle(dayOrePariod, selectedDateString))
    );
  };
  const createChildrensZvitForPeriod = async period => {
    if (!period) return;
    setTypeZvit('report_childrens');

    await dispatch(getZvitChildrensPeriod(period)).then(() =>
      setDateFromTitle(formatDateTitle(dayOrePariod, selectedDateString))
    );
  };

  return (
    <>
      <CommandLineWrapper>
        <SectionsContainer>
          <RangePicker
            defaultValue={[today, today]}
            onChange={selectDay}
            locale={locale}
            style={{ marginBottom: 20, borderColor: '#fce010' }}
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
          <CommandLineButton
            onClick={() => getExpensesBySelectedPeriod(selectedPeriod)}
          >
            {loading ? (
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
                Розходи за період <BsClipboardPulse />
              </>
            )}
          </CommandLineButton>
        </SectionsContainer>
        <Divider
          style={{ borderWidth: 1, borderColor: '#fce010' }}
          variant="solid"
        />
        <SectionsContainer>
          <ZvitReportTitle title="Зарплата вчителів:" />
          <CommandLineButton
            onClick={() => createSalaryZvitForPeriod(selectedPeriod)}
          >
            {salariesLoading ? (
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
                За вибраний період <BsEmojiHeartEyes />
              </>
            )}
          </CommandLineButton>
        </SectionsContainer>
        <SectionsContainer>
          <ZvitReportTitle title="Звіт по дітям:" />
          <CommandLineButton
            onClick={() => createChildrensZvitForPeriod(selectedPeriod)}
          >
            {childrensLoading ? (
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
                За вибраний період <BsEmojiHeartEyes />
              </>
            )}
          </CommandLineButton>
        </SectionsContainer>
        <Divider
          style={{ borderWidth: 1, borderColor: '#fce010' }}
          variant="solid"
        />
        <SectionsContainer>
          <ZvitReportTitle title="Внесення розходів" />
          <CommandLineButton
            onClick={() => setOpen(true)}
            disabled={dayOrePariod === 'period'}
          >
            <>
              Виберіть день <FaRegCalendarPlus />
            </>
          </CommandLineButton>
          <ExpenseContainer
            onCloseDrawerExpense={onCloseDrawerExpense}
            open={open}
            setOpen={setOpen}
            selectedPeriod={dateFromExpense}
          />
          <SalarisForm selectedPeriod={dateFromExpense} />
        </SectionsContainer>
      </CommandLineWrapper>
    </>
  );
};

export default FinancialButtonContainer;
