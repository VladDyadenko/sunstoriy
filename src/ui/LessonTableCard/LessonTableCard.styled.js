import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  height: 100%;
`;
export const InfoColor = styled.div`
  width: 30%;
  height: 100%;
  gap: 8px;

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
export const InfoTeacher = styled.p`
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 12px;
  color: var(--main-dark-blue);
`;
export const InfoChild = styled.p`
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 12px;
  color: var(--main-green);
`;
