import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

function Filme() {
  const { id } = useParams();

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "023a8520c834ea57409dc67389482981",
            language: "pt-BR",
          },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch(() => {
          console.log("Filme não encontrado!");
        });
    }
    loadFilme();
  }, []);

  return (
    <div>
      <h1>Acessando filme {id}</h1>
    </div>
  );
}

export default Filme;
