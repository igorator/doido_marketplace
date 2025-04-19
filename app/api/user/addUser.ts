import { getTelegramUser } from '~/shared/config/user/userData';
import { formatTelegramUserToPayload } from '~/shared/lib/utils/formatTelegramUserToPayload';

export const addUser = async () => {
  const user = getTelegramUser();
  if (!user) {
    console.warn('⛔️ Пользователь Telegram не найден');
    return;
  }

  const payload = formatTelegramUserToPayload(user);

  console.log(payload);

  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(`Ошибка при сохранении пользователя: ${res.status}`);
    }

    const savedUser = await res.json();
    console.log('✅ Пользователь сохранён:', savedUser);
    return savedUser;
  } catch (err) {
    console.error('❌ Ошибка при сохранении пользователя:', err);
  }
};
