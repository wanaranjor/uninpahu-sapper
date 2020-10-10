import { API_BASE_URL } from "../../../config/api";
import axios from "axios";

export const getNews = async () => {
  try {
    const url = `${API_BASE_URL}/news`;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error('getVideos:', error);
    return error;
  }
}

export const getNewById = async (id) => {
  try {
    const url = `${API_BASE_URL}/news/${id}`;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error('getVideos:', error);
    return error;
  }
}

export const getSliders = async () => {
  try {
    const url = `${API_BASE_URL}/sliders`;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error('getVideos:', error);
    return error;
  }
}
