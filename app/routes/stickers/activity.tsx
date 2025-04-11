import type { Route } from './+types/activity';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Stickers Activity' }];
}

export default function Activity() {
  return <>Activity</>;
}
