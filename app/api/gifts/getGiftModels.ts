import { giftApiConfig } from '~/shared/config/api/apiConfig';
import type { GiftModel } from '~/shared/types/gifts/GiftModel';

export const getGiftModelsByCollectionName = async (
  collectionsNames: string[],
): Promise<GiftModel[]> => {
  const results = await Promise.all(
    collectionsNames.map(async (collectionName) => {
      const res = await fetch(
        `${giftApiConfig.baseUrl}${giftApiConfig.models}/${collectionName}/sorted.json`,
      );
      const models = await res.json();

      return models.map((model: GiftModel) => ({
        name: model.name,
        rarity: model.rarityPermille,
        image: `${giftApiConfig.baseUrl}${giftApiConfig.models}/${collectionName}${giftApiConfig.fileTypes.png}/${model.name}.png`,
      }));
    }),
  );

  return results.flat();
};
