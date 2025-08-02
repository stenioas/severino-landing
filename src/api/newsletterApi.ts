import axios from 'axios';

const API_BASE_URL = 'https://severino.onrender.com/emailSubscribe';

export const saveNewsletterEmail = async (email: string) => {
  try {
    const response = await axios.post(
      API_BASE_URL,
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
