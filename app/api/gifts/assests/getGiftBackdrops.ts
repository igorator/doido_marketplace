import { giftApiConfig } from '~/shared/config/api/apiConfig';
import type { GiftBackdrop } from '~/shared/types/gifts/GiftBackdrop';

export const getGiftBackdropByCollectionName = async (
  collectionsNames: string[],
): Promise<GiftBackdrop[]> => {
  const results = await Promise.all(
    collectionsNames.map(async (collectionName) => {
      const res = await fetch(
        `${giftApiConfig.baseUrl}${giftApiConfig.backdrops}/${collectionName}/backdrops.json`,
      );
      const backdrops = await res.json();

      return backdrops.map((backdrop: GiftBackdrop) => ({
        name: backdrop.name,
        rarity: backdrop.rarityPermille,
        backdrop: {
          centerColor: backdrop.centerColor,
          edgeColor: backdrop.edgeColor,
          patternColor: backdrop.patternColor,
          textColor: backdrop.textColor,
          hex: backdrop.hex,
        },
      }));
    }),
  );

  return results.flat();
};
