import React from 'react';
import { TitleButton } from './ZvitButtonTitle.styled';

const ZvitButtonTitle = ({ title, zvitName }) => {
  return (
    <TitleButton>
      {zvitName} {title}
    </TitleButton>
  );
};

export default ZvitButtonTitle;
