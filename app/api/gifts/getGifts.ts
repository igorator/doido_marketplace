import { giftApiConfig } from '~/shared/config/api/apiConfig';

export const getGifts = async (params: URLSearchParams) => {
  const url = new URL(`${giftApiConfig.baseUrl}/gifts`);
  url.search = params.toString();

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch gifts: ${response.statusText}`);
  }

  return response.json();
};
