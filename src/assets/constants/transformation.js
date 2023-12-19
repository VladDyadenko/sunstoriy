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
