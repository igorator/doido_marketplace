import { routes } from '~/shared/config/routesConfig';
import { useRedirect } from '~/shared/hooks/useRedirect';

export default function GiftsIndex() {
  useRedirect(routes.gifts.buy);

  return <></>;
}
