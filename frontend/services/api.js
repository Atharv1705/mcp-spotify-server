// frontend/services/api.js
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export const getPlaylists = async () => {
  try {
    const response = await axios.get(`${API_URL}/playlists`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || error.message);
  }
};

export const searchTracks = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/search`, { params: { query } });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || error.message);
  }
};
