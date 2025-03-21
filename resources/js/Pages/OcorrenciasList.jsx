import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Ocorrencias = () => {
    const [ocorrencias, setOcorrencias] = useState([]);

    useEffect(() => {
        // Requisição para a API Laravel
        axios
            .get("http://127.0.0.1:8000/ocorrencias")
            .then((response) => {
                setOcorrencias(response.data); // Definindo as ocorrências no estado
            })
            .catch((error) => {
                console.error("Erro ao carregar as ocorrências:", error);
            });
    }, []);

    return (
        <ContainerGeral>
            <Titulo>Lista de Ocorrências</Titulo>
            <Tabela>
                <CabecalhoTabela>
                    <tr>
                        <CelulaCabecalho>ID</CelulaCabecalho>
                        <CelulaCabecalho>Rodovia</CelulaCabecalho>
                        <CelulaCabecalho>Trecho</CelulaCabecalho>
                        <CelulaCabecalho>Problema</CelulaCabecalho>
                        <CelulaCabecalho>Data</CelulaCabecalho>
                        <CelulaCabecalho>Descrição</CelulaCabecalho>
                    </tr>
                </CabecalhoTabela>
                <tbody>
                    {ocorrencias.length > 0 ? (
                        ocorrencias.map((ocorrencia) => (
                            <LinhaTabela key={ocorrencia.id}>
                                <Celula>{ocorrencia.id}</Celula>
                                <Celula>{ocorrencia.nome_rodovia}</Celula>
                                <Celula>{ocorrencia.trecho}</Celula>
                                <Celula>{ocorrencia.tipo_problema}</Celula>
                                <Celula>{ocorrencia.data_ocorrencia}</Celula>
                                <Celula>{ocorrencia.descricao}</Celula>
                            </LinhaTabela>
                        ))
                    ) : (
                        <LinhaAlerta>
                            <td colSpan="6">Nenhuma ocorrência encontrada.</td>
                        </LinhaAlerta>
                    )}
                </tbody>
            </Tabela>
        </ContainerGeral>
    );
};

export default Ocorrencias;

const ContainerGeral = styled.div`
    background-color: #f4f4f4;
    /* min-height: 100vh; */
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Titulo = styled.h1`
    color: #333333;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const Tabela = styled.table`
    width: 90%;
    max-width: 1000px;
    border-collapse: collapse;
    background-color: #fff;
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
    text-align: left;
    font-size: 16px;
`;

const Celula = styled.td`
    padding: 12px;
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
