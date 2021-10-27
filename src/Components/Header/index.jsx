import { Header } from './styles';
import { Link } from 'react-router-dom';

export function Headers(){


  return (
    <Header>
        <Link to="/">Filmora</Link>

        <Link to="/favoritos">
          Salvos
        </Link>
    </Header>
  );
};