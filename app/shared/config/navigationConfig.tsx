import { SellIcon, BuyIcon, ActivityIcon } from '../assets/icons';

export const navigationConfig = {
  buy: {
    icon: <BuyIcon size={30} />,
    path: '/',
    title: 'Buy',
  },
  sell: {
    icon: <SellIcon size={30} />,
    path: 'sell',
    title: 'Sell',
  },
  settings: {
    icon: <ActivityIcon size={30} />,
    path: 'activity',
    title: 'Activity',
  },
};
