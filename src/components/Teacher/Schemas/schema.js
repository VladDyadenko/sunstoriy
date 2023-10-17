import * as yup from 'yup';

export const initialValuesTeacherForm = {
  name: '',
  surname: '',
  teacherImage: '',
  phone: '',
  email: '',
  color: '',
  about: '',
  specialization: [],
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
export const options = [
  {
    value: 'Спеціаліст з сенсорної інтеграції',
    label: 'Спеціаліст з сенсорної інтеграції',
  },
  {
    value: 'Психолог',
    label: 'Психолог',
  },
  {
    value: 'Логопед',
    label: 'Логопед',
  },
  {
    value: 'Корекційний педагог',
    label: 'Корекційний педагог',
  },
  {
    value: 'Педагог початкових класів',
    label: 'Педагог початкових класів',
  },
  {
    value: 'Вихователь',
    label: 'Вихователь',
  },
  {
    value: 'Підготовка до школи',
    label: 'Підготовка до школи',
  },
];
