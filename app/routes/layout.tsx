import { TonConnectButton } from '@tonconnect/ui-react';
import { Outlet } from 'react-router';
import { EntityTabSwitcher } from '~/shared/components/EntityTabSwitcher';
import { UserAvatar } from '~/shared/components/telegram/Avatar';
import { TonActionPanel } from '~/shared/components/telegram/TonActionPanel';
import { ControlsWrapper } from '~/shared/components/wrappers/ControlsWrapper';
import { PageWrapper } from '~/shared/components/wrappers/PageWrapper';

export default function Layout() {
  return (
    <>
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
    </>
  );
}
