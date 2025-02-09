import React, { useEffect, useState } from 'react';
import {
  ContantLineWrapper,
  WrapperFinancialOffice,
} from './FinancialLayout.styled';
import FinancialButtonContainer from '../FinancialButtonContainer/FinancialButtonContainer';
import Container from 'components/Container/Container';
import { getZvitOneMonthTotal } from 'redux/zvit/api';
import ReportCurrentMonth from '../PeriodReport/PeriodReport';

const FinancialLayout = () => {
  const [indicatorsCurrentMonth, setIndicatorsCurrentMonth] = useState([]);
  console.log('показники місяця', indicatorsCurrentMonth);

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
        const { totalData } = await getZvitOneMonthTotal(formattedDates);
        setIndicatorsCurrentMonth(totalData);
      } catch (error) {
        console.error('❌ Error fetching total profit:', error);
      }
    };
    fetchZvitOneMonthTotal();
  }, []);
  return (
    <Container>
      <WrapperFinancialOffice>
        <FinancialButtonContainer />
        <ContantLineWrapper>
          <ReportCurrentMonth indicatorsCurrentMonth={indicatorsCurrentMonth} />
        </ContantLineWrapper>
      </WrapperFinancialOffice>
    </Container>
  );
};

export default FinancialLayout;
