import { routes } from '~/shared/config/navigation/routesConfig';
import { useRedirect } from '~/shared/hooks/useRedirect';

export default function Index() {
  useRedirect(routes.gifts.buy);

  return null;
}
