import styled from 'styled-components';

export const AllTimesContainer = styled.ul`
  display: grid;
  grid-template-rows: repeat(13, 1fr);

  padding: 0 5px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const DateIndicator = styled.div`
  height: 70px;
  width: 200px;
  padding: 5px;
  border: 2px solid var(--main-green);
  border-radius: 8px;
  text-align: center;
`;

export const AllTimesItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 70px;
  width: 200px;
  padding: 5px;
  border: 2px solid var(--main-green);
  border-radius: 8px;

  ${props => {
    const { activeColor } = props;
    switch (activeColor) {
      case '1':
        return `
    background-color: #86A633;
    color:#fff
  `;

      case '2':
        return `
    background-color: #00FFFF;
  `;

      case '3':
        return `
    background-color: #FF00FF;
  `;

      case '4':
        return `
    background-color: #00FF00;
  `;

      default:
        return `
    background-color: #FFF;
  `;
    }
  }}
`;
