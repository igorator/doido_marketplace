export const formatGiftsRarity = (rarity: number): string => {
  return `${parseFloat((rarity / 10).toFixed(2))}%`;
};
