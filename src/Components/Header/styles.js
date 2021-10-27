import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 5rem;

    background-color: brown;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    a
    {
        text-decoration: none;
    }

    a:nth-child(1)
    {
        font: 300 40px var(--font-family);
        color: var(--white-smooth);
    }

    a:nth-child(2)
    {
        background-color: #fff;
        font: 400 20px var(--font-family);
        color: var(--black);

        padding: .5rem 1.5rem;
        border-radius: 4px;
    }
`;