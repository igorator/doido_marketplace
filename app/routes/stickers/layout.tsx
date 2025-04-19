import { Outlet } from 'react-router';

import { Navbar } from '~/shared/components/Navbar';
import { stickersNavigationConfig } from '~/shared/config/navigation/navigationConfig';

export default function StickersLayout() {
  return (
    <>
      <Outlet />
      <Navbar menuConfig={stickersNavigationConfig} />
    </>
  );
}
