import React, { useEffect, useState } from 'react';
import {
  ContantLineWrapper,
  WrapperFinancialOffice,
} from './FinancialLayout.styled';
import FinancialButtonContainer from '../FinancialButtonContainer/FinancialButtonContainer';
import Container from 'components/Container/Container';
import { getZvitOneMonthTotal } from 'redux/zvit/api';
import ReportCurrentMonth from '../PeriodReport/PeriodReport';
import { useSelector } from 'react-redux';
import { selectExpense } from 'redux/expense/expenceSelector';

const FinancialLayout = () => {
  const [indicatorsCurrentMonth, setIndicatorsCurrentMonth] = useState([]);
  // console.log('показники місяця', indicatorsCurrentMonth);

  const expenseMarker = useSelector(selectExpense);
  const [loading, setLoading] = useState(true);

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
        <FinancialButtonContainer />
        <ContantLineWrapper>
          <ReportCurrentMonth
            loading={loading}
            indicatorsCurrentMonth={indicatorsCurrentMonth}
          />
        </ContantLineWrapper>
      </WrapperFinancialOffice>
    </Container>
  );
};

export default FinancialLayout;
