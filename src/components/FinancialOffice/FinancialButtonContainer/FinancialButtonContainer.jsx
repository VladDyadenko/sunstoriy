import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { Divider } from 'antd';
import { FaRegCalendarPlus } from 'react-icons/fa';

import 'dayjs/locale/uk'; // Імпортуємо українську локал

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
import { getSalarisByDate } from 'redux/salary/salaryOperetion';
import SalarisForm from 'components/SalarisForm/SalarisForm';
import { selectSalaryLoading } from 'redux/salary/salarySelector';
import { getExpensesByDate } from 'redux/expense/expenseOperetion';
import { selectExpenseLoading } from 'redux/expense/expenceSelector';
import ZvitButtonTitle from 'ui/ZvitButtonTitle/ZvitButtonTitle';
import RangePickerForm from 'ui/RangePickerForm/RangePickerForm';
import ButtonLoader from 'ui/ButtonLoader/ButtonLoader';
import { formatDateTitle } from 'utils/formatDateTitle';

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

  const salariesLoading = useSelector(selectSalaryLoading);
  const loading = useSelector(selectExpenseLoading);

  const [dateFromExpense, setDateFromExpense] = useState(
    new Date().toISOString().split('T')[0]
  );

  const [open, setOpen] = useState(false);
  const onCloseDrawerExpense = () => {
    setOpen(false);
  };

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
          <RangePickerForm
            setSelectedDateString={setSelectedDateString}
            setDateFromExpense={setDateFromExpense}
            setSelectedPeriod={setSelectedPeriod}
            setDayOrePariod={setDayOrePariod}
          />
          <ZvitButtonTitle title="Фінансові показники:" />
          <CommandLineButton
            onClick={() => createZvitForPeriod(selectedPeriod)}
          >
            <>
              {zvitIsLoading ? (
                <ButtonLoader height="21" width="50" />
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
              <ButtonLoader height="21" width="50" />
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
          <ZvitButtonTitle title="Зарплата фахівців:" />
          <CommandLineButton
            onClick={() => createSalaryZvitForPeriod(selectedPeriod)}
          >
            {salariesLoading ? (
              <ButtonLoader height="21" width="50" />
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
          <ZvitButtonTitle title="Звіт по дітям:" />
          <CommandLineButton
            onClick={() => createChildrensZvitForPeriod(selectedPeriod)}
          >
            {childrensLoading ? (
              <ButtonLoader height="21" width="50" />
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
          <ZvitButtonTitle title="Внесення розходів" />
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
