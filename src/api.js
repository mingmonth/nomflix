import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "bf2ed82c4ad70b8cc3e0fd28a66e4f34",
    language: "en-US"
  }
});

api.get("tv/popular");

export default api;
