import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const LogoLink = styled(Link)`
  margin-right: 8px;
  display: none;
  @media screen and (min-width: 900px) {
    display: flex;
  }
`;

export const LogoLinkMobil = styled(Link)`
  margin-right: 16px;
  display: flex;
  flex-grow: 1;
  @media screen and (min-width: 900px) {
    display: none;
  }
`;
export const HeaderLink = styled(NavLink)`
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 20px;
  letter-spacing: -0.02em;
  text-decoration: none;
  padding: 5px;
  color: var(--main-dark-blue-bg);

  ${props => {
    const { active } = props;
    if (active === 'active') {
      return `
        border: 1px solid var(--main-yellow);
         color: var(--main-dark-blue-bg);
      `;
    }
  }}
`;
export const HeaderLinkDesctop = styled(NavLink)`
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 20px;
  letter-spacing: -0.02em;
  text-decoration: none;
  color: var(--header-main-color);
`;
export const MainNavSite = styled.nav`
  flex-grow: 1;
  display: none;
  @media screen and (min-width: 900px) {
    display: flex;
  }
`;
export const MainNavSiteMobile = styled.nav`
  display: flex;
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-left: 30px;
  :not(:last-child) {
    margin-right: 24px;
  }
`;
export const HeaderListMobile = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
  margin-left: 30px;
  :not(:last-child) {
    margin-right: 24px;
  }
`;
export const NavItem = styled.li`
  padding: 5px;
  border: 1px solid transparent;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:hover {
    border: 1px solid var(--main-yellow);
  }
  &:hover ${HeaderLinkDesctop} {
    color: var(--main-yellow);
  }
  &:hover ${HeaderLink} {
    color: var(--main-yellow);
  }
  ${props => {
    const { active } = props.children.props.active;
    if (active === 'active') {
      return `
        border: 1px solid var(--main-yellow);
      `;
    }
  }}

  ${props => {
    const { active } = props.children.props;
    if (active === 'active') {
      return `
        & ${HeaderLinkDesctop} {
          color: var(--main-yellow);
        }
      `;
    }
  }}
  ${props => {
    const { active } = props.children.props;
    if (active === 'active') {
      return `
        & ${HeaderLink} {
          color: var(--main-yellow);
        }
      `;
    }
  }}
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
