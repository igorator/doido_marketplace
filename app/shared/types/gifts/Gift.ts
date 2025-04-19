export type Gift = {
  id: string;
  received_id: string;
  title: string;
  number: number;

  model_name: string;
  model_rarity: number;
  model_emoji: string;

  pattern_name: string;
  pattern_rarity: number;
  pattern_emoji: string;

  backdrop_name: string;
  backdrop_rarity: number;
  backdrop_center_color: string;
  backdrop_edge_color: string;
  backdrop_symbol_color: string;
  backdrop_text_color: string;

  sticker_remote_id: string;
  thumbnail_remote_id: string;

  is_published: boolean;
  sell_price: number | null;
  sell_date: string | null;

  owner: {
    id: string;
    username: string;
  };
};
