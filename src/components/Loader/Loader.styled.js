import styled from 'styled-components';
import { CirclesWithBar } from 'react-loader-spinner';

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;
export const LoaderSpinner = styled(CirclesWithBar)`
  color: var(--main-green);
`;
