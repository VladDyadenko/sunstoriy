import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 100%;
  padding: 5px 5px;
  border-radius: 8px;
  border: 2px solid var(--main-yellow);
  display: flex;
  align-items: center;
  justify-content: start;
`;
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

export const TimeItem = styled.p`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  width: 100%;
  padding: 5px;
  text-align: center;
`;
export const LessonsWrapper = styled.div`
  padding: 0 5px;
  flex: 1;
`;
export const AllTimesContainer = styled.ul`
  display: grid;
  grid-template-rows: repeat(13, 1fr);

  padding: 0 5px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const AllTimesItem = styled.li`
  height: 70px;
`;
export const CardInfo = styled.p`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  padding: 5px;
  text-align: center;
`;
export const OneTimeContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  padding: 0 5px;
  :not(:last-child) {
    margin-right: 5px;
  }
`;
export const OneTimeItem = styled.li`
  height: 70px;
  border: 2px solid var(--main-green);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
