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
    // eslint-disable-next-line no-dupe-keys
    ь: "'",
    Ъ: "'",
  };

  return text
    .split('')
    .map(char => cyrillicMap[char] || char)
    .join('');
}
