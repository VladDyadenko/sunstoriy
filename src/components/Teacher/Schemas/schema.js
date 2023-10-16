import * as yup from 'yup';

export const initialValuesTeacherForm = {
  name: '',
  surname: '',
  teacherImage: '',
  phone: '',
  color: '',
  about: '',
  doctor: '',
  price: '',
};

export const schemaTeacherUpdate = yup.object().shape({
  name: yup
    .string()
    .required("Ім'я обов'язкове!")
    .min(2, 'Закоротке!')
    .max(40, 'Задовге!'),
  surname: yup.string().min(2, 'Закоротке!').max(40, 'Задовге!'),
  price: yup.number(),
});
