export function formatDateCurrentMonth() {
  const now = new Date();
  const startDate = new Date(now.getFullYear(), now.getMonth(), 1);
  const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  const formattedDates = {
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
  };
  return formattedDates;
}
