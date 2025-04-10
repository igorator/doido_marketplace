import { useEffect, useState } from 'react';

import avatarPlaceholder from '../../../shared/assets/images/avatar-placeholder.webp';
import { cn } from '../../utils/cn';
import { rawDataToObject } from '~/shared/utils/rawDataToObject';

export const Avatar = () => {
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    if (window.Telegram.WebApp.initData) {
      const userData = window.Telegram.WebApp.initData;
      const user = rawDataToObject(userData);

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
