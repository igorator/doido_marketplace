import { useEffect, useState } from 'react';

import avatarPlaceholder from '../../../shared/assets/images/avatar-placeholder.webp';
import { cn } from '../../../shared/utils/cn';

export const Avatar = () => {
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    if (window.TelegramWebApp && window.TelegramWebApp.initDataUnsafe) {
      const user = window.TelegramWebApp.initDataUnsafe.user;

      if (user && user.photo_url) {
        setAvatarUrl(user.photo_url);
      }
    }
  }, []);

  // Если аватар не найден, используем изображение-заполнитель
  const imageUrl = avatarUrl || avatarPlaceholder;

  return (
    <img
      src={imageUrl}
      alt='Avatar'
      className={cn('rounded-full object-cover', `size-[40px]`)}
    />
  );
};
