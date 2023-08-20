import React, { useState } from 'react';
import { DrawerButton, DrawerMain } from './Drawer.styled';
import UserProfile from '../UserProfile/UserProfile';
const DrawerSite = ({ userName }) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <DrawerButton type="primary" onClick={showDrawer}>
        {userName}
      </DrawerButton>
      <DrawerMain
        title="Редагувати профіль"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <UserProfile />
      </DrawerMain>
    </>
  );
};
export default DrawerSite;
