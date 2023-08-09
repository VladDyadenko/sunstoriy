import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaChildren } from 'react-icons/fa6';

export const LeftHeaderNavWrapper = styled.div`
  margin-top: 20px;
  padding: 30px 15px;
  background-color: var(--main-green);
  border-radius: 8px;
  border: 1px solid var(--main-yellow);
  flex: 1;
`;
export const LeftHeaderContainer = styled.div`
  width: 290px;
  border: 2px solid var(--main-green);
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  padding: 5px;
`;
export const LeftHeaderLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: -0.02em;
  text-decoration: none;
  color: var(--header-main-color);
`;
export const LeftHeadreNav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;
export const IconChildren = styled(FaChildren)`
  fill: var(--header-main-color);
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
export const LeftHeaderItem = styled.li`
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
  &:hover ${LeftHeaderLink} {
    color: var(--main-yellow);
  }
  &:hover ${IconChildren} {
    fill: var(--main-yellow);
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
        & ${LeftHeaderLink},${IconChildren} {
          color: var(--main-yellow);
        }
        & ${IconChildren} {
          fill: var(--main-yellow);
        }
      `;
    }
  }}
`;
