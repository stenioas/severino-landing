import axios from 'axios';
import { loadApiConfig } from '../utils/loadConfig';

const apiConfig = await loadApiConfig().catch((error) => {
  console.error('Failed to load API config:', error);
  throw error;
});

const ENDPOINT_URL = apiConfig.BACKEND_URL + apiConfig.CONTACT_ENDPOINT;

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export const sendContactForm = async (data: ContactFormData) => {
  try {
    const response = await axios.post(ENDPOINT_URL, data, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    return response;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || error.message;
    }
    throw error;
  }
};
