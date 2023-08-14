import React from 'react';
import { useParams } from 'react-router-dom';

import { Container, ImgWrapper, Section } from './AuthPage.styled';
import AuthForm from 'components/Auth/AuthForm/AuthForm';

const AuthPage = () => {
  const { id } = useParams();

  return (
    <main>
      <Section>
        <Container>
          <ImgWrapper />
          <AuthForm isRegistration={id !== 'signin'} />
        </Container>
      </Section>
    </main>
  );
};

export default AuthPage;
