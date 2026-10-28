import styled from 'styled-components';

export const MainLeftContainer = styled.div`
  width: 100%;
  border: 2px solid var(--main-green);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 20px;

  @media screen and (min-width: 375.1px) {
    width: 100%;
    flex-direction: row;
  }
  @media screen and (min-width: 768.1px) {
    width: 250px;
    flex: 1;
    flex-direction: column;
  }
`;
