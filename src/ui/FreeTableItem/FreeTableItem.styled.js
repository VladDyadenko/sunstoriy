import styled from 'styled-components';
import { BsPlusCircleDotted } from 'react-icons/bs';

export const Wrapper = styled.div`
  font-family: 'RobotoSlab';
  font-weight: 400;
  cursor: pointer;
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  /* border: 2px solid #a9a9a9;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:hover {
    transform: scale(1.05);
  } */
`;

export const IconFreeCard = styled(BsPlusCircleDotted)`
  width: 30px;
  height: 30px;
  fill: #a9a9a9;
`;
