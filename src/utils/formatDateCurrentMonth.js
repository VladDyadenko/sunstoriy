export function formatDateCurrentMonth() {
  const now = new Date();
  // Создаем даты сразу в UTC
  const startDate = new Date(
    Date.UTC(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0)
  );
  const endDate = new Date(
    Date.UTC(now.getFullYear(), now.getMonth() + 1, 0, 22, 59, 59, 999)
  );

  const formattedDates = {
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
  };

  return formattedDates;
}
