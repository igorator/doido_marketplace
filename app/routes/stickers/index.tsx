import { routes } from '~/shared/config/routesConfig';
import { useRedirect } from '~/shared/hooks/useRedirect';

export default function StickersIndex() {
  useRedirect(routes.stickers.buy);

  return <></>;
}
