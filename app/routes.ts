import {
  type RouteConfig,
  route,
  layout,
  index,
  prefix,
} from '@react-router/dev/routes';

export default [
  index('./routes/index.tsx'),
  layout('./routes/layout.tsx', [
    ...prefix('gifts', [
      index('./routes/gifts/index.tsx'),
      layout('./routes/gifts/layout.tsx', [
        route('buy', './routes/gifts/buy.tsx'),
        route('sell', './routes/gifts/sell.tsx'),
        route('activity', './routes/gifts/activity.tsx'),
      ]),
    ]),

    ...prefix('stickers', [
      index('./routes/stickers/index.tsx'),
      layout('./routes/stickers/layout.tsx', [
        route('buy', './routes/stickers/buy.tsx'),
        route('sell', './routes/stickers/sell.tsx'),
        route('activity', './routes/stickers/activity.tsx'),
      ]),
    ]),
  ]),
] satisfies RouteConfig;
