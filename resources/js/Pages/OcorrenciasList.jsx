import React, { useState, useEffect } from "react";
import axios from "axios";
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
                        <CelulaCabecalho>Foto</CelulaCabecalho>
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
                                <Celula>
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
                                </Celula>
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

const ContainerGeral = styled.div`
    width: 100%;
    border-radius: 32px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const ContainerCabecalho = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const Titulo = styled.h1`
    color: #333333;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const FiltrosContainer = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
`;

const InputFiltro = styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const SelectFiltro = styled.select`
    width: 200px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const Tabela = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: #b7e3fc;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
`;

const CabecalhoTabela = styled.thead`
    background-color: #007bff; /* Azul destaque */
    color: white;
`;

const CelulaCabecalho = styled.th`
    padding: 12px;
    text-align: start;
    font-size: 16px;
`;

const Celula = styled.td`
    max-width: 350px;
    padding: 8px;
    color: #555555; /* Texto secundário */
    font-size: 14px;
`;

const LinhaTabela = styled.tr`
    &:nth-child(even) {
        background-color: #f8f8f8; /* Alternância de cores */
    }
`;

const LinhaAlerta = styled.tr`
    td {
        color: #ff5733; /* Alerta */
        font-weight: bold;
        text-align: center;
        padding: 20px;
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
`;
