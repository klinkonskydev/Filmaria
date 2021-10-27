import styled from "styled-components";

export const Title = styled.h1`
    text-align: center;
    font: 400 40px var(--font-family);

    margin: 1rem 0;
`;

export const Ul = styled.ul`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    li
    {
        list-style: none;
        width: 100%;

        font: 300 20px var(--font-family);

        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 5rem;

        margin-bottom: 10px;

        div
        {
            display: flex;
            align-items: center;
            justify-content: center;

            gap: 10px;
        }

        a
        {
            text-decoration: none;
            color: #A1F;
        }

        button
        {
            background: none;
            outline: none;
            border: none;
            
            width: 1.6rem;
            height: 100%;
        }

        svg
        {
            width: 100%;
            height: 100%;
        }

        svg:hover
        {
            stroke: #F00;
        }
    }
`;

export const Bad = styled.span`
    font: 400 30px var(--font-family);
    color: #B2F;
`;