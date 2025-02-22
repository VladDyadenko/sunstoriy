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
  selectExpenseByDate,
  selectExpenseLoading,
} from 'redux/expense/expenceSelector';
import {
  selectZvitChildrens,
  selectZvitLoadinge,
  selectZvitLoadingeChildrens,
  selectZvitSelectedPeriod,
} from 'redux/zvit/zvitSelector';
import ZvitReportTitle from 'ui/ZvitReportTitle/ZvitReportTitle';
import TableExpensesZvit from 'components/Zvit/TableExpensesZvit/TableExpensesZvit';
import SalaryZvitTable from 'components/Zvit/Salary/SalaryZvitTable/SalaryZvitTable';
import {
  selectSalaryForPeriod,
  selectSalaryLoading,
} from 'redux/salary/salarySelector';
import ChildrensPeriodZvit from 'components/Zvit/ChildrensPeriodZvit/ChildrensPeriodZvit';

const FinancialLayout = () => {
  const [indicatorsCurrentMonth, setIndicatorsCurrentMonth] = useState([]);
  const [loading, setLoading] = useState(true);
  const [typeZvit, setTypeZvit] = useState('');
  const [dateFromTitle, setDateFromTitle] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const [selectedDateString, setSelectedDateString] = useState(null);
  const [dayOrePariod, setDayOrePariod] = useState('oneDay');

  const { totalData } = useSelector(selectZvitSelectedPeriod);
  const zvitIsLoading = useSelector(selectZvitLoadinge);

  const { expenses } = useSelector(selectExpenseByDate);
  const expensZvitLoading = useSelector(selectExpenseLoading);

  const salaris = useSelector(selectSalaryForPeriod);
  const salaryLoading = useSelector(selectSalaryLoading);

  const childrens = useSelector(selectZvitChildrens);
  const childrensLoading = useSelector(selectZvitLoadingeChildrens);
  const isLoad = zvitIsLoading || salaryLoading || childrensLoading;

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
  }, []);

  // Перевірка даних в totalData, що там є значення, не рівні 0
  function hasNonZeroValue(obj) {
    if (typeof obj === 'object' && obj !== null) {
      for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
          if (hasNonZeroValue(obj[key])) {
            return true;
          }
        }
      }
    } else if (obj !== 0) {
      return true;
    }
    return false;
  }
  const isTotalDate = hasNonZeroValue(totalData);

  return (
    <Container>
      <WrapperFinancialOffice>
        <FinancialButtonContainer
          setTypeZvit={setTypeZvit}
          dayOrePariod={dayOrePariod}
          setDayOrePariod={setDayOrePariod}
          setDateFromTitle={setDateFromTitle}
          zvitIsLoading={zvitIsLoading}
          selectedPeriod={selectedPeriod}
          setSelectedPeriod={setSelectedPeriod}
          selectedDateString={selectedDateString}
          setSelectedDateString={setSelectedDateString}
          childrensLoading={childrensLoading}
        />
        <ContantLineWrapper>
          <ZvitContainer>
            <ZvitReportTitle title="Поточні цифри місяця" />
            <ReportCurrentMonth
              loading={loading}
              indicatorsCurrentMonth={indicatorsCurrentMonth}
            />
          </ZvitContainer>
          {typeZvit === 'report_childrens' &&
          childrens &&
          childrens.length > 0 ? (
            <ZvitContainer>
              <ZvitReportTitle
                zvitName={`Інформація по дітям`}
                title={`${dateFromTitle}`}
              />
              <ChildrensPeriodZvit
                childrens={childrens}
                childrensLoading={childrensLoading}
              />
            </ZvitContainer>
          ) : typeZvit === '' ||
            typeZvit === 'report_expenses' ||
            typeZvit === 'report_salaries' ||
            typeZvit === 'report_period' ||
            isLoad ? null : (
            <>
              <ZvitReportTitle
                zvitName={`Інформація по дітям`}
                title={`${dateFromTitle}`}
              />
              <h4>Даних в обраному періоді немає</h4>
            </>
          )}

          {typeZvit === 'report_period' && totalData && isTotalDate ? (
            <ZvitContainer>
              <ZvitReportTitle
                zvitName={`Обороти`}
                title={`${dateFromTitle}`}
              />
              <ReportCurrentMonth
                loading={zvitIsLoading}
                indicatorsCurrentMonth={totalData}
              />
            </ZvitContainer>
          ) : typeZvit === '' ||
            typeZvit === 'report_expenses' ||
            typeZvit === 'report_salaries' ||
            typeZvit === 'report_childrens' ||
            isLoad ? null : (
            <>
              <ZvitReportTitle
                zvitName={`Обороти`}
                title={`${dateFromTitle}`}
              />
              <h4>Даних в обраному періоді немає</h4>
            </>
          )}
          {typeZvit === 'report_expenses' &&
          expenses &&
          expenses?.length > 0 ? (
            <ZvitContainer>
              <ZvitReportTitle
                zvitName={`Розходи`}
                title={`${dateFromTitle}`}
              />
              <TableExpensesZvit
                expensZvitLoading={expensZvitLoading}
                expenses={expenses}
              />
            </ZvitContainer>
          ) : typeZvit === '' ||
            typeZvit === 'report_period' ||
            typeZvit === 'report_salaries' ||
            typeZvit === 'report_childrens' ||
            isLoad ? null : (
            <>
              <ZvitReportTitle
                zvitName={`Розходи`}
                title={`${dateFromTitle}`}
              />
              <h4>Витрат в обраному періоді немає</h4>
            </>
          )}
          {typeZvit === 'report_salaries' && salaris && salaris?.length > 0 ? (
            <ZvitContainer>
              <ZvitReportTitle
                zvitName={`Зарплата`}
                title={`${dateFromTitle}`}
              />
              <SalaryZvitTable
                salaris={salaris}
                salaryLoading={salaryLoading}
              />
            </ZvitContainer>
          ) : typeZvit === '' ||
            typeZvit === 'report_period' ||
            typeZvit === 'report_expenses' ||
            typeZvit === 'report_childrens' ||
            isLoad ? null : (
            <>
              <ZvitReportTitle
                zvitName={`Зарплата`}
                title={`${dateFromTitle}`}
              />
              <h4>Зарплата в обраному періоді не нарахована</h4>
            </>
          )}
        </ContantLineWrapper>
      </WrapperFinancialOffice>
    </Container>
  );
};

export default FinancialLayout;
