import { Head, Link } from "@inertiajs/react";
import Ocorrencias from "./OcorrenciasList";
import styled from "styled-components";
import logo from "../../../public/assets/imgs/Logo.png";
import ItensMenu from "@/Components/ItensMenu";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <ContainerGeral>
                <ContainerMenu>
                    <img src={logo} alt="Logo do site" />
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
            </ContainerGeral>
        </>
    );
}

const ContainerGeral = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: #f4f4f4;
`;

const ContainerMenu = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px 120px;
`;

const NavMenu = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
`;
