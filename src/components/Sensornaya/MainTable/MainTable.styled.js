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
  border: 2px solid var(--main-green);
  margin-bottom: 10px;
`;
export const DayDeafultInfo = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  text-align: center;
`;

export const LessonsContainer = styled.ul`
  padding: 0 5px;
`;
export const LessonsItem = styled.li`
  height: 70px;
  width: 200px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  border: 2px solid var(--main-green);
  margin-bottom: 10px;

  ${props => {
    const { currentcolor } = props;

    switch (currentcolor) {
      case '1':
        return `
    background-color: #86A633;
    border: 2px solid #86A633;
    color:#fff
  `;

      case '2':
        return `
    background-color: #00FFFF;
    border: 2px solid #00FFFF;
  `;

      case '3':
        return `
    background-color: #FF00FF;
     border: 2px solid #FF00FF;
      color:#fff
  `;

      case '4':
        return `
    background-color: #00FF00;
     border: 2px solid #00FF00;
     
  `;

      default:
        return `
    background-color: #FFF;
    border: 2px solid #FFF;
  `;
    }
  }}
`;
export const CardInfo = styled.p`
  font-family: 'Poppins', sans-serif;
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
  border: 2px solid var(--main-green);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
