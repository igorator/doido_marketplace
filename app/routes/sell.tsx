import type { Route } from './+types/sell';
import { Sell } from '~/pages/sell';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Sell Page' }];
}

export default function SellRoute() {
  return <Sell />;
}
