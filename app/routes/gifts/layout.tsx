import { Outlet } from 'react-router';
import { FilterBar } from '~/shared/components/FilterBar';
import { ControlsWrapper } from '~/shared/components/wrappers/ControlsWrapper';

export default function GiftsLayout() {
  return (
    <>
      <ControlsWrapper>
        <FilterBar />
      </ControlsWrapper>
      <Outlet />
    </>
  );
}
