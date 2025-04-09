export const rawDataToObject = (rawString: string): object => {
  // Извлекаем часть строки, которая начинается с "user="
  const userEncoded = rawString.split('user=')[1].split('&')[0];

  // Декодируем строку из URL-кодированного формата
  const decodedUserString = decodeURIComponent(userEncoded);

  // Преобразуем строку в объект
  return JSON.parse(decodedUserString);
};
