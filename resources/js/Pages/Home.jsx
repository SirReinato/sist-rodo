import { Head, Link } from "@inertiajs/react";
import styled from "styled-components";
import banner from "../../../public/assets/imgs/bg-banner.png";
import card from "../../../public/assets/imgs/estradas.png";
import ItensMenu from "@/Components/ItensMenu";
import CardsWelcome from "@/Components/CardsWelcome";

export default function Home({ auth }) {
    return (
        <>
            <Head title="Home" />
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
                    <ConteinerTexto>
                        <ParagrafoBanner>
                            Conectando Você às Informações e Soluções para um
                            Trânsito Mais Seguro
                        </ParagrafoBanner>
                    </ConteinerTexto>
                    <ConteinerCards>
                        <Card>
                            <CardsWelcome
                                texto={"São  aproximadamente"}
                                destaque={"75.000 Km Em Rodovias"}
                            />
                        </Card>
                    </ConteinerCards>
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
    tablet: "835px",
    laptop: "1024px",
    desktop: "1440px",
};

const ContainerGeral = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
    padding: 120px 120px 64px 120px;
    background: #1e1e30;
    @media (max-width: ${breakpoints.desktop}) {
        padding: 60px 80px 30px 80px;
    }
    @media (max-width: ${breakpoints.laptop}) {
        padding: 80px 80px 48px 80px;
    }

    @media (max-width: ${breakpoints.tablet}) {
        padding: 80px 20px 32px 20px;
        flex-direction: column;
        justify-content: flex-start;
    }

    @media (max-width: ${breakpoints.mobileL}) {
        padding: 120px 20px 24px 20px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: ${breakpoints.mobileS}) {
        padding: 30px 15px 16px 15px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const ContainerMenu = styled.header`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: absolute;
    top: 64px;
    left: 10%;
    border-radius: 48px;
    padding: 32px;
    background: #1e1e30;
    @media (max-width: ${breakpoints.desktop}) {
        padding: 16px 32px;
        top: 10px;
        left: 10%;
    }
    @media (max-width: ${breakpoints.laptop}) {
        padding: 24px;
        top: 48px;
        left: 5%;
        width: 90%;
    }

    @media (max-width: ${breakpoints.tablet}) {
        padding: 16px;
        top: 32px;
        left: 10%;
        width: 80%;
    }

    @media (max-width: ${breakpoints.mobileL}) {
        flex-direction: column;
        align-items: center;
        gap: 16px;
        padding: 12px;
        top: 24px;
        left: 15%;
        width: 70%;
    }
`;

const NavMenu = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #203452;
    border-radius: 18px;

    @media (max-width: ${breakpoints.mobileL}) {
        flex-direction: column;
        gap: 12px;
        padding: 10px;
        width: 80%;
        text-align: center;
    }
`;
const TituloBanner = styled.h1`
    color: #f3fbf6;
    font-size: 48px;
    font-weight: bold;
    padding-left: 8px;
    letter-spacing: 0.1em;
    text-align: center;
    margin-bottom: 16px;
    font-family: "Roboto", sans-serif;
    line-height: 70px;

    @media (max-width: ${breakpoints.laptop}) {
        font-size: 42px;
        line-height: 60px;
    }

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 32px;
        line-height: 45px;
    }

    @media (max-width: ${breakpoints.mobileL}) {
        font-size: 26px;
        line-height: 35px;
        width: 100%;
        text-align: left;
        padding-left: 0;
    }

    @media (max-width: ${breakpoints.mobileS}) {
        font-size: 20px;
        line-height: 28px;
    }
`;

const ConteinerBanner = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 48px 0 0 48px;
    border-radius: 48px;
    background: #fff;
    background: url(${banner}) no-repeat center;
    background-size: cover;
    box-sizing: border-box;
    @media (max-width: ${breakpoints.tablet}) {
        padding: 32px;
        border-radius: 32px;
        flex-direction: column;
        align-items: center;
        background-position: top center;
    }

    @media (max-width: ${breakpoints.mobileL}) {
        padding: 24px;
        border-radius: 24px;
        justify-content: center;
    }

    @media (max-width: ${breakpoints.mobileS}) {
        padding: 16px;
        border-radius: 16px;
        justify-content: center;
    }
`;

const ConteinerTexto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 40%;
    @media (max-width: ${breakpoints.tablet}) {
        width: 100%;
        height: 100%;
    }
`;

const ConteinerCards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;

    @media (max-width: ${breakpoints.tablet}) {
        display: none;
    }
`;
const Card = styled.div`
    background: url(${card}) no-repeat center;
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: start;
    margin-right: -13px;
    width: 450px;
    height: 60%;
    @media (max-width: ${breakpoints.desktop}) {
        margin-right: -15px;
        width: 450px;
        height: 80%;
    }
    @media (max-width: ${breakpoints.laptop}) {
        width: 400px;
        height: 55%;
    }
`;
const ParagrafoBanner = styled.h3`
    color: #f3fbf6;
    font-size: 42px;
    letter-spacing: 0.1em;

    font-family: "Roboto", sans-serif;
    line-height: 56px;
    font-weight: bold;
    @media (max-width: ${breakpoints.desktop}) {
        font-size: 32px;
    }
    @media (max-width: ${breakpoints.laptop}) {
        font-size: 28px;
        line-height: 38px;
    }

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 32px;
        line-height: 50px;
        text-align: center;
        padding: 16px;
    }

    @media (max-width: ${breakpoints.mobileL}) {
        font-size: 22px;
        line-height: 24px;
        padding: 0 10px;
    }

    @media (max-width: ${breakpoints.mobileS}) {
        font-size: 22px;
        line-height: 22px;
    }
`;
