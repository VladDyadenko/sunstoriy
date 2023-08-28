import styled from 'styled-components';
const mainGreenColor = 'var(--main-green)';

export const PickerContainer = styled.div`
  font-family: 'RobotoSlab';
  font-weight: 300;
  background-color: var(--main-blue);
  border-radius: 8px;
  border: 1px solid var(--main-yellow);
`;
export const PickerFooter = styled.p`
  color: var(--main-green);
  font-family: 'RobotoSlab';
  font-weight: 400;
  font-size: 18px;
`;
export const DataPickerButton = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 5px 15px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--header-main-color);
  background-color: var(--main-green);
  border: 1px solid var(--main-green);
  font-family: 'RobotoSlab';
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: #68bf48;
  }
`;

export const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid transparent;
    color: ${mainGreenColor};
        background-color: #fff;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: ${mainGreenColor};
    color: ${mainGreenColor};
  }
  .my-today { 
    font-weight: bold;
    font-size: 120%; 
    color: red;
  }
  .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
    background-color: #fff;
}
.rdp {
    --rdp-cell-size: 44px;

  }
`;
