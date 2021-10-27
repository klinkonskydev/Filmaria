import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../Services/api';

import { Container, Loader } from './styles';
import { toast } from "react-toastify";

export function Move() {
    const { id } = useParams();
    const [ filme, setFilme ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const history = useHistory();

    useEffect( () => {
        async function loadApi(){
            const response = await api.get(`r-api/?api=filmes/${id}`)

            if( response.data.length === 0){ return history.replace('/') };

            setFilme(response.data);
            setLoading(false);
        }

        loadApi();

        return () => {
            console.log('COMPONENTE DESMONTADO')
        }
    }, [ id, history ]);

    const salvaFilme = ( ) => 
    {
        const myList = localStorage.getItem('listofmoves:');
        let savedMoves = JSON.parse(myList) || [];

        const hasMove = savedMoves.some( (move) => move.id === filme.id );
        if( hasMove ){ return toast.error('Filme já foi salvo') };
        
        savedMoves.push(filme);
        localStorage.setItem('listofmoves:', JSON.stringify(savedMoves));
        toast.success('Filme salvo com sucesso!');
    }

    if( loading )
    {
        return (
            <>
                <Loader />
            </>
        )
    }

    return (
        <Container>
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome} />
            <h3>Sinopse</h3>
            <p>{filme.sinopse}</p>

            <div>
                <button onClick={ salvaFilme }>Salvar</button>

                <button onClick={() => {}}>
                    <a 
                        href={`https://youtube.com/results?search_query=${filme.nome.replace(' ', '+')} Trailer`}
                        target="_blank" 
                        rel="noreferrer"   
                    >
                        Trailer
                    </a>
                </button>
            </div>
        </Container>
    );
};