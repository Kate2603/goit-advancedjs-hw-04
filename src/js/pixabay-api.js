import axios from 'axios';

const API_KEY = '33957392-15c8dcee5be6fcb8a0c7e759b';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        page: page,
        per_page: 15,
        image_type: 'photo',
        orientation: 'horizontal',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
