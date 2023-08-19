import { Formik } from 'formik';
import {
  initialValuesRegister,
  initialValuesSignIn,
  schemaRegister,
  schemaSignIn,
} from '../Schemas/schema';
import {
  BtnRegister,
  Btnwrapper,
  FormAuth,
  LinkAuthForm,
  StyledNavLink,
  Title,
} from './AuthForm.styled';
import InputAuth from '../InputAuth/InputAuth';
import { useDispatch } from 'react-redux';
import { registerThunk, signinThunk } from 'redux/auth/authOperetion';

function AuthForm({ isRegistration }) {
  const dispatch = useDispatch();
  const handleSubmit = async (values, { resetForm }) => {
    const { email, password } = values;
    try {
      isRegistration
        ? await dispatch(registerThunk(values))
        : await dispatch(signinThunk({ email, password }));
    } catch (error) {
      console.log(error);
    }

    resetForm();
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
              placeholder="Password"
              errors={errors.password}
              touched={touched.password}
              iconName="#icon-lock"
            />
            <Btnwrapper>
              <BtnRegister type="submit">
                {isRegistration ? 'Зареєструватися' : 'Увійти'}
              </BtnRegister>
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
