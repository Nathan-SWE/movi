import axios from "axios";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

const APIConnect = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: apiKey,
    language: "en",
  },
});

export default APIConnect;
