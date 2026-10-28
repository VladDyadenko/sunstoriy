import * as yup from 'yup';

// const phoneRegexp = /^\+380\d{9}$/;

export const initialValuesChildForm = {
  name: '',
  surname: '',
  birthDate: '',
  age: '',
  childImage: '',
  mather: '',
  matherPhone: '',
  father: '',
  fatherPhone: '',
  about: '',
  sensornaya: '',
  abaterapiya: '',
  logoped: '',
  correction: '',
  tutor: '',
  rehabilitation: '',
  childFiles: '',
};

export const schemaChildUpdate = yup.object().shape({
  name: yup
    .string()
    .required("Ім'я обов'язкове!")
    .min(2, 'Закоротке!')
    .max(40, 'Задовге!'),
  surname: yup.string().min(2, 'Закоротке!').max(40, 'Задовге!'),
  mather: yup.string().min(2, 'Закоротке!').max(40, 'Задовге!'),
  matherPhone: yup
    .string()
    .required("Номер обов'язковий!")
    .matches(/^\d{12}$/, 'Номер повинен містити рівно 12 цифр!'),
  father: yup.string().min(2, 'Закоротке!').max(40, 'Задовге!'),
  fatherPhone: yup.string(),
});
