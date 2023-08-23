import styled from 'styled-components';

export const TimeContainer = styled.ul`
  width: 50px;
  display: none;
  padding: 0 5px;
  margin-right: 10px;
  @media screen and (min-width: 768.1px) {
    display: block;
  }
`;
export const TableItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
  min-width: 50px;
  height: 80px;
  margin-bottom: 10px;

  background-color: var(--main-blue);
  color: var(--main-green);
  border: 2px solid var(--main-green);
`;
export const TableItemDefault = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background-color: var(--main-blue);
  border: 2px solid var(--main-green);
  height: 70px;
  min-width: 50px;
  margin-bottom: 10px;
`;
export const TimeItem = styled.p`
  font-family: 'RobotoSlab';
  font-weight: 900;
  font-size: 14px;
  width: 100%;
  padding: 5px;
`;
