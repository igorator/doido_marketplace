import { useEffect, useState } from 'react';
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '~/shared/components/ui/avatar';
import avatarPlaceholder from '~/shared/assets/images/avatar-placeholder.webp';
import { rawDataToObject } from '~/shared/lib/utils';

export const UserAvatar = () => {
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
    <Avatar className='size-12'>
      <AvatarImage src={imageUrl} />
      <AvatarFallback>Avatar</AvatarFallback>
    </Avatar>
  );
};
