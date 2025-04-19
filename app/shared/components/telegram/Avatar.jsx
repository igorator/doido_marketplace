import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '~/shared/components/ui/avatar';
import avatarPlaceholder from '~/shared/assets/images/avatar-placeholder.webp';
import { getTelegramUser } from '~/shared/config/user/userData';

export const UserAvatar = () => {
  const user = getTelegramUser();
  const avatarUrl = user?.photo_url || avatarPlaceholder;

  return (
    <Avatar className='size-12'>
      <AvatarImage src={avatarUrl} alt='User avatar' />
      <AvatarFallback>{user?.first_name?.[0] || 'U'}</AvatarFallback>
    </Avatar>
  );
};
