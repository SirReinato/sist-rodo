import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Ocorrencias from "./OcorrenciasList";
import styled from "styled-components";

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Ocorrências
                </h2>
            }
        >
            <Head title="Dashboard" />

            <ContainerGeral>
                <ContainerCentral>
                    <ConteinerPrincipal>
                        <Ocorrencias />
                    </ConteinerPrincipal>
                </ContainerCentral>
            </ContainerGeral>
        </AuthenticatedLayout>
    );
}

const ContainerGeral = styled.div`
    margin-top: 32px;
`;

const ContainerCentral = styled.div`
    width: 100%;
    padding: 0 120px;
`;

const ConteinerPrincipal = styled.div`
    width: 100%;
    background-color: #f3fbf6;
    border-radius: 32px;
    /* padding: 20px; */
    display: flex;
    border: #75ceff 32px solid;
    flex-direction: column;
    align-items: center;
`;
