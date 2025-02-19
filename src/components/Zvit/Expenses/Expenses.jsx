import { formatDateTitle } from 'assets/constants/reusableFunctions';
import { CommandLineButton } from 'components/FinancialOffice/FinancialButtonContainer/FinancialButtonContainer.styled';
import React from 'react';
import { BsClipboardPulse } from 'react-icons/bs';
import { CirclesWithBar } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { selectExpenseLoading } from 'redux/expense/expenceSelector';
import { getExpensesByDate } from 'redux/expense/expenseOperetion';

const Expenses = ({
  dayOrePariod,
  selectedPeriod,
  selectedDateString,
  setDateFromTitle,
}) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectExpenseLoading);

  const getExpensesBySelectedPeriod = async period => {
    if (!period) return;

    await dispatch(getExpensesByDate(period)).then(() =>
      setDateFromTitle(formatDateTitle(dayOrePariod, selectedDateString))
    );
  };
  return (
    <>
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
    </>
  );
};

export default Expenses;
