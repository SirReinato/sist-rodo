import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useForm } from "@inertiajs/react";
import { getOcorrencias } from "../services/api";
import Mapa from "@/Components/Mapa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";

const Ocorrencias = () => {
    const [ocorrencias, setOcorrencias] = useState([]);
    const [filtros, setFiltros] = useState({
        rodovia: "",
        tipo_problema: "",
        data_ocorrencia: "",
    });

    useEffect(() => {
        carregarOcorrencias();
    }, [filtros]);

    const carregarOcorrencias = async () => {
        const dados = await getOcorrencias(filtros);
        setOcorrencias(dados);
    };

    const handleChange = (e) => {
        setFiltros({ ...filtros, [e.target.name]: e.target.value });
    };

    const { delete: destroy, processing } = useForm();

    // Deletar ocorrencia
    const handleDelete = (id) => {
        if (confirm("Tem certeza que deseja excluir esta ocorrência?")) {
            destroy(`/ocorrencias/${id}`, {
                onSuccess: () => {
                    setOcorrencias(
                        ocorrencias.filter((ocorrencia) => ocorrencia.id !== id)
                    );
                },
            });
        }
    };
    return (
        <ContainerGeral>
            {/* header */}
            <ContainerCabecalho>
                <Titulo>Lista de Ocorrências</Titulo>
                <Link href="/criar-ocorrencia">
                    <StyledButton>Criar Ocorrência</StyledButton>
                </Link>
            </ContainerCabecalho>

            {/* filtros */}
            <FiltrosContainer>
                <InputFiltro
                    type="text"
                    name="rodovia"
                    placeholder="Rodovia"
                    value={filtros.rodovia}
                    onChange={handleChange}
                />
                <SelectFiltro
                    name="tipo_problema"
                    value={filtros.tipo_problema}
                    onChange={handleChange}
                >
                    <option value="">Todos os problemas</option>
                    <option value="buraco">Buraco</option>
                    <option value="erosão">Erosão</option>
                    <option value="sinalização danificada">
                        Sinalização Sanificada
                    </option>
                    <option value="alagamento">Alagamento</option>
                </SelectFiltro>
                <InputFiltro
                    type="date"
                    name="data_ocorrencia"
                    value={filtros.data_ocorrencia}
                    onChange={handleChange}
                />
            </FiltrosContainer>

            {/* tablas */}
            <Tabela>
                <CabecalhoTabela>
                    <tr>
                        <CelulaCabecalho>Rodovia</CelulaCabecalho>
                        <CelulaCabecalho>Trecho</CelulaCabecalho>
                        <CelulaCabecalho>lat - log</CelulaCabecalho>
                        <CelulaCabecalho>Problema</CelulaCabecalho>
                        <CelulaCabecalho>Data</CelulaCabecalho>
                        <CelulaCabecalho>Descrição</CelulaCabecalho>
                        {/* <CelulaCabecalho>Foto</CelulaCabecalho> */}
                        <CelulaCabecalho>Ações</CelulaCabecalho>
                    </tr>
                </CabecalhoTabela>
                <tbody>
                    {ocorrencias.length > 0 ? (
                        ocorrencias.map((ocorrencia) => (
                            <LinhaTabela key={ocorrencia.id}>
                                <Celula>{ocorrencia.nome_rodovia}</Celula>
                                <Celula>{ocorrencia.trecho}</Celula>
                                <Celula>{`${ocorrencia.latitude} -- ${ocorrencia.longitude}`}</Celula>
                                <Celula>{ocorrencia.tipo_problema}</Celula>
                                <Celula>{ocorrencia.data_ocorrencia}</Celula>
                                <Celula>{ocorrencia.descricao}</Celula>

                                {/* Inserir futuramente */}
                                {/* <Celula>
                                    {ocorrencia.imagem ? (
                                        <img
                                            src={`/storage/${ocorrencia.imagem}`}
                                            alt="Imagem da Ocorrência"
                                            width="10"
                                            height="auto"
                                        />
                                    ) : (
                                        "Sem imagem"
                                    )}
                                </Celula> */}
                                <Celula>
                                    <Link
                                        href={`/ocorrencias/${ocorrencia.id}/editar`}
                                    >
                                        <StyledButton>
                                            <MdOutlineModeEdit />
                                        </StyledButton>
                                    </Link>
                                    <ExcluirBotao
                                        onClick={() =>
                                            handleDelete(ocorrencia.id)
                                        }
                                        disabled={processing}
                                    >
                                        {processing ? (
                                            "Excluindo..."
                                        ) : (
                                            <RiDeleteBin5Line />
                                        )}
                                    </ExcluirBotao>
                                </Celula>
                            </LinhaTabela>
                        ))
                    ) : (
                        <LinhaAlerta>
                            <td colSpan="6">Nenhuma ocorrência encontrada.</td>
                        </LinhaAlerta>
                    )}
                </tbody>
            </Tabela>

            {/* Mapa */}
            <MapaContainer>
                <Mapa ocorrencias={ocorrencias} />
            </MapaContainer>
        </ContainerGeral>
    );
};

export default Ocorrencias;

export const breakpoints = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "429px",
    tablet: "835px",
    laptop: "1024px",
    desktop: "1440px",
};

const ContainerGeral = styled.div`
    width: 100%;
    border-radius: 32px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: ${breakpoints.mobileL}) {
        padding: 15px;
        border-radius: 20px;
    }
`;
const ContainerCabecalho = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media (max-width: ${breakpoints.mobileM}) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const Titulo = styled.h1`
    color: #333333;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
    @media (max-width: ${breakpoints.mobileL}) {
        font-size: 24px;
        margin-bottom: 15px;
    }
`;

const FiltrosContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 16px;
    @media (max-width: ${breakpoints.mobileL}) {
        flex-wrap: wrap;
        justify-content: start;

        justify-content: center;
        align-items: center;
    }
    @media (max-width: ${breakpoints.mobileM}) {
        gap: 8px;
        justify-content: center;
    }
`;

const InputFiltro = styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    min-width: 30%;
    max-width: 31%;
    @media (max-width: ${breakpoints.tablet}) {
    }
    @media (min-width: ${breakpoints.mobileS}) {
        width: 100%;
    }
`;

const SelectFiltro = styled.select`
    width: 200px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    @media (max-width: ${breakpoints.mobileL}) {
        width: 100%;
    }
`;

const Tabela = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: #b7e3fc;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin: 20px 0;
    overflow: hidden;
    @media (max-width: ${breakpoints.tablet}) {
        font-size: 12px;
    }
    @media (max-width: ${breakpoints.mobileL}) {
        font-size: 10px;
    }
`;

const CabecalhoTabela = styled.thead`
    background-color: #007bff;
    color: white;
`;

const CelulaCabecalho = styled.th`
    padding: 12px;
    text-align: start;
    font-size: 16px;
    @media (max-width: ${breakpoints.tablet}) {
        padding: 8px;
        font-size: 14px;
    }
`;

const Celula = styled.td`
    max-width: 350px;
    padding: 8px;
    color: #555555;
    font-size: 14px;
    word-break: break-word;
    @media (max-width: ${breakpoints.tablet}) {
        padding: 6px;
        font-size: 12px;
    }
`;

const LinhaTabela = styled.tr`
    &:nth-child(even) {
        background-color: #f8f8f8;
    }
`;

const LinhaAlerta = styled.tr`
    td {
        color: #ff5733; /* Alerta */
        font-weight: bold;
        text-align: center;
        padding: 20px;
        @media (max-width: ${breakpoints.mobileL}) {
            padding: 15px;
            font-size: 14px;
        }
    }
`;

const StyledButton = styled.button`
    background-color: #75ceff;
    color: #1e1e30;
    padding: 0.5rem;
    font-weight: bold;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        color: #75ceff;
        background-color: #1a2e4e;
    }
    @media (max-width: ${breakpoints.mobileL}) {
        font-size: 0.9rem;
        padding: 0.4rem;
    }
`;
const ExcluirBotao = styled.button`
    background-color: #e13600;
    color: white;
    padding: 0.5rem;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    font-weight: bold;
    font-size: 1rem;
    margin-left: 2px;
    &:hover {
        background-color: #c82333;
    }
    @media (max-width: ${breakpoints.mobileL}) {
        font-size: 0.9rem;
        padding: 0.4rem;
        margin-left: 0;
        margin-top: 5px; /* Adiciona um pouco de espaço acima em telas menores */
    }
`;

const MapaContainer = styled.div`
    width: 80%;
    height: 400px;
    margin-top: 64px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #f3fbf6;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    @media (max-width: ${breakpoints.laptop}) {
        width: 90%;
        height: 300px;
        margin-top: 40px;
    }

    @media (max-width: ${breakpoints.tablet}) {
        height: 250px;
        margin-top: 30px;
    }

    @media (max-width: ${breakpoints.mobileL}) {
        width: 95%;
        height: 200px;
        margin-top: 20px;
    }

    @media (max-width: ${breakpoints.mobileS}) {
        height: 150px;
    }
`;
