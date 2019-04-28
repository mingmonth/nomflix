import axios from "axios";
import { get } from "https";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "bf2ed82c4ad70b8cc3e0fd28a66e4f34",
    language: "en-US"
  }
});

//api.get("tv/popular");
//export default api;

export const MovieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upComing: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular")
};

export const TVApi = {
  popular: () => api.get("tv/popular"),
  topRated: () => api.get("tv/top_rated"),
  airingToday: () => api.get("tv/airing_today")
};
