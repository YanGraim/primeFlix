import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
// URL DA API = movie/now_playing?api_key=023a8520c834ea57409dc67389482981&language=pt-BR

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "023a8520c834ea57409dc67389482981",
          language: "pt-BR",
          page: 1,
        },
      });

      //console.log(response.data.results.slice(0, 10));
      setFilmes(response.data.results.slice(0, 10));
    }

    loadFilmes();
  }, []);

  return (
    <div className="container">
      <div className="lista-filme">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.title}
              />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
