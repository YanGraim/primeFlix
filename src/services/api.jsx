import axios from "axios";

// BASE DA URL = https://api.themoviedb.org/3/
// URL DA API =  movie/now_playing?api_key=023a8520c834ea57409dc67389482981&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
