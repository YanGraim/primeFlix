import { useEffect, useState } from "react";
import api from "../../services/api";
// URL DA API = movie/now_playing?api_key=023a8520c834ea57409dc67389482981&language=pt-BR

function Home() {
  const [filmes, setFilmes] = [];

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "023a8520c834ea57409dc67389482981",
          language: "pt-BR",
          page: 1,
        },
      });

      console.log(response.data.results);
    }

    loadFilmes();
  }, []);

  return (
    <div>
      <h1>Página Home</h1>
    </div>
  );
}

export default Home;
