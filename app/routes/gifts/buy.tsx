import { getGifts } from '~/api/gifts';
import type { Route } from './+types/buy';
import type { Gift } from '~/shared/types/gifts/Gift';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Buy Gifts' }];
}

export async function ClientLoader({}: Route.LoaderArgs): Promise<{
  gifts: Gift[];
}> {
  const gifts = await getGifts(new URLSearchParams());
  return { gifts };
}

export default function Buy({ loaderData }: Route.ComponentProps) {
  const gifts = loaderData ?? [];
  console.log(gifts);

  return (
    <div className='gap-2 grid grid-cols-2'>
      {gifts.map((gift: Gift) => (
        <div
          key={gift.id}
          className='bg-[var(--theme-secondary-bg-color)] p-4 rounded-lg'
        >
          <div className='font-semibold'>{gift.title}</div>
          <div className='opacity-70 text-sm'>{gift.model_name}</div>
          <div className='text-xs'>
            {gift.sell_price !== null ? `$${gift.sell_price}` : 'Not for sale'}
          </div>
        </div>
      ))}
    </div>
  );
}
