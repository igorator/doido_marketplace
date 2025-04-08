import { index, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  index('routes/buy.tsx'),
  route('sell', 'routes/sell.tsx'),
  route('activity', 'routes/activity.tsx'),
] satisfies RouteConfig;
