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
    <nav className='bottom-0 fixed flex justify-around w-full'>
      {Object.entries(menuConfig).map(([key, item]) => (
        <NavLink
          key={key}
          to={item.path}
          end
          className={({ isActive, isPending, isTransitioning }) =>
            cn(
              'px-4 py-2 flex flex-col items-center rounded-lg transition-colors duration-200 w-[40px]',
              isPending && 'animate-pulse text-gray-500',
              isActive && 'text-blue-600 font-bold',
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
