import styled from 'styled-components';

export const ContainerDataOffices = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--main-yellow);
  border-radius: 8px;
  gap: 20px;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
