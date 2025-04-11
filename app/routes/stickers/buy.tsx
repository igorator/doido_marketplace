import type { Route } from './+types/buy';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Buy Stickers' }];
}

export default function Buy() {
  return <>Buy</>;
}
