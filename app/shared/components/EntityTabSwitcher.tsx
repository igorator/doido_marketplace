import { SoonOverlay } from './SoonOverlay';
import { NavLink } from 'react-router';
import { cn } from '~/shared/lib/utils';
import { entityTabsConfig } from '../config/navigation/navigationConfig';

interface EntityTab {
  title: string;
  path: string;
  soon?: boolean;
}

interface EntityTabSwitcherProps {
  tabsConfig?: EntityTab[];
}

export const EntityTabSwitcher = ({
  tabsConfig = entityTabsConfig,
}: EntityTabSwitcherProps) => {
  return (
    <nav className='flex items-center self-center w-full max-w-[var(--theme-default-max-width)] overflow-clip'>
      {tabsConfig.map(({ title, path, soon }) => (
        <NavLink
          key={title}
          to={path}
          className={({ isActive, isPending, isTransitioning }) =>
            cn(
              'flex grow items-center justify-center relative p-[8px] transition-colors duration-200 w-full',
              isPending && 'text-[var(--theme-hint-text)]',
              isActive &&
                'bg-[var(--theme-accent-bg)] text-[var(--theme-accent-text)] pointer-events-none',
              isTransitioning && 'opacity-50',
              soon && 'pointer-events-none',
            )
          }
        >
          {title}
          {soon && <SoonOverlay />}
        </NavLink>
      ))}
    </nav>
  );
};
