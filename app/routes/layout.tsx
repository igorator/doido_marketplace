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
    <>
      <EntityTabSwitcher />
      <PageWrapper>
        <ControlsWrapper className='bg-transparent px-0 py-0'>
          <UserAvatar />
          <TonConnectButton />
          <TonActionPanel />
        </ControlsWrapper>
        <Outlet />
        <Navbar />
      </PageWrapper>
    </>
  );
}
