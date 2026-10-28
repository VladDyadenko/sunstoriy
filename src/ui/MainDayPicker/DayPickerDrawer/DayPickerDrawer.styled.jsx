import styled from 'styled-components';
import { Button, Drawer, Radio, Space } from 'antd';
import { BsCalendar2Check } from 'react-icons/bs';

export const RadioDrawer = styled(Radio)`
  display: none;
`;
export const LessonDrawerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  border-bottom: 1px solid var(--main-yellow);
`;

export const DateDescr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 240px;
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border: 1px solid var(--main-green);
  padding: 5px 20px;
  margin: 15px 0;
`;

export const ButtonDrawer = styled(Button)`
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (min-width: 768px) {
    margin-right: 15px;
  }
`;
export const ButtonIcon = styled(BsCalendar2Check)`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  fill: var(--main-yellow);
`;

export const SpaceDrawer = styled(Space)`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  .ant-btn {
    background-color: var(--bg-main-color);
    padding: 5px 20px;
    height: 50px;
    &:not(:disabled):not(.ant-btn-disabled):hover {
      background-color: var(--main-green);
    }
  }
  .ant-btn:hover {
    background-color: var(--main-green);
  }

  :where(.css-dev-only-do-not-override-17a39f8).ant-btn > span {
    font-family: 'RobotoSlab';
    font-weight: 400;
    font-size: 18px;
  }
`;

export const DrawerLesson = styled(Drawer)`
  .ant-drawer-title {
    color: var(--main-green);
  }
  :where(.css-dev-only-do-not-override-17a39f8).ant-drawer-right
    > .ant-drawer-content-wrapper {
    inset: 20% 0 0 65%;
  }
`;
