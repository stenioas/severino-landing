import axios from 'axios';
import { loadApiConfig } from '../utils/loadConfig';

export const saveNewsletterEmail = async (email: string) => {
  try {
    const apiConfig = await loadApiConfig();
    const ENDPOINT_URL = apiConfig.BACKEND_URL + apiConfig.NEWSLETTER_ENDPOINT;
    const response = await axios.post(
      ENDPOINT_URL,
      { email },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      },
    );
    return response;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || error.message;
    }
    throw error;
  }
};
