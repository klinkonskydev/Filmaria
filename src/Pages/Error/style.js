import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a
    {
        border: none;
        background: none;
        text-decoration: none;

        position: absolute;
        left: 15px;
        top: 6rem;

        padding: 0.2rem .7rem;
        
        font: 300 20px var(--font-family);

        border-bottom: 2px solid #A9F;

        border-top-left-radius: 4px;
        border-top-right-radius: 4px;

        transition: all .245s;

    }

    a:hover
    {
        background-color: #31313112;
    }

    > div
    {
        width: 100%;

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    img
    {
        width: 26rem;
        max-width: 100%;
    }

    h1
    {
        font: 300 30px var(--font-family);
        text-align: center;
    }
`;