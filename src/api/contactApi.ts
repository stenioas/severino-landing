import axios from 'axios';

const API_BASE_URL = 'https://severino.onrender.com/contactEmail';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export const sendContactForm = async (data: ContactFormData) => {
  try {
    const response = await axios.post(API_BASE_URL, data, {
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
