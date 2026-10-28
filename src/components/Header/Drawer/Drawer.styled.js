import { Button, Drawer } from 'antd';
import styled from 'styled-components';

export const DrawerButton = styled(Button)`
  background-color: #fff;
  color: var(--main-green);
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 14px;
`;
export const DrawerMain = styled(Drawer)`
  .ant-drawer-title {
    color: var(--main-green);
    font-family: 'RobotoSlab';
    font-weight: 500;
    font-size: 18px;
  }
`;
