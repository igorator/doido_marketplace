import { SellIcon, BuyIcon, ActivityIcon } from '~/shared/assets/icons';
import { routes } from './routesConfig';

export type NavigationItem = {
  title: string;
  path: string;
  icon?: React.ReactNode;
  soon?: boolean;
};

export type NavigationConfig = NavigationItem[];

export const giftsNavigationConfig: NavigationConfig = [
  {
    icon: <BuyIcon />,
    path: routes.gifts.buy,
    title: 'Buy',
  },
  {
    icon: <SellIcon />,
    path: routes.gifts.sell,
    title: 'Sell',
  },
  {
    icon: <ActivityIcon />,
    path: routes.gifts.activity,
    title: 'Activity',
  },
];

export const stickersNavigationConfig: NavigationConfig = [
  {
    icon: <BuyIcon />,
    path: routes.stickers.buy,
    title: 'Buy',
  },
  {
    icon: <SellIcon />,
    path: routes.stickers.sell,
    title: 'Sell',
  },
  {
    icon: <ActivityIcon />,
    path: routes.stickers.activity,
    title: 'Activity',
  },
];

export const entityTabsConfig: NavigationConfig = [
  {
    title: 'Gifts',
    path: routes.gifts.path,
    soon: false,
  },
  {
    title: 'Stickers',
    path: routes.stickers.path,
    soon: true,
  },
];
