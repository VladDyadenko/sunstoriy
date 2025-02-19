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

  // Обнуляємо години для початку дня
  startDate.setUTCHours(0, 0, 0, 0);
  endDate.setUTCHours(23, 59, 59, 999);

  // Форматуємо для бекенду
  const formattedDates = {
    startDate: startDate.toISOString(), // 2025-02-01T00:00:00.000Z
    endDate: endDate.toISOString(), // 2025-02-08T23:59:59.999Z
  };

  const isOneDay =
    startDate.getUTCFullYear() === endDate.getUTCFullYear() &&
    startDate.getUTCMonth() === endDate.getUTCMonth() &&
    startDate.getUTCDate() === endDate.getUTCDate();

  return { formattedDates, isOneDay };
};
