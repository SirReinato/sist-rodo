import React, { useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import styled from "styled-components";

const EditarOcorrencia = ({ ocorrencia }) => {
    const { data, setData, put, processing, errors } = useForm({
        nome_rodovia: ocorrencia.nome_rodovia,
        trecho: ocorrencia.trecho,
        tipo_problema: ocorrencia.tipo_problema,
        data_ocorrencia: ocorrencia.data_ocorrencia,
        descricao: ocorrencia.descricao || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/ocorrencias/${ocorrencia.id}`, data);
    };

    return (
        <ConteinerBackground>
            <Container>
                <Titulo>Editar Ocorrência</Titulo>
                <Formulario onSubmit={handleSubmit}>
                    <Label>Rodovia:</Label>
                    <Input
                        type="text"
                        value={data.nome_rodovia}
                        onChange={(e) =>
                            setData("nome_rodovia", e.target.value)
                        }
                    />
                    {errors.nome_rodovia && <Erro>{errors.nome_rodovia}</Erro>}

                    <Label>Trecho:</Label>
                    <Input
                        type="text"
                        value={data.trecho}
                        onChange={(e) => setData("trecho", e.target.value)}
                    />
                    {errors.trecho && <Erro>{errors.trecho}</Erro>}

                    <Label>Problema:</Label>
                    <Select
                        value={data.tipo_problema}
                        onChange={(e) =>
                            setData("tipo_problema", e.target.value)
                        }
                    >
                        <option value="" disabled>
                            Selecione um problema
                        </option>
                        <option value="buraco">Buraco</option>
                        <option value="sinalização danificada">
                            Sinalização danificada
                        </option>
                        <option value="erosão">Erosão</option>
                        <option value="alagamento">Alagamento</option>
                        <option value="outro">Outro</option>
                    </Select>
                    {errors.tipo_problema && (
                        <Erro>{errors.tipo_problema}</Erro>
                    )}
                    <Label>Data:</Label>
                    <Input
                        type="date"
                        value={data.data_ocorrencia}
                        onChange={(e) =>
                            setData("data_ocorrencia", e.target.value)
                        }
                    />
                    {errors.data_ocorrencia && (
                        <Erro>{errors.data_ocorrencia}</Erro>
                    )}

                    <Label>Descrição:</Label>
                    <TextArea
                        value={data.descricao}
                        onChange={(e) => setData("descricao", e.target.value)}
                    />

                    <Botao type="submit" disabled={processing}>
                        {processing ? "Salvando..." : "Salvar Alterações"}
                    </Botao>
                </Formulario>
                <Link href="/dashboard">
                    <HomeButton>Inicio</HomeButton>
                </Link>
            </Container>
        </ConteinerBackground>
    );
};

export default EditarOcorrencia;

const ConteinerBackground = styled.div`
    background: linear-gradient(to right, #242437, #1e1e30);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    height: 100%;
`;
const Container = styled.div`
    max-width: 500px;
    min-width: 300px;
    margin: 0 auto;
    padding: 20px;
    background: #4ebaf5;

    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`;

const Titulo = styled.h2`
    text-align: center;
    color: #333;
`;

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    font-weight: bold;
    margin-top: 10px;
`;

const Input = styled.input`
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;
const Select = styled.select`
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;
const TextArea = styled.textarea`
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const Erro = styled.span`
    color: red;
    font-size: 12px;
`;

const Botao = styled.button`
    background-color: #007bff;
    color: white;
    padding: 10px;
    margin-top: 20px;
    border: none;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
        background-color: #0056b3;
    }
`;
const HomeButton = styled.p`
    font-size: 16px;
    text-align: center;
    color: #f3fbf6;
    margin-top: 32px;
    cursor: pointer;
`;
