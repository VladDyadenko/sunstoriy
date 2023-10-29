import styled from 'styled-components';

export const TitlePriceLesson = styled.h3`
  min-width: 106px;
  text-align: center;
  font-family: 'RobotoSlab';
  font-size: 16px;
  font-weight: 500;
  text-align: start;
  color: var(--main-green);
`;

export const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const InputPrice = styled.input`
  border-radius: 8px;
  width: 80px;
  padding: 5px 15px;
  margin-right: 10px;
  outline: var(--main-green) 2px solid;
  border: none;
  font-family: 'RobotoSlab';
  font-weight: 500;
  text-align: center;
  color: var(--main-green);
  &:hover {
    outline: var(--main-green) 1px solid;
  }
  &:focus {
    outline: var(--main-green) 1px solid;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;
