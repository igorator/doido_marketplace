import { giftApiConfig } from '~/shared/config/api/apiConfig';
import type { GiftCollection } from '~/shared/types/gifts/GiftCollection';

export const getGiftCollections = async (): Promise<GiftCollection[]> => {
  const res = await fetch(
    `${giftApiConfig.baseUrl}${giftApiConfig.collections}/collections.json`,
  );

  const raw = (await res.json()) as Record<string, string>;

  return Object.entries(raw)
    .map(([name, image]) => ({
      name,
      image: `${giftApiConfig.baseUrl}${giftApiConfig.collections}/${image}`,
    }))
    .reverse();
};
