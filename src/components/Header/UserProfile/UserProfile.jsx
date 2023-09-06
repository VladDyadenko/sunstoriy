import { Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk, updateNameThunk } from 'redux/auth/authOperetion';
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
  ModalLogOutButton,
  ModalSaveButton,
  PanIcon,
  UserIconContainer,
  UserNameIcon,
} from './UserProfile.stiled';

function UserProfile({ onClose }) {
  const user = useSelector(selectAuthUser);

  const dispatch = useDispatch();

  useEffect(() => {
    setState({
      name: user.name,
      avatar: user.avatarUrl,
    });
  }, [user]);

  const [state, setState] = useState({
    name: user.name,
    avatar: user.avatarUrl,
  });

  const avatarURL =
    typeof state.avatar === 'object' && 'blob' in state.avatar
      ? URL.createObjectURL(state.avatar)
      : state.avatar;

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
    dispatch(updateNameThunk(state)).then(res => {
      onClose();
      return;
    });
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
          <Image src={avatarURL} alt="User Avatar" />
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

      {/* <ModalLogOutButton type="button" onClick={() => dispatch(logoutThunk())}>
        Вийти з програми
      </ModalLogOutButton> */}
      <Popconfirm
        title="Вийти"
        description="Ви впевнені, що хочете вийти з програми?"
        icon={
          <QuestionCircleOutlined
            style={{
              color: 'red',
            }}
          />
        }
        onCancel={() => onClose()}
        onConfirm={() => dispatch(logoutThunk())}
      >
        <ModalLogOutButton primary="true">Вийти з програми</ModalLogOutButton>
      </Popconfirm>
    </>
  );
}

export default UserProfile;
