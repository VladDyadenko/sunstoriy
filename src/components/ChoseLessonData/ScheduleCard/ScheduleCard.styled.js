import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  min-width: 90px;
  padding: 5px;

  ${props => {
    const { 'aria-current': ariaCurrent } = props;
    return `
    border:2px solid ${ariaCurrent};
    border-radius:8px;
    color:${ariaCurrent};
   
  `;
  }}
`;
export const CardDescr = styled.p`
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 14px;
`;
export const CardDescrChild = styled.p`
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 14px;
  color: var(--main-text-black);
`;
export const CardLink = styled(NavLink)`
  width: 100%;
  height: 100%;
  display: block;
  cursor: pointer;

  transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: var(--main-blue);
  }
`;
