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
