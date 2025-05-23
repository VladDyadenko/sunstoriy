export function formatTime(isoDate) {
  const date = new Date(isoDate);

  date.setHours(date.getHours());

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedHours = hours < 10 ? '0' + hours : hours;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  return `${formattedHours}:${formattedMinutes}`;
}
