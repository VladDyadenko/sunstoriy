import styled from 'styled-components';
import { BsDownload } from 'react-icons/bs';

export const ChoseLessonsContainer = styled.div`
  width: 100%;
`;
export const BtnContainer = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px solid var(--main-yellow);
  border-radius: 8px;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const IconBtn = styled(BsDownload)`
  width: 15px;
  height: 15px;
  stroke: var(--main-dark-blue);
  margin-left: 8px;
  transition: stroke 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    stroke: var(--main-dark-blue);
  }
`;
export const ButtonSelectPeriod = styled.button`
  width: 100%;
  padding: 8px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  gap: 8px;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 14px;
  border-radius: 8px;
  color: var(--main-dark-blue);
  background: var(--header-main-color);
  border: 1px solid var(--main-dark-blue);

  cursor: pointer;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background: var(--main-dark-blue);
    color: var(--header-main-color);
    border: 1px solid transparent;
  }

  @media (min-width: 768px) {
    width: 35%;
  }
  @media (min-width: 1280px) {
    width: 20%;
  }
`;
