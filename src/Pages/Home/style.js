import styled from "styled-components";

export const Div = styled.div`
    width: 50rem;
    max-width: 100%;
`;

export const Article = styled.article`
    width: 100%;
    max-width: max-content;

    margin: 1rem 0;
    padding: 1rem 1rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    a
    {
        text-decoration: none;
        color: #fff; 
        background-color: brown;
        width: 100%;
        border-radius: 0 0 6px 6px;

        font: 300 18px var(--font-family);

        padding: 1rem 0;
        text-align: center;
    }

    strong
    {
        cursor: default;
        font: 500 20px/50px var(--font-family);
    }
    
    img
    {
        width: 100%;
    }
`;