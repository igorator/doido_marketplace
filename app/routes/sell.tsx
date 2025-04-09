import type { Route } from './+types/sell';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Sell Page' }];
}

export default function SellRoute() {
  return <>Sell</>;
}
