import styled from 'styled-components';

export const DateTitle = styled.div`
  margin-bottom: 30px;
  padding-bottom: 20px;
  text-align: center;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid rgba(5, 5, 5, 0.06);
`;
export const DateDescription = styled.span`
  margin-left: 7px;
  font-size: 18px;
  color: var(--main-green);
`;
export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  padding-top: 20px;
  border-top: 1px solid rgba(5, 5, 5, 0.06);
`;
