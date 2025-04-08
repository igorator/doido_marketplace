import { NavLink } from 'react-router';
import { navigationConfig } from '~/shared/config/navigationConfig';
import { cn } from '~/shared/utils/cn';

interface NavbarProps {
  menuConfig?: typeof navigationConfig;
}

export const Navbar: React.FC<NavbarProps> = ({
  menuConfig = navigationConfig,
}) => {
  return (
    <nav className='bottom-0 fixed flex justify-center gap-2 bg-[var(--theme-navbar)] w-full'>
      {Object.entries(menuConfig).map(([key, item]) => (
        <NavLink
          key={key}
          to={item.path}
          end
          className={({ isActive, isPending, isTransitioning }) =>
            cn(
              'px-4 py-4 flex flex-col gap-1 items-center transition-colors duration-200 w-full max-w-[150px]',
              isPending && 'animate-pulse duration-100 text-gray-500',
              isActive && 'text-[var(--theme-accent-text)]',
              isTransitioning && 'opacity-50',
            )
          }
        >
          <div>{item.icon}</div>

          <span>{item.title}</span>
        </NavLink>
      ))}
    </nav>
  );
};
