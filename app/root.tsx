import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';

import type { Route } from './+types/root';
import './app.css';

import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { LoadingScreen } from '~/shared/components/LoadingScreen';

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <script src='https://telegram.org/js/telegram-web-app.js?56'></script>
        <Meta />
        <Links />
      </head>
      <body className='flex flex-col items-stretch'>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <TonConnectUIProvider manifestUrl='https://doido-marketplace.vercel.app/tonconnect-manifest.json'>
      <Outlet />
    </TonConnectUIProvider>
  );
}

export function HydrateFallback() {
  return <LoadingScreen />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className='flex flex-col justify-center items-center gap-4 mx-auto p-4 pt-16 text-center container'>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className='p-4 w-full overflow-x-auto'>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
