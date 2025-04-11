import { cn } from '../utils/cn';
import { routes } from '~/shared/config/routesConfig';
import { SoonOverlay } from './SoonOverlay';
import { NavLink } from 'react-router';

const defaultTabs = [
  {
    label: 'Gifts',
    to: routes.gifts.path,
    soon: false,
  },
  {
    label: 'Stickers',
    to: routes.stickers.path,
    soon: true,
  },
];

interface EntityTab {
  label: string;
  to: string;
  soon?: boolean;
}

interface EntityTabSwitcherProps {
  tabsConfig?: EntityTab[];
}

export const EntityTabSwitcher = ({
  tabsConfig = defaultTabs,
}: EntityTabSwitcherProps) => {
  return (
    <nav className='flex items-center self-center rounded-[9999px] w-full overflow-clip'>
      {tabsConfig.map(({ label, to, soon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive, isPending, isTransitioning }) =>
            cn(
              'flex grow items-center justify-center relative p-[8px] transition-colors duration-200',
              isPending && 'text-[var(--theme-hint-text)]',
              isActive &&
                'bg-[var(--theme-accent-bg)] text-[var(--theme-accent-text)]',
              isTransitioning && 'opacity-50',
              soon && 'pointer-events-none',
            )
          }
        >
          {label}
          {soon && <SoonOverlay />}
        </NavLink>
      ))}
    </nav>
  );
};
