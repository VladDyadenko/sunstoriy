import React from 'react';
import {
  ContantLineWrapper,
  WrapperFinancialOffice,
} from './FinancialLayout.styled';
import FinancialButtonContainer from '../FinancialButtonContainer/FinancialButtonContainer';
import Container from 'components/Container/Container';

const FinancialLayout = () => {
  return (
    <Container>
      <WrapperFinancialOffice>
        <FinancialButtonContainer />
        <ContantLineWrapper>Контент</ContantLineWrapper>
      </WrapperFinancialOffice>
    </Container>
  );
};

export default FinancialLayout;
