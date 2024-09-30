import axios from 'axios';

export const apiService = async (BASE_URL: string) => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return {
      items: response.data, 
    };
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};