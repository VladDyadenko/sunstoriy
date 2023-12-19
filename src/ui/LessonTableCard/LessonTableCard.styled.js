import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;
export const InfoColor = styled.div`
  width: 20%;
  height: 100%;
  /* background-color: #fff; */

  background-color: ${props => props['aria-current'] || '#fff'};
`;
export const InfoContainer = styled.div`
  width: 80%;
  padding: 5px;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;

  & p {
    margin-bottom: 3px;
  }
`;
