import type { Route } from './+types/activity';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Gifts Activity' }];
}

export default function Activity() {
  return <>Activity</>;
}
