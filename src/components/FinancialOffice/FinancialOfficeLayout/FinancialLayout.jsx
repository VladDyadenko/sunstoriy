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
import { selectExpense } from 'redux/expense/expenceSelector';
import {
  selectZvitLoadinge,
  selectZvitSelectedPeriod,
} from 'redux/zvit/zvitSelector';
import ZvitReportTitle from 'ui/ZvitReportTitle/ZvitReportTitle';

const FinancialLayout = () => {
  const [indicatorsCurrentMonth, setIndicatorsCurrentMonth] = useState([]);
  const [loading, setLoading] = useState(true);
  const [typeZvit, setTypeZvit] = useState('');
  const [dateFromTitle, setDateFromTitle] = useState('');

  const expenseMarker = useSelector(selectExpense);
  const dataFromZvitPeriod = useSelector(selectZvitSelectedPeriod);
  const zvitIsLoading = useSelector(selectZvitLoadinge);

  const { totalData } = dataFromZvitPeriod;
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
        <FinancialButtonContainer
          setDateFromTitle={setDateFromTitle}
          setTypeZvit={setTypeZvit}
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
            Object.keys(totalData).length > 0 && (
              <ZvitContainer>
                <ZvitReportTitle title={`${dateFromTitle}`} />
                <ReportCurrentMonth
                  loading={zvitIsLoading}
                  indicatorsCurrentMonth={totalData}
                />
              </ZvitContainer>
            )}
        </ContantLineWrapper>
      </WrapperFinancialOffice>
    </Container>
  );
};

export default FinancialLayout;
