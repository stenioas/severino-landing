import { getAssetUrl } from './getAssetUrl';

export type ApiConfigResponse = {
  BACKEND_URL: string;
  NEWSLETTER_ENDPOINT: string;
  CONTACT_ENDPOINT: string;
};

export async function loadApiConfig(): Promise<ApiConfigResponse> {
  const response = await fetch(getAssetUrl('/config/apiConfig.json'));
  if (!response.ok)
    throw new Error('Arquivo de configuração da api não encontrado!');
  return response.json();
}
