import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BtnNavStyl = styled(NavLink)`
  background-color: var(--main-dark-blue);
  color: var(--header-main-color);
  border-radius: 24px 44px;
  border: 1px solid transparent;
  padding: 12px 24px;
  margin: 6px;
  text-decoration: none;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
    border-color 0.3s ease-in-out;

  @media (min-width: 768px) {
    padding: 22px 44px;
    margin: 9px;
    font-size: 20px;
    line-height: 24px;
  }

  &:hover,
  &:focus {
    background-color: var(--main-green);
    border-color: var(--header-main-color);
  }
`;
