type TelegramUser = {
  id: number;
  username?: string;
  first_name?: string;
  last_name?: string;
};

export const formatTelegramUserToPayload = (user: TelegramUser): any => ({
  id: user.id,
  user_name:
    user.username || `${user.first_name ?? ''} ${user.last_name ?? ''}`.trim(),
  chat_id: String(user.id),
});
