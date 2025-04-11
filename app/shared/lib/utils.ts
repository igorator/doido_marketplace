import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const rawDataToObject = (rawString: string): object => {
  const userEncoded = rawString.split('user=')[1].split('&')[0];

  const decodedUserString = decodeURIComponent(userEncoded);

  return JSON.parse(decodedUserString);
};
