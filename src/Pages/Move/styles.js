import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    to {
        transform: rotate(1turn);
    }
`;

export const Container = styled.div`
    width: 40rem;
    max-width: 100%;

    padding: 0 1rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1
    {
        font: 300 30px var(--font-family);

        margin-top: 20px;
        margin-bottom: 20px;
    }

    img
    {
        width: 100%;
        border-radius: 7px;
    }

    h3
    {
        font: 600 27px var(--font-family);
        margin: 10px auto;
    }

    p
    {
        font: 300 17px var(--font-family);
    }

    button
    {
        border: none;
        outline: none;
        background: none;

        border-radius: 5px;
        transition: .25s;
        font:  300 23px var(--font-family);

        margin: 1rem 10px 0;
        padding: .5rem 1.5rem;

        cursor: pointer;

        &:hover
        {
            opacity: .9;
        }
    }

    button:nth-child(1)
    {
        background: #56F;
        margin-left: 0;
        color: var(--white);
    }

    button:nth-child(2)
    {
        background: brown;

        a
        {
            color: var(--white);
        }
    }

    a
    {
        text-decoration: none;
    }

    h1, h3, p
    {
        cursor: default;
    }
`;

export const Loader = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #313131;

    &::after
    {
        content: "";

        width: 150px;
        height: 150px;

        border: 17px solid #ddd;
        border-top-color: #009579;
        border-bottom-color: #009579;

        border-radius: 50%;

        animation: ${rotate} 2s infinite;
    }
`;