import type { Route } from './+types/buy';
import { Buy } from '~/pages/buy';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Buy Page' }];
}

export default function BuyRoute() {
  return <Buy />;
}
