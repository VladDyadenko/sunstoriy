import styled from 'styled-components';
import { Button } from 'antd';
import { TbRefresh } from 'react-icons/tb';

export const Title = styled.h3`
  width: 100%;
  font-family: 'RobotoSlab';
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  margin-bottom: 10px;
  padding: 7px 0;
  color: #fff;
  background-color: var(--blue-tint);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  position: relative;
`;
export const ButtonRefreshIcon = styled(TbRefresh)`
  width: 17px;
  height: 17px;
  stroke: var(--main-green);
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:hover {
    stroke: #fff;
  }
`;
export const ButtonRefreshZvit = styled(Button)`
  width: 26px;
  height: 26px;
  top: 4px;
  left: 10px;
  position: absolute;
  background: #fff;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:hover {
    background: var(--main-green) !important;

    ${ButtonRefreshIcon} {
      stroke: #fff;
    }
  }
`;
