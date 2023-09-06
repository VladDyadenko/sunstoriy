import * as yup from 'yup';

const phoneRegexp = /^\+380\d{9}$/;

export const initialValuesChildForm = {
  name: '',
  surname: '',
  birthDate: '',
  age: '',
  file: null,
  mather: '',
  matherPhone: '',
  father: '',
  fatherPhone: '',
  about: '',
  sensornaya: '',
  logoped: '',
  correction: '',
  tutor: '',
  rehabilitation: '',
  childFiles: [],
};

export const schemaChildUpdate = yup.object().shape({
  name: yup
    .string()
    .required("Ім'я обов'язкове!")
    .min(2, 'Закоротке!')
    .max(40, 'Задовге!'),
  surname: yup.string().min(2, 'Закоротке!').max(40, 'Задовге!'),
  mather: yup
    .string()
    .min(2, 'Закоротке!')
    .max(40, 'Задовге!')
    .required("Ім'я обов'язкове!"),
  matherPhone: yup
    .string()
    .test('phone-format', 'Invalid phone format', value => {
      return phoneRegexp.test(value);
    })
    .required("Телефон обов'язковий!"),
  father: yup.string().min(2, 'Закоротке!').max(40, 'Задовге!'),
  fatherPhone: yup.string(),
});
