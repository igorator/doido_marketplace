import type { Route } from './+types/buy';
import { Buy } from '~/pages/buy';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'DOIDO' },
    {
      name: 'DOIDO',
      content: 'Welcome to DOIDO marketplace!',
    },
  ];
}

export default function Home() {
  return <Buy />;
}
