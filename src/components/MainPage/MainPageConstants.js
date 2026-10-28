import childCardFoto from 'assets/images/MainPage/addchild.jpg';
import lessonCardFoto from 'assets/images/MainPage/lessons.jpg';
import meetingWithChild from 'assets/images/MainPage/diagnostic.jpg';
import teacher from 'assets/images/MainPage/newTeacher.jpg';

export const mainCardDescr = [
  {
    title: 'Внесіть дані про нову дитину',
    image: childCardFoto,
    path: '/child',
    descr: 'Відкрити',
  },
  {
    title: 'Заплануйте нову навчальну подорож',
    image: lessonCardFoto,
    path: '/lesson',
    descr: 'Відкрити',
  },
  {
    title: 'Заплануйте першу зустріч з дитиною',
    image: meetingWithChild,
    path: '/child',
    descr: 'Відкрити',
  },
  {
    title: 'Наш новий чарівник',
    image: teacher,
    path: '/teacher',
    descr: 'Відкрити',
  },
];
