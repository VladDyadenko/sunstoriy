import { Formik } from 'formik';
import {
  initialValuesRegister,
  initialValuesSignIn,
  schemaRegister,
  schemaSignIn,
} from '../Schemas/schema';
import {
  BtnRegister,
  BtnGoogle,
  Btnwrapper,
  FormAuth,
  LinkAuthForm,
  StyledNavLink,
  Title,
} from './AuthForm.styled';
import InputAuth from '../InputAuth/InputAuth';
import { useDispatch, useSelector } from 'react-redux';
import {
  registerThunk,
  signinThunk,
  currentThunk,
} from 'redux/auth/authOperetion';
import { selectOperetion } from 'redux/auth/authSelector';
import ButtonLoader from 'ui/ButtonLoader/ButtonLoader';
import { useNavigate } from 'react-router-dom';

function AuthForm({ isRegistration }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const operetion = useSelector(selectOperetion);

  const handleSubmit = async (values, { resetForm }) => {
    const credentials = isRegistration
      ? {
          name: values.name,
          email: values.email,
          password: values.password,
          passwordRepeat: values.passwordRepeat,
        }
      : {
          email: values.email,
          password: values.password,
        };

    try {
      if (isRegistration) {
        await dispatch(registerThunk(credentials)).unwrap();
        navigate('/auth/signin');
      } else {
        const result = await dispatch(signinThunk(credentials)).unwrap();
        if (result.accessToken) {
          dispatch(currentThunk());
        }
      }
    } catch (error) {
      console.log(error);
    }

    resetForm();
  };

  const handleGoogleLogin = () => {
    const googleUrl = process.env.REACT_APP_GOOGLE_AUTH_URL;
    window.location.href = googleUrl;
  };

  return (
    <div>
      <Formik
        initialValues={
          isRegistration ? initialValuesRegister : initialValuesSignIn
        }
        validationSchema={isRegistration ? schemaRegister : schemaSignIn}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <FormAuth>
            <Title>{isRegistration ? 'Реєстрація' : 'Вхід'}</Title>
            {isRegistration && (
              <>
                <InputAuth
                  type="text"
                  name="name"
                  placeholder="Name"
                  errors={errors.name}
                  touched={touched.name}
                  iconName="#icon-user"
                />
              </>
            )}
            <InputAuth
              type="email"
              name="email"
              placeholder="Email"
              errors={errors.email}
              touched={touched.email}
              iconName="#icon-mail"
            />
            <InputAuth
              type="password"
              name="password"
              placeholder="Введіть пароль"
              errors={errors.password}
              touched={touched.password}
              iconName="#icon-lock"
            />
            {isRegistration && (
              <InputAuth
                type="password"
                name="passwordRepeat"
                placeholder="Повторіть пароль"
                errors={errors.passwordRepeat}
                touched={touched.passwordRepeat}
                iconName="#icon-lock"
              />
            )}
            <Btnwrapper>
              <BtnRegister type="submit">
                {operetion === 'registration' ? (
                  <ButtonLoader height="18" width="50" />
                ) : isRegistration ? (
                  'Зареєструватися'
                ) : (
                  'Увійти'
                )}
              </BtnRegister>
              <BtnGoogle type="button" onClick={handleGoogleLogin}>
                Увійти через Google
              </BtnGoogle>
            </Btnwrapper>
          </FormAuth>
        )}
      </Formik>
      <LinkAuthForm>
        {isRegistration ? (
          <StyledNavLink to="/auth/signin">Увійти</StyledNavLink>
        ) : (
          <StyledNavLink to="/auth/register">Реєстрація</StyledNavLink>
        )}
      </LinkAuthForm>
    </div>
  );
}

export default AuthForm;
