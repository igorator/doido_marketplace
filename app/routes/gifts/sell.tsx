import type { Route } from './+types/sell';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Sell Gifts' }];
}

export default function Sell() {
  return <>Sell</>;
}
