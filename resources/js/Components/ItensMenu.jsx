import { Link } from "@inertiajs/react";
import styled from "styled-components";

export default function ItensMenu({ rota, nome }) {
    return (
        <Link href={route(`${rota}`)}>
            <EstiloLink>{nome}</EstiloLink>
        </Link>
    );
}

export const breakpoints = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "429px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "1440px",
};
const EstiloLink = styled.p`
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 24px;
    border-radius: 0.375rem;
    padding: 0.5rem 0.75rem;
    font-weight: bold;
    color: #000;
    transition: all 0.2s ease;
    text-align: center;
    cursor: pointer;

    &:hover {
        color: rgba(0, 0, 0, 0.7);
    }

    &:focus {
        outline: none;
    }

    &:focus-visible {
        border-color: #ff2d20;
    }

    @media (max-width: ${breakpoints.laptop}) {
        font-size: 22px;
    }

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 20px;
        padding: 0.5rem;
    }

    @media (max-width: ${breakpoints.mobileL}) {
        font-size: 18px;
        padding: 0.4rem;
    }

    @media (max-width: ${breakpoints.mobileS}) {
        font-size: 16px;
        /* padding: 0.3rem; */
    }

    @media (prefers-color-scheme: dark) {
        color: #000;

        &:hover {
            color: rgba(255, 84, 32, 0.8);
        }

        &:focus-visible {
            border-color: #e70000;
        }
    }
`;
