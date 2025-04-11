import { NavLink, useLocation } from 'react-router';
import { navigationConfig } from '~/shared/config/navigationConfig';
import { cn } from '~/shared/utils/cn';

interface NavbarProps {
  menuConfig?: typeof navigationConfig;
}

export const Navbar: React.FC<NavbarProps> = ({
  menuConfig = navigationConfig,
}) => {
  const location = useLocation();
  const basePath = location.pathname.split('/')[1];

  return (
    <nav className='bottom-0 fixed flex justify-center gap-[var(--theme-inner-gap)] bg-[var(--theme-secondary-bg-color)] pb-4 rounded-t-[var(--theme-outer-border-radius)] w-full max-w-[var(--theme-default-max-width)]'>
      {Object.entries(menuConfig).map(([key, item]) => {
        const fullPath = `/${basePath}/${item.path}`;

        return (
          <NavLink
            key={key}
            to={fullPath}
            className={({ isActive, isPending, isTransitioning }) =>
              cn(
                'px-4 py-4 flex flex-col gap-1 items-center w-full max-w-[150px]',
                isPending && ' text-[var(--theme-hint-text)]',
                isActive && 'text-[var(--theme-accent-text)]',
                isTransitioning && 'opacity-50',
              )
            }
          >
            <div>{item.icon}</div>

            <span className='font-semibold'>{item.title}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};
