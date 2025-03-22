import { Head, Link } from "@inertiajs/react";
import Ocorrencias from "./OcorrenciasList";
import styled from "styled-components";
import logo from "../../../public/assets/imgs/Logo.png";
import banner from "../../../public/assets/imgs/bg-banner.png";
import ItensMenu from "@/Components/ItensMenu";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <ContainerGeral>
                <ContainerMenu>
                    <Link href="/">
                        <img
                            className="imgLogo"
                            src={logo}
                            alt="Logo do site"
                        />
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
                <Banner>
                    <TituloBanner>
                        Conectando Você às Informações e Soluções para um
                        Trânsito Mais Seguro
                    </TituloBanner>
                    <ParagrafoBanner>
                        Cadastre e visualize problemas nas rodovias em tempo
                        real.
                    </ParagrafoBanner>
                </Banner>
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
    background: linear-gradient(45deg, #ff5733, #555555);
`;

const ContainerMenu = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 16px 120px;
    @media (max-width: ${breakpoints.laptop}) {
        padding: 16px 80px;
    }

    @media (max-width: ${breakpoints.tablet}) {
        padding: 16px 40px;
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

    @media (max-width: ${breakpoints.mobileL}) {
        flex-direction: column;
        gap: 12px;
    }
`;

const Banner = styled.div`
    background: url(${banner}) no-repeat center;
    background-size: cover;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    width: 80%;
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

const ParagrafoBanner = styled.h3`
    color: #ff7f64;
    font-size: 36px;
    text-align: center;
    font-family: "Roboto", sans-serif;
    line-height: 30px;
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
