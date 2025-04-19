import { giftApiConfig } from '~/shared/config/api/apiConfig';
import { type GiftPattern } from '~/shared/types/gifts/GiftPattern';

export const getGiftPatternsByCollectionName = async (
  collectionNames: string[],
): Promise<GiftPattern[]> => {
  const results = await Promise.all(
    collectionNames.map(async (collectionName) => {
      const res = await fetch(
        `${giftApiConfig.baseUrl}${giftApiConfig.patterns}/${collectionName}/sorted.json`,
      );

      if (!res.ok) {
        console.warn(`Failed to fetch patterns for ${collectionName}`);
        return [];
      }

      const patterns = await res.json();

      return patterns.map((pattern: GiftPattern) => ({
        name: pattern.name,
        rarity: pattern.rarityPermille,
        image: `${giftApiConfig.baseUrl}${giftApiConfig.patterns}/${collectionName}${giftApiConfig.fileTypes.png}/${pattern.name}.png`,
      }));
    }),
  );

  return results.flat();
};
