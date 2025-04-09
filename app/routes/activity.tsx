import type { Route } from './+types/activity';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Activity' }];
}

export default function ActivityRoute() {
  return <>Activity</>;
}
