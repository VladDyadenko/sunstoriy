import styled from 'styled-components';
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs';

export const PreviewFotoContainer = styled.div`
  width: 110px;
  height: 110px;
  background-color: #c0c0c0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;
export const UpdateFileButton = styled.button`
  border-radius: 4px;
  background-color: var(--main-dark-blue);
  color: var(--header-main-color);
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 5px 10px;
  font-family: 'RobotoSlab';
  font-weight: 400;
  font-size: 13px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
    border-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--main-green);
    border-color: var(--header-main-color);
  }
`;
export const FotoBlock = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const ChildImage = styled.img`
  display: block;
  border-radius: 4px;
`;
export const FotoIcon = styled(BsFillFileEarmarkPersonFill)`
  width: 30px;
  height: 30px;
  fill: #808080;
`;
