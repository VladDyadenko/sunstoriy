import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterNavWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 10px 15px;
  background-color: var(--main-green);
  border-radius: 8px;
  border: 1px solid var(--main-yellow);
  flex: 1;
`;

export const FooterNav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
`;
export const FooterLink = styled(Link)`
  font-family: 'RobotoSlab';
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.02em;
  text-decoration: none;
  color: var(--header-main-color);
`;
export const FooterItem = styled.li`
  padding: 5px;
  min-width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:hover {
    border: 1px solid var(--main-yellow);
  }
  &:hover ${FooterLink} {
    color: var(--main-yellow);
  }
  ${props => {
    const { active } = props.children.props;
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
        & ${FooterLink} {
          color: var(--main-yellow);
        }
            `;
    }
  }}
`;
