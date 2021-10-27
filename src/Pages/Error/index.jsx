import { Container } from "./style";
import { Link } from "react-router-dom";

export function Error() {
    return (
        <Container>
            <Link to="/">&larr; Voltar</Link>
            
            <div>
                <img src="https://i.giphy.com/media/8L0Pky6C83SzkzU55a/source.gif" 
                    alt="Erro 404, Pagina inexistente" 
                />

                <h1>Esta página não existe :{'('}</h1>
            </div>
        </Container>
    );
};