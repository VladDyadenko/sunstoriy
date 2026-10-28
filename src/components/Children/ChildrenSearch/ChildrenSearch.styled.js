import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsFillPersonPlusFill } from 'react-icons/bs';

export const SearchContainer = styled.div`
  margin: 15px auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 10px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const BtnAddIcon = styled(BsFillPersonPlusFill)`
  width: 20px;
  height: 20px;
  fill: #fff;
  margin-left: 10px;
`;
export const BtnAddChild = styled(NavLink)`
  width: 200px;
  margin: 0 auto;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 16px;
  border-radius: 8px;
  color: var(--header-main-color);
  background: var(--bg-main-color);
  border: 1px solid var(--bg-main-color);

  cursor: pointer;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: var(--main-green);
    color: var(--header-main-color);
    border: 1px solid transparent;
  }
`;
