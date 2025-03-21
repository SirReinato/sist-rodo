import { Link } from "@inertiajs/react";
import styled from "styled-components";

export default function GuestLayout({ children }) {
    return (
        <ConteinerLogin>
            <TituloLogin>Pelas Estradas</TituloLogin>

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
            <Link href="/">
                <h3>Voltar a home</h3>
            </Link>
        </ConteinerLogin>
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

const ConteinerLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    height: 100vh;
    width: 100%;
    background: linear-gradient(45deg, #ff5733, #555555);
`;
const TituloLogin = styled.h2`
    width: 100%;
    color: #f4f4f4;
    font-size: 56px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 16px;
    font-family: "Roboto", sans-serif;
    line-height: 70px;

    @media (max-width: ${breakpoints.laptop}) {
        font-size: 48px;
        line-height: 60px;
    }

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 38px;
        line-height: 50px;
    }

    @media (max-width: ${breakpoints.mobileL}) {
        font-size: 30px;
        line-height: 40px;
        width: 90%;
    }

    @media (max-width: ${breakpoints.mobileS}) {
        font-size: 24px;
        line-height: 32px;
    }
`;
