import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BtnAddLesson = styled(Link)`
  width: 90%;
  height: 50px;
`;
export const Wrapper = styled.div`
  width: 100%;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 10px 0;
`;

export const BtnTitle = styled.p`
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 20px;
  color: var(--main-dark-blue);
`;
