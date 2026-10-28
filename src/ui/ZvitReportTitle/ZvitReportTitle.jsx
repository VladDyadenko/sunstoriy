import React from 'react';
import {
  ButtonRefreshIcon,
  ButtonRefreshZvit,
  Title,
} from './ZvitReportTitle.styled';
import { formatDateCurrentMonth } from 'utils/formatDateCurrentMonth';
import { getZvitOneMonthTotal } from 'redux/zvit/api';

const ZvitReportTitle = ({ title, zvitName, setIndicatorsCurrentMonth }) => {
  const hendleRefreshZvit = async () => {
    const currentMonth = formatDateCurrentMonth();
    const { totalData } = await getZvitOneMonthTotal(currentMonth);
    setIndicatorsCurrentMonth(totalData);
  };
  return (
    <>
      <Title>
        {zvitName} {title}
        {title === 'Поточні цифри місяця' && (
          <ButtonRefreshZvit
            type="primary"
            shape="circle"
            icon={<ButtonRefreshIcon />}
            onClick={hendleRefreshZvit}
          />
        )}
      </Title>
    </>
  );
};

export default ZvitReportTitle;
