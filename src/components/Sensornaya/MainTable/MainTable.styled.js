import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 100%;
  padding: 5px 5px;
  border-radius: 8px;
  /* border: 2px solid var(--main-yellow); */
  display: flex;
  align-items: center;
  justify-content: start;
`;
export const LessonsWrapper = styled.div`
  display: flex;
  align-items: center;

  padding: 0 5px;
  flex: 1;
`;
export const DayDeafult = styled.div`
  height: 70px;
  width: 200px;
  padding: 10px 5px;
  text-align: center;
  border-radius: 8px;
  /* border: 2px solid transparent; */
  margin-bottom: 10px;
  background-color: var(--main-green);
  :not(:last-child) {
    margin-bottom: 5px;
  }
`;
export const DayDeafultInfo = styled.p`
  font-family: 'RobotoSlab';
  font-weight: 500;
  text-align: center;
  color: var(--header-main-color);
`;

export const LessonsContainer = styled.ul`
  padding: 0 5px;
`;
export const LessonsItem = styled.li`
  font-family: 'RobotoSlab';
  font-weight: 400;
  cursor: pointer;
  height: 70px;
  width: 200px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  /* border: 2px solid var(--main-green); */
  margin-bottom: 10px;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:hover {
    transform: scale(1.05);
  }

  ${props => {
    const { currentcolor } = props;

    switch (currentcolor) {
      case '1':
        return `
    background-color: var(--teacher-color-1);
    color:var(--header-main-color);
  `;

      case '2':
        return `
    background-color: var(--teacher-color-2);
     color:var(--header-main-color);   
  `;

      case '3':
        return `
    background-color: var(--teacher-color-3);
    color:var(--header-main-color);
    `;

      case '4':
        return `
    background-color: var(--teacher-color-4);
     color:var(--header-main-color);         
  `;

      default:
        return `
    background-color: var(--header-main-color);
  `;
    }
  }}
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
  /* border: 2px solid var(--main-green); */
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
