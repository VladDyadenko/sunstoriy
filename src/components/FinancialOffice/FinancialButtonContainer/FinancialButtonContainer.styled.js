import { Button } from 'antd';
import styled from 'styled-components';
import { btnStyledAll } from 'styles/GlobalStyles';

export const CommandLineWrapper = styled.div`
  width: 100%;
  max-width: 20%;
  height: 100vh;
  /* border: 2px solid var(--main-green); */
  padding: 10px;
`;
export const SectionsContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const CommandLineButton = styled(Button)`
  ${btnStyledAll}
  background-color: var(--main-green);

  &:hover {
    background-color: var(--bg-main-color) !important;
  }

  &:disabled {
    background-color: var(--main-disabled);
    color: var(--header-main-color);
  }
  & span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  & svg {
    width: 18px;
    height: 18px;
  }
`;
