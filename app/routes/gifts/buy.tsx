import type { Route } from './+types/buy';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Buy Gifts' }];
}

export default function Buy() {
  return <>Buy</>;
}
