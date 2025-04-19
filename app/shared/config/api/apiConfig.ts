const baseApiConfig = {
  baseUrl: import.meta.env.VITE_API_URL,
  assets: '/assets',
};

const fileType = {
  tgs: '/tgs',
  lottie: '/json',
  png: '/png',
};

export const giftApiConfig = {
  ...baseApiConfig,
  gifts: '/assets/gifts',
  collections: '/assets/gifts/collections',
  models: '/assets/gifts/models',
  backdrops: '/assets/gifts/backdrops',
  patterns: '/assets/gifts/patterns',
  fileTypes: { ...fileType },
};

export const stickerApiConfig = {
  ...baseApiConfig,
  stickers: '/assets/stickers',
  fileTypes: { ...fileType },
};
