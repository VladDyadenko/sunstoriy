import { localStorageHelper } from 'helpers/helperLocalStorage';

export function getDates(startDate, endDate, dayOfWeek, type) {
  const selectedDates = [];

  for (
    let date = new Date(startDate);
    date <= endDate;
    date.setDate(date.getDate() + 1)
  )
    if (type === 'Період та день тижня') {
      if (date.getDay() === dayOfWeek) {
        selectedDates.push(new Date(date));
      }
    } else selectedDates.push(new Date(date));

  return selectedDates;
}

export const handleDateChange = (
  date,
  dateString,
  setLessonDates,
  day,
  type,
  pageName
) => {
  if (date) {
    if (Array.isArray(dateString) && dateString.length === 2) {
      const startDate = new Date(dateString[0]);
      const endDate = new Date(dateString[1]);
      const dayOfWeek = parseInt(day);
      const dates = getDates(startDate, endDate, dayOfWeek, type);
      const date = dates?.map(date => date.valueOf());
      setLessonDates(date);
      localStorageHelper.setData(pageName, date);
    } else if (typeof dateString === 'string') {
      const selectedDate = new Date(dateString);
      setLessonDates(selectedDate.valueOf());
      localStorageHelper.setData(pageName, selectedDate.valueOf());
    }
  }
};
