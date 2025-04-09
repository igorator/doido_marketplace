import { useEffect, useState } from 'react';

import avatarPlaceholder from '../../../shared/assets/images/avatar-placeholder.webp';
import { cn } from '../../utils/cn';

export const Avatar = () => {
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    if (window.Telegram.WebApp) {
      const telegramWebApp = window.Telegram.WebApp;

      console.log('TelegramWebApp:', telegramWebApp);

      const user = telegramWebApp.initData?.user;

      if (user && user.photo_url) {
        setAvatarUrl(user.photo_url);
      }
    }
  }, []);

  const imageUrl = avatarUrl || avatarPlaceholder;

  return (
    <img
      src={imageUrl}
      alt='Avatar'
      className={cn('rounded-full object-cover', `size-[40px]`)}
    />
  );
};
