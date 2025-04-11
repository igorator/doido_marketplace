import { TonConnectButton } from '@tonconnect/ui-react';
import { Outlet } from 'react-router';
import { EntityTabSwitcher } from '~/shared/components/EntityTabSwitcher';
import { Navbar } from '~/shared/components/Navbar';
import { UserAvatar } from '~/shared/components/telegram/Avatar';
import { TonActionPanel } from '~/shared/components/telegram/TonActionPanel';
import { ControlsWrapper } from '~/shared/components/wrappers/ControlsWrapper';
import { PageWrapper } from '~/shared/components/wrappers/PageWrapper';

export default function Layout() {
  return (
    <PageWrapper>
      <EntityTabSwitcher />
      <ControlsWrapper className='gap-2 bg-transparent px-0 py-0'>
        <div className='flex items-center gap-2 grow'>
          <TonActionPanel />
          <UserAvatar />
        </div>

        <TonConnectButton />
      </ControlsWrapper>
      <Outlet />
      <Navbar />
    </PageWrapper>
  );
}
