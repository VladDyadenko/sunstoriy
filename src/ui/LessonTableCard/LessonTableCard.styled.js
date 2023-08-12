import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;
export const InfoColor = styled.div`
  width: 20%;
  height: 100%;
  background-color: #fff;

  ${props => {
    const { 'aria-current': ariaCurrent } = props;

    switch (ariaCurrent) {
      case '1':
        return `
    background-color: var(--teacher-color-1);
   
  `;

      case '2':
        return `
    background-color: var(--teacher-color-2);
   
  `;

      case '3':
        return `
    background-color: var(--teacher-color-3);
   
    `;

      case '4':
        return `
    background-color: var(--teacher-color-4);
              
  `;

      default:
        return `
    background-color: var(--header-main-color);
  `;
    }
  }}
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
