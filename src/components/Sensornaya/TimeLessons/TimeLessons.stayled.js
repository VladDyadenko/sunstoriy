import styled from 'styled-components';

export const TimeContainer = styled.ul`
  width: 110px;
  display: grid;
  grid-template-rows: repeat(13, 1fr);
  padding: 0 5px;
  margin-right: 5px;
`;
export const TableItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  border: 2px solid var(--main-green);
  height: 70px;
  margin-bottom: 10px;
`;
export const TableItemDefault = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  border: 2px solid var(--main-green);
  height: 70px;
  margin-bottom: 10px;
`;
export const TimeItem = styled.p`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  width: 100%;
  padding: 5px;
  text-align: center;
`;
