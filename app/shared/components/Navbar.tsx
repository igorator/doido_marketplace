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
    <nav className='bottom-0 fixed flex justify-center gap-[var(--theme-inner-gap)] bg-[var(--theme-navbar)] rounded-t-[var(--theme-outer-border-radius)] w-full max-w-[var(--theme-default-max-width)]'>
      {Object.entries(menuConfig).map(([key, item]) => (
        <NavLink
          key={key}
          to={item.path}
          end
          className={({ isActive, isPending, isTransitioning }) =>
            cn(
              'px-4 py-4 pb-8 flex flex-col gap-1 items-center w-full max-w-[150px]',
              isPending && ' text-[var(--theme-hint-text)]',
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
