import styled from 'styled-components';

export const TimeContainer = styled.ul`
  width: 50px;
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
  /* border: 2px solid transparent; */
  height: 70px;
  margin-bottom: 10px;
  background-color: var(--main-green);
  color: var(--header-main-color);
`;
export const TableItemDefault = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background-color: var(--main-green);
  /* border: 2px solid transparent; */
  height: 70px;
  margin-bottom: 10px;
`;
export const TimeItem = styled.p`
  font-family: 'RobotoSlab';
  font-weight: 600;
  font-size: 14px;
  width: 100%;
  padding: 5px;
  text-align: center;
`;
