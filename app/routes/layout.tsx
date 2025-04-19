import { Outlet } from 'react-router';
import { TonConnectButton } from '@tonconnect/ui-react';
import { UserAvatar } from '~/shared/components/telegram/Avatar';
import { TonActionPanel } from '~/shared/components/telegram/TonActionPanel';
import { ControlsWrapper } from '~/shared/components/wrappers/ControlsWrapper';
import { PageWrapper } from '~/shared/components/wrappers/PageWrapper';
import { addUser } from '~/api/user/addUser';

export async function LayoutLoader() {
  if (typeof window !== 'undefined' && !localStorage.getItem('user-added')) {
    try {
      await addUser();
      localStorage.setItem('user-added', 'true');
      console.log('✅ Пользователь создан');
    } catch (err) {
      console.warn('⚠️ Ошибка при вызове addUser:', err);
    }
  }
}

export default function Layout() {
  return (
    <PageWrapper>
      <ControlsWrapper className='gap-2 bg-transparent px-0 py-0'>
        <div className='flex items-center gap-2 grow'>
          <UserAvatar />
          <TonActionPanel />
        </div>
        <TonConnectButton />
      </ControlsWrapper>
      <Outlet />
    </PageWrapper>
  );
}
