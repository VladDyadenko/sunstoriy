import styled from 'styled-components';
import { AiFillPlusCircle } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiTwotoneEdit } from 'react-icons/ai';
import { Button } from 'antd';

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 54px;
  position: relative;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const Image = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    width: 103px;
    height: 103px;
  }
`;

export const AddIconContainer = styled.label`
  display: flex;
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: -8px;
  left: 42px;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const InputPhoto = styled.input`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const Label = styled.label`
  position: relative;
  z-index: 999;
`;

export const UserIconContainer = styled.div`
  position: absolute;
  left: 14px;
  top: 0;
`;

export const Input = styled.input`
  width: 100%;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 18px;
  padding: 10px 40px 10px 40px;
  color: #2a2a2a;
  border: 1px solid #2a2a2a;
  border-radius: 8px;
  margin-bottom: 8px;
  background-color: transparent;
  opacity: 0.8;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    padding: 14px 40px 14px 40px;
    font-size: 18px;
  }
`;

export const EditIconContainer = styled.div`
  position: absolute;
  right: 14px;
  top: 0;
  stroke: var(--main-green);
`;

export const ModalSaveButton = styled.button`
  border-radius: 6px;
  font-family: 'RobotoSlab';
  font-weight: 400;
  border: none;
  background: var(--main-green);
  padding: 15px;
  cursor: pointer;
  width: 100%;
  color: var(--header-main-color);
`;
export const ModalLogOutButton = styled(Button)`
  margin-top: 40px;
  border-radius: 6px;
  height: 44px;
  border: none;
  background: var(--main-dark-blue);

  cursor: pointer;
  width: 100%;
  color: var(--header-main-color);
  font-family: 'RobotoSlab';
  font-weight: 500;

  & hover {
    color: var(--main-dark-blue);
    background: var(--header-main-color);
  }
`;

export const AddAvatarIcon = styled(AiFillPlusCircle)`
  position: absolute;
  width: 24px;
  height: 24px;
  fill: var(--main-green);
`;

export const UserNameIcon = styled(AiOutlineUser)`
  width: 18px;
  height: 18px;
  fill: var(--main-green);
`;
export const PanIcon = styled(AiTwotoneEdit)`
  width: 18px;
  height: 18px;
  fill: var(--main-green);
`;
