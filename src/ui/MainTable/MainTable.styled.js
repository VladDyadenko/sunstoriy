import styled from 'styled-components';

export const DayWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: row;
  gap: 10px;

  @media screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
  }
`;
export const LessonsWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  padding: 0 10px;
`;
export const MainTableContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 15px;
`;
export const DayDeafult = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  font-family: 'RobotoSlab';
  font-weight: 400;
  border-radius: 8px;
  height: 80px;
  /* width: 100%; */
  width: 300px;
  padding: 12px;
  margin-bottom: 10px;
  letter-spacing: 0.1rem;
  /* background-color: var(--main-blue);
  border: 2px solid var(--main-green); */
  color: var(--text-lessons-time);
  color: rgba(0, 0, 0, 0.45);
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
`;

export const DayDeafultInfo = styled.p`
  font-family: 'RobotoSlab';
  font-weight: 900;
  text-align: center;
  /* color: var(--main-green); */
  /* margin-bottom: 10px; */
`;
export const DayContainer = styled.div`
  width: 300px;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 10px;

  @media screen and (min-width: 376px) {
    margin-right: 10px;
  }
`;

export const LessonsContainer = styled.ul``;

export const LessonsItem = styled.li`
  font-family: 'RobotoSlab';
  font-weight: 400;
  cursor: pointer;
  height: 90px;
  width: 300px;
  flex-direction: column;
  border-radius: 8px;
  margin-bottom: 10px;
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;

export const CardInfo = styled.p`
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 14px;
  padding: 5px;
  text-align: center;
`;
export const OneTimeContainer = styled.ul`
  padding: 0 5px;
  :not(:last-child) {
    margin-right: 5px;
  }
`;
export const OneTimeItem = styled.li`
  height: 70px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
