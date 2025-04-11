import { Outlet } from 'react-router';
import { Filter } from '~/shared/components/filter/Filter';
import { ControlsWrapper } from '~/shared/components/wrappers/ControlsWrapper';

export default function StickersLayout() {
  return (
    <>
      <ControlsWrapper>
        <Filter> </Filter>
      </ControlsWrapper>
      <Outlet />
    </>
  );
}
