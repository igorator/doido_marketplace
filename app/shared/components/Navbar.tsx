import { NavLink } from 'react-router';
import { cn } from '~/shared/lib/utils';
import type { NavigationItem } from '~/shared/config/navigation/navigationConfig';

interface NavbarProps {
  menuConfig?: NavigationItem[];
}

export const Navbar: React.FC<NavbarProps> = ({ menuConfig = [] }) => {
  return (
    <nav className='right-0 bottom-0 left-0 fixed flex justify-center gap-[var(--theme-inner-gap)] bg-[var(--theme-secondary-bg-color)] pb-4 w-full'>
      {menuConfig.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          relative='route'
          className={({ isActive, isPending, isTransitioning }) =>
            cn(
              'px-4 py-4 flex flex-col gap-1 items-center w-full max-w-[150px]',
              isPending && 'text-[var(--theme-hint-text)]',
              isActive && 'text-[var(--theme-accent-text)]',
              isTransitioning && 'opacity-50',
            )
          }
        >
          <div>{item.icon}</div>
          <span className='font-semibold'>{item.title}</span>
        </NavLink>
      ))}
    </nav>
  );
};
