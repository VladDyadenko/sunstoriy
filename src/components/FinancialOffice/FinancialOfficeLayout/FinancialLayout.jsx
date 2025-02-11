import React, { useEffect, useState } from 'react';
import {
  ContantLineWrapper,
  WrapperFinancialOffice,
  ZvitContainer,
} from './FinancialLayout.styled';
import FinancialButtonContainer from '../FinancialButtonContainer/FinancialButtonContainer';
import Container from 'components/Container/Container';
import { getZvitOneMonthTotal } from 'redux/zvit/api';
import ReportCurrentMonth from '../PeriodReport/PeriodReport';
import { useSelector } from 'react-redux';
import {
  selectExpense,
  selectExpenseByDate,
  selectExpenseLoading,
  selectZvitStatusExpense,
} from 'redux/expense/expenceSelector';
import {
  selectZvitLoadinge,
  selectZvitSelectedPeriod,
  selectZvitStatus,
} from 'redux/zvit/zvitSelector';
import ZvitReportTitle from 'ui/ZvitReportTitle/ZvitReportTitle';
import TableExpensesZvit from 'components/Zvit/TableExpensesZvit/TableExpensesZvit';

const FinancialLayout = () => {
  const [indicatorsCurrentMonth, setIndicatorsCurrentMonth] = useState([]);
  const [loading, setLoading] = useState(true);
  const [typeZvit, setTypeZvit] = useState('');
  const [dateFromTitle, setDateFromTitle] = useState('');

  const expenseMarker = useSelector(selectExpense);
  const { totalData } = useSelector(selectZvitSelectedPeriod);
  const zvitIsLoading = useSelector(selectZvitLoadinge);
  const expensZvitLoading = useSelector(selectExpenseLoading);
  const { expenses } = useSelector(selectExpenseByDate);
  const statusZvitPeriod = useSelector(selectZvitStatus);
  const statusZvitExpense = useSelector(selectZvitStatusExpense);

  useEffect(() => {
    if (statusZvitPeriod) {
      setTypeZvit('report_for_period');
    }
    if (statusZvitExpense) {
      setTypeZvit('expenses_by_period');
    }
  }, [statusZvitExpense, statusZvitPeriod]);

  useEffect(() => {
    const fetchZvitOneMonthTotal = async () => {
      const now = new Date();

      const startDate = new Date(now.getFullYear(), now.getMonth(), 1);
      const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);

      const formattedDates = {
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
      };

      try {
        setLoading(true);
        setTypeZvit('');
        const { totalData } = await getZvitOneMonthTotal(formattedDates);
        setIndicatorsCurrentMonth(totalData);
      } catch (error) {
        console.error('❌ Error fetching total profit:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchZvitOneMonthTotal();
  }, [expenseMarker]);
  return (
    <Container>
      <WrapperFinancialOffice>
        <FinancialButtonContainer
          setDateFromTitle={setDateFromTitle}
          zvitIsLoading={zvitIsLoading}
        />
        <ContantLineWrapper>
          <ZvitContainer>
            <ZvitReportTitle title="Поточні цифри місяця" />
            <ReportCurrentMonth
              loading={loading}
              indicatorsCurrentMonth={indicatorsCurrentMonth}
            />
          </ZvitContainer>

          {typeZvit === 'report_for_period' &&
          totalData &&
          Object.keys(totalData).length > 0 ? (
            <ZvitContainer>
              <ZvitReportTitle title={`${dateFromTitle}`} />
              <ReportCurrentMonth
                loading={zvitIsLoading}
                indicatorsCurrentMonth={totalData}
              />
            </ZvitContainer>
          ) : typeZvit === '' ||
            typeZvit === 'expenses_by_period' ||
            (totalData && Object.keys(totalData).length === 0) ? null : (
            <>
              <ZvitReportTitle title={`${dateFromTitle}`} />
              <h4>Даних в обраному періоді немає</h4>
            </>
          )}
          {typeZvit === 'expenses_by_period' && expenses?.length > 0 ? (
            <ZvitContainer>
              <ZvitReportTitle title={`${dateFromTitle}`} />
              <TableExpensesZvit
                expensZvitLoading={expensZvitLoading}
                expenses={expenses}
              />
            </ZvitContainer>
          ) : typeZvit === '' || typeZvit === 'report_for_period' ? null : (
            <>
              <ZvitReportTitle title={`${dateFromTitle}`} />
              <h4>Витрат в обраному періоді немає</h4>
            </>
          )}
        </ContantLineWrapper>
      </WrapperFinancialOffice>
    </Container>
  );
};

export default FinancialLayout;
