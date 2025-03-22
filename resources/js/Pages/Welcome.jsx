import { Head, Link } from "@inertiajs/react";
import Ocorrencias from "./OcorrenciasList";
import styled from "styled-components";
import banner from "../../../public/assets/imgs/estradas.png";
import ItensMenu from "@/Components/ItensMenu";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <ContainerGeral>
                <ContainerMenu>
                    <Link href="/">
                        <TituloBanner>Pelas Estradas</TituloBanner>
                    </Link>
                    <NavMenu>
                        {auth.user ? (
                            <ItensMenu rota="dashboard" nome="Dashboard" />
                        ) : (
                            <>
                                <ItensMenu rota={"login"} nome={"Login"} />

                                <ItensMenu
                                    rota={"register"}
                                    nome={"Registrar"}
                                />
                            </>
                        )}
                    </NavMenu>
                </ContainerMenu>

                <ConteinerBanner>
                    <Banner>
                        <ParagrafoBanner>
                            Conectando Você às Informações e Soluções para um
                            Trânsito Mais Seguro
                        </ParagrafoBanner>
                    </Banner>
                    <ImgBanner />
                </ConteinerBanner>
            </ContainerGeral>
        </>
    );
}

// Definição dos breakpoints
export const breakpoints = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "429px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "1440px",
};

const ContainerGeral = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100%;
    padding: 32px 120px;
    background: #1e1e30;
`;

const ContainerMenu = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 32px 0;
    background: linear-gradient(to right, #203452, #1e1e30);

    @media (max-width: ${breakpoints.laptop}) {
        padding: 16px 0;
    }

    @media (max-width: ${breakpoints.tablet}) {
        padding: 16px 0;
    }

    @media (max-width: ${breakpoints.mobileL}) {
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }
`;

const NavMenu = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    border-radius: 18px;
    padding: 24px;
    background-color: #203452;
    @media (max-width: ${breakpoints.mobileL}) {
        flex-direction: column;
        gap: 12px;
    }
`;

const ConteinerBanner = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`;
const ImgBanner = styled.div`
    width: 100%;
    height: 100%;
    background: url(${banner}) no-repeat center;
    background-size: cover;
    border-radius: 16px;
`;

const Banner = styled.div`
    background: linear-gradient(to right, #203452, #1e1e30);
    background-size: cover;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    padding: 0 20px;

    @media (max-width: ${breakpoints.laptop}) {
        height: 90vh;
    }

    @media (max-width: ${breakpoints.tablet}) {
        height: 80vh;
    }

    @media (max-width: ${breakpoints.mobileL}) {
        height: 80vh;
    }
`;

export const TituloBanner = styled.h1`
    color: #f3fbf6;
    font-size: 64px;
    font-weight: bold;
    letter-spacing: 0.1em;
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

const ParagrafoBanner = styled.h3`
    color: #f3fbf6;
    font-size: 40px;
    letter-spacing: 0.1em;

    text-align: center;
    font-family: "Roboto", sans-serif;
    line-height: 48px;
    font-weight: bold;

    @media (max-width: ${breakpoints.laptop}) {
        font-size: 30px;
        line-height: 28px;
    }

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 24px;
        line-height: 26px;
    }

    @media (max-width: ${breakpoints.mobileL}) {
        font-size: 20px;
        line-height: 22px;
    }

    @media (max-width: ${breakpoints.mobileS}) {
        font-size: 18px;
        line-height: 20px;
    }
`;
