import type { Route } from './+types/statistics';
import { Statistics } from '~/pages/statistics';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Statistics Page' }];
}

export default function StatisticsRoute() {
  return <Statistics />;
}
