import { CommandLineButton } from 'components/FinancialOffice/FinancialButtonContainer/FinancialButtonContainer.styled';
import React from 'react';
import { BsClipboardPulse } from 'react-icons/bs';
import { FaRegCalendarPlus } from 'react-icons/fa';
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

    try {
      await dispatch(getExpensesByDate(period)).then(() =>
        setDateFromTitle(
          dayOrePariod === 'oneDay'
            ? `Розходи за ${selectedDateString[0]
                .split('-')
                .reverse()
                .join('-')}`
            : `Розходи з ${selectedDateString[0]
                .split('-')
                .reverse()
                .join('-')} по ${selectedDateString[1]
                .split('-')
                .reverse()
                .join('-')}`
        )
      );
    } catch (err) {
      console.error('❌ Error fetching expenses:', err);
    }
  };
  return (
    <>
      <CommandLineButton
        onClick={() => getExpensesBySelectedPeriod(selectedPeriod)}
        disabled={dayOrePariod === 'period'}
      >
        {dayOrePariod === 'period' ? (
          <>
            Розходи за день <FaRegCalendarPlus />
          </>
        ) : (
          <>
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
                Розходи за день <BsClipboardPulse />
              </>
            )}
          </>
        )}
      </CommandLineButton>
      <CommandLineButton
        onClick={() => getExpensesBySelectedPeriod(selectedPeriod)}
        disabled={dayOrePariod === 'oneDay'}
      >
        {dayOrePariod === 'period' ? (
          <>
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
          </>
        ) : (
          <>
            Розходи за період
            <FaRegCalendarPlus />
          </>
        )}
      </CommandLineButton>
    </>
  );
};

export default Expenses;
