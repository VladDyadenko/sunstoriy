import React from 'react';
import {
  ContantLineWrapper,
  WrapperFinancialOffice,
} from './FinancialLayout.styled';
import Container from 'components/Container/Container';
import FinancialButtonContainer from '../FinancialButtonContainer/FinancialButtonContainer';

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
