import { index, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('buy', 'routes/buy.tsx'),
  route('sell', 'routes/sell.tsx'),
  route('statistics', 'routes/statistics.tsx'),
] satisfies RouteConfig;
