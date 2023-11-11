import * as yup from 'yup';

export const initialValuesLessonForm = {
  office: '',
  child: '',
  childName: '',
  childSurname: '',
  teacher: '',
  teacherName: '',
  teacherSurname: '',
  teacherColor: '',
  price: 350,
  plan: '',
  review: '',
  dateLesson: '',
  timeLesson: '',
};

export const schemaAddLessonUpdate = yup.object().shape({
  office: yup.string().required("Кабінет обов'язковий!"),
  child: yup.string().required("Дитина обов'язкова!"),
  teacher: yup.string().required("Фахівець обов'язковий!"),
  dateLesson: yup
    .mixed()
    .test('is-string-or-array', "Дата обов'язкова!", value => {
      if (Array.isArray(value)) {
        return value.every(
          item => typeof item === 'string' || typeof item === 'number'
        );
      } else {
        return typeof value === 'string' || typeof value === 'number';
      }
    })
    .required("Дата обов'язкова!"),
  timeLesson: yup
    .array()
    .of(yup.string())
    .required("Час обов'язковий!")
    .min(2, 'Необходимо выбрать начальное и конечное время'),
});
