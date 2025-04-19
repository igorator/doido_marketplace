import { Outlet } from 'react-router';
import { Filter } from '~/shared/components/wrappers/FilterWrapper';
import { ControlsWrapper } from '~/shared/components/wrappers/ControlsWrapper';
import { Navbar } from '~/shared/components/Navbar';
import { stickersNavigationConfig } from '~/shared/config/navigation/navigationConfig';

export default function StickersLayout() {
  return (
    <>
      <ControlsWrapper>
        <Filter> </Filter>
      </ControlsWrapper>
      <Outlet />
      <Navbar menuConfig={stickersNavigationConfig} />
    </>
  );
}
