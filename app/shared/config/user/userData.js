export const getTelegramUser = () => {
  try {
    const initData = window?.Telegram?.WebApp?.initData;
    if (!initData) return null;

    const params = new URLSearchParams(initData);
    const userString = params.get('user');
    if (!userString) return null;

    const user = JSON.parse(userString);
    return user;
  } catch (err) {
    console.warn('⚠️ Не удалось распарсить Telegram user:', err);
    return null;
  }
};
