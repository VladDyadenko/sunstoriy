import dayjs from 'dayjs';
import 'dayjs/locale/uk';

dayjs.locale('uk');

export const formatTimeRange = time => {
  const start = dayjs(time[0]).format('HH:mm');
  const end = dayjs(time[1]).format('HH:mm');
  return `${start} - ${end}`;
};

export const formatDateRange = date => {
  const currentDate = dayjs(date).format('DD-MM-YYYY');

  return `${currentDate}`;
};

export const formatDay = date => {
  const dayOfWeek = dayjs(date).format('dddd');
  return `${dayOfWeek}`;
};

export const funFormattedDate = date => {
  // Отримуємо дати у форматі JavaScript Date
  const startDate = new Date(date[0].toDate());
  const endDate = new Date(date[1].toDate());

  // Обнуляємо години для початку дня (локальний час)
  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(23, 59, 59, 999);

  // Отримуємо зсув часового поясу в хвилинах
  const timezoneOffset = startDate.getTimezoneOffset() * 60 * 1000;

  // Корегуємо дати на зсув часового поясу
  const startDateUTC = new Date(startDate.getTime() - timezoneOffset);
  const endDateUTC = new Date(endDate.getTime() - timezoneOffset);

  // Форматуємо для бекенду
  const formattedDates = {
    startDate: startDateUTC.toISOString(), // 2025-02-24T00:00:00.000Z
    endDate: endDateUTC.toISOString(), // 2025-02-24T23:59:59.999Z
  };

  const isOneDay =
    startDate.getFullYear() === endDate.getFullYear() &&
    startDate.getMonth() === endDate.getMonth() &&
    startDate.getDate() === endDate.getDate();

  return { formattedDates, isOneDay };
};
