import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../Services/api";

import { Article, Div } from "./style";

export const Home = () => 
{
  const [ filmes, setFilmes ] = useState([]);

  useEffect(() => {
    async function loadFilmes(){
      const response = await api.get('r-api/?api=filmes');
      setFilmes(response.data);
    }

    loadFilmes();
  }, [])

  return (
    <>
      <Div>
        {filmes.map( (filme) => {
          return (
            <Article key={filme.id}>
              <strong>{filme.nome}</strong>

         
              <img src={filme.foto} alt={filme.nome} />
   
              <Link
                to={`/filme/${filme.id}`}
              >
                Acessar
              </Link>
              
            </Article>
          );
        })}
      </Div>
    </>
  );
}