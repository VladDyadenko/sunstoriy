import * as yup from 'yup';

const nameRegexp = /(([A-Za-z]+[,.]?[ ]?|[a-z]+['-]?)+)$/;
const emailPatern =
  /^[\w!#$%^&*\-=/{}[\]_|`~?\\+][\w!#$%^&*\+\-?=/{}[\]_|`~\\.]{1,62}[\w!#$%^&*\-=/{}+[\]_|`~?\\]@([\w]+\.){1,20}[\w]{1,4}$/; //eslint-disable-line

const passwordRegexp = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

export const initialValuesRegister = {
  name: '',
  email: '',
  password: '',
};
export const schemaRegister = yup.object().shape({
  name: yup
    .string()
    .required()
    .test('name-format', 'Invalid name format', value => {
      return nameRegexp.test(value);
    }),
  email: yup
    .string()
    .email('Invalid email')
    .test('email-format', 'Invalid email format', value => {
      return emailPatern.test(value);
    })
    .required(),
  password: yup
    .string()
    .min(6)
    .max(24)
    .test('password-format', 'Invalid password format', value => {
      return passwordRegexp.test(value);
    })
    .required(),
});

export const initialValuesSignIn = {
  email: '',
  password: '',
};

export const schemaSignIn = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .test('email-format', 'Invalid email format', value => {
      return emailPatern.test(value);
    })
    .required(),
  password: yup
    .string()
    .min(6)
    .max(24)
    .test('password-format', 'Invalid password format', value => {
      return passwordRegexp.test(value);
    })
    .required(),
});
