// для звітів
export const formatDateTitle = (dayOrePariod, selectedDateString) => {
  if (dayOrePariod === 'oneDay') {
    return `за ${selectedDateString[0].split('-').reverse().join('-')}`;
  } else {
    return `з ${selectedDateString[0]
      .split('-')
      .reverse()
      .join('-')} по ${selectedDateString[1].split('-').reverse().join('-')}`;
  }
};
