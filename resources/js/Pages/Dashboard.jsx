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
            <Head title="Ocorrências" />

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
export const breakpoints = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "429px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "1440px",
};
const ContainerGeral = styled.div`
    margin-top: 32px;
    width: 100%;
    @media (max-width: ${breakpoints.mobileL}) {
        margin-top: 20px;
    }
`;

const ContainerCentral = styled.div`
    width: 100%;
    padding: 0 120px;
    @media (max-width: ${breakpoints.laptop}) {
        padding: 0 60px;
    }

    @media (max-width: ${breakpoints.tablet}) {
        padding: 0 30px;
    }

    @media (max-width: ${breakpoints.mobileL}) {
        padding: 0;
    }
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
    @media (max-width: ${breakpoints.laptop}) {
        border-radius: 24px;
        border-width: 24px;
    }

    @media (max-width: ${breakpoints.tablet}) {
        border-radius: 16px;
        border-width: 16px;
    }

    @media (max-width: ${breakpoints.mobileL}) {
        border-radius: 12px;
        border-width: 12px;
    }
`;
