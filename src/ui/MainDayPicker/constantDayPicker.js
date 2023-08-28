import { startOfWeek, endOfWeek } from 'date-fns';
const today = new Date();
export const startOfCurrentWeek = startOfWeek(today, { weekStartsOn: 1 });
export const endOfCurrentWeek = endOfWeek(today, { weekStartsOn: 1 });
