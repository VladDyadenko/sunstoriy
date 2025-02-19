import React from 'react';
import { Title } from './ZvitReportTitle.styled';

const ZvitReportTitle = ({ title, zvitName }) => {
  return (
    <Title>
      {zvitName} {title}
    </Title>
  );
};

export default ZvitReportTitle;
