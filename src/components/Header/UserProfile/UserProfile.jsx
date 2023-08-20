import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateNameThunk } from 'redux/auth/authOperetion';
import { selectAuthUser } from 'redux/auth/authSelector';
import {
  AddAvatarIcon,
  AddIconContainer,
  EditIconContainer,
  Image,
  ImageContainer,
  Input,
  InputPhoto,
  Label,
  ModalSaveButton,
  PanIcon,
  UserIconContainer,
  UserNameIcon,
} from './UserProfile.stiled';

function UserProfile() {
  const user = useSelector(selectAuthUser);

  const dispatch = useDispatch();
  const [state, setState] = useState(() => {
    return {
      name: user.name,
      avatar: user.avatarUrl,
    };
  });

  const handleInputChange = (name, value) => {
    setState(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileInputChange = e => {
    const file = e.target.files[0];
    handleInputChange('avatar', file);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmitEditUserProfileForm = async () => {
    dispatch(updateNameThunk(state));
  };
  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmitEditUserProfileForm();
        }}
      >
        <ImageContainer>
          <Image
            src={
              typeof state.avatar === 'string'
                ? state.avatar
                : URL.createObjectURL(state.avatar)
            }
            alt="User Avatar"
          />
          <AddIconContainer htmlFor="photo">
            <InputPhoto
              type="file"
              id="photo"
              accept="image/*"
              onChange={handleFileInputChange}
            />
            <AddAvatarIcon />
          </AddIconContainer>
        </ImageContainer>

        <Label htmlFor="name">
          <UserIconContainer>{<UserNameIcon />}</UserIconContainer>
          <Input
            type="text"
            name="name"
            id="name"
            value={state.name}
            onChange={handleChange}
          />
          <EditIconContainer>
            <PanIcon />
          </EditIconContainer>
        </Label>

        <ModalSaveButton type="submit">Зберегти зміни</ModalSaveButton>
      </form>
    </>
  );
}

export default UserProfile;
