import { getAssetUrl } from './getAssetUrl';

type ApiConfig = {
  BACKEND_URL: string;
  NEWLETTER_ENDPOINT: string;
  CONTACT_ENDPOINT: string;
};

export async function loadApiConfig(): Promise<ApiConfig> {
  const response = await fetch(getAssetUrl('/config/apiConfig.json'));
  if (!response.ok)
    throw new Error('Arquivo de configuração da api não encontrado!');
  return response.json();
}
