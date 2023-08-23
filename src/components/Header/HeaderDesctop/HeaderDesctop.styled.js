import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  max-width: 1440px;
  margin: 0 auto;
  background-image: linear-gradient(
    to bottom,
    hsl(198, 86%, 70%),
    hsl(120, 43%, 57%),
    hsl(100, 49%, 38%)
  );
`;

export const MainNavSite = styled.nav`
  display: none;
  @media screen and (min-width: 768.1px) {
    display: block;
  }
`;

export const HeaderSection = styled.section`
  width: var(--small-screen);
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: var(--medium-screen);
  }
  @media screen and (min-width: 1280px) {
    width: var(--large-screen);
  }
`;
export const HeaderLink = styled(Link)`
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 24px;
  letter-spacing: -0.02em;
  text-decoration: none;
  color: var(--header-main-color);
`;
export const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  :not(:last-child) {
    margin-right: 30px;
  }
`;
export const NavItem = styled.li`
  padding: 5px;
  border: 1px solid transparent;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:hover {
    border: 1px solid var(--main-yellow);
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
export const UserName = styled.p`
  padding: 5px;
  margin-left: 10px;
  color: #f0f0f0;
  cursor: pointer;
  border: 1px solid transparent;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:hover {
    border: 1px solid var(--main-yellow);
    color: var(--main-yellow);
  }
`;
