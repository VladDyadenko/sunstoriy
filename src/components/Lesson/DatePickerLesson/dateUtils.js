export function getDatesByDayOfWeek(startDate, endDate, dayOfWeek) {
  const selectedDates = [];

  for (
    let date = new Date(startDate);
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    if (date.getDay() === dayOfWeek) {
      selectedDates.push(new Date(date));
    }
  }

  return selectedDates;
}
// const startDate = new Date('2023-11-01');
// const endDate = new Date('2023-11-30');
// const dayOfWeekToSelect = 1;
// const selectedDates = getDatesByDayOfWeek(
//   startDate,
//   endDate,
//   dayOfWeekToSelect
// );

// console.log(selectedDates);
