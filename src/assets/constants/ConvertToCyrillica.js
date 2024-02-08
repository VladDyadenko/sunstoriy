/* eslint-disable no-dupe-keys */
export function transliterate(text) {
  const cyrillicMap = {
    а: 'a',
    А: 'A',
    б: 'b',
    Б: 'B',
    в: 'v',
    В: 'V',
    г: 'h',
    Г: 'H',
    д: 'd',
    Д: 'D',
    е: 'e',
    Е: 'E',
    ё: 'yo',
    Ё: 'Yo',
    ж: 'zh',
    Ж: 'Zh',
    з: 'z',
    З: 'Z',
    и: 'i',
    И: 'I',
    й: 'y',
    Й: 'Y',
    к: 'k',
    К: 'K',
    л: 'l',
    Л: 'L',
    м: 'm',
    М: 'M',
    н: 'n',
    Н: 'N',
    о: 'o',
    О: 'O',
    п: 'p',
    П: 'P',
    р: 'r',
    Р: 'R',
    с: 's',
    С: 'S',
    т: 't',
    Т: 'T',
    у: 'u',
    У: 'U',
    ф: 'f',
    Ф: 'F',
    х: 'kh',
    Х: 'Kh',
    ц: 'ts',
    Ц: 'Ts',
    ч: 'ch',
    Ч: 'Ch',
    ш: 'sh',
    Ш: 'Sh',
    щ: 'sch',
    Щ: 'Sch',
    ы: 'y',
    Ы: 'Y',
    э: 'e',
    Э: 'E',
    ю: 'yu',
    Ю: 'Yu',
    я: 'ya',
    Я: 'Ya',
    і: 'i',
    І: 'I',
    ї: 'yi',
    Ї: 'Yi',
    ґ: 'g',
    Ґ: 'G',
    є: 'e',
    Є: 'Ye',
    ь: "'",
    ь: "'",
    Ъ: "'",
  };

  return text
    .split('')
    .map(char => cyrillicMap[char] || char)
    .join('');
}

export function formatDate(isoDate) {
  const date = new Date(isoDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDay = day < 10 ? '0' + day : day;
  const formattedMonth = month < 10 ? '0' + month : month;

  return `${formattedDay}/${formattedMonth}/${year}`;
}

export function formatTime(isoDate) {
  const date = new Date(isoDate);

  date.setHours(date.getHours());

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedHours = hours < 10 ? '0' + hours : hours;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  return `${formattedHours}:${formattedMinutes}`;
}
