import axios from 'axios';
import { loadApiConfig } from '../utils/loadConfig';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export const sendContactForm = async (data: ContactFormData) => {
  try {
    const apiConfig = await loadApiConfig();
    const ENDPOINT_URL = apiConfig.BACKEND_URL + apiConfig.CONTACT_ENDPOINT;
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
