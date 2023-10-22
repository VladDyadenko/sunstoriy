import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'antd';
import { AiOutlineDelete } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';

export const ChildrenCardWrapper = styled.div`
  position: relative;
  width: 250px;
  min-height: 300px;
  padding: 15px 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2),
    0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);
`;
export const IconChildDelete = styled(AiOutlineDelete)`
  width: 20px;
  height: 20px;
  fill: var(--header-main-color);
`;
export const ButtonChildDelete = styled(Button)`
  position: absolute;
  width: 30px;
  height: 30px;
  top: -10px;
  right: -10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background-color: #fa4a3b;
  cursor: pointer;

  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: #da292b;
  }
`;

export const ImedgeContainer = styled.div`
  border-radius: 50%;
  margin-bottom: 10px;
`;
export const ImedgeChild = styled.img`
  display: block;
  border-radius: 50%;
`;
export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  margin-bottom: 15px;
`;
export const TitleCard = styled.h4`
  text-align: center;
  color: var(--main-green);
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 18px;
`;

export const ButtonCard = styled(NavLink)`
  width: 70%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 16px;
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
`;
export const ButtonChildEdit = styled(NavLink)`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 30px;
  right: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 50%;
  background-color: var(--bg-main-color);
  cursor: pointer;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: var(--main-green);
    border: none;
  }
`;
export const IconChildEdit = styled(AiFillEdit)`
  width: 20px;
  height: 20px;
  fill: var(--header-main-color);
`;
export const ChildParence = styled.h4`
  text-align: center;
  color: var(--main-green);
  font-family: 'RobotoSlab';
  font-weight: 400;
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
