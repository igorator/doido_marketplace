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
    <nav className='bg-[var(--tg-theme-bottom-bar-bg-color)] bottom-0 left-1/2 fixed flex justify-around m-auto w-full max-w-[var(--default-max-width)] -translate-x-1/2'>
      {Object.entries(menuConfig).map(([key, item]) => (
        <NavLink
          key={key}
          to={item.path}
          end
          className={({ isActive, isPending, isTransitioning }) =>
            cn(
              'px-4 py-2 flex flex-col gap-2 items-center transition-colors duration-200 grow w-full',
              isPending && 'animate-pulse text-gray-500',
              isActive && 'text-blue-300',
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
