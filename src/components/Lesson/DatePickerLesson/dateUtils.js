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

export const extractTimeFromRange = timeRange => {
  const timePattern = /(\d{2}:\d{2}) - (\d{2}:\d{2})/;
  const match = timePattern.exec(timeRange);

  if (match) {
    return {
      startTime: match[1],
      endTime: match[2],
    };
  }

  return {
    startTime: null,
    endTime: null,
  };
};
