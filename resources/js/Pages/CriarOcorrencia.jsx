import { useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import styled from "styled-components";

export default function CriarOcorrencia() {
    const { data, setData, post, processing, errors } = useForm({
        nome_rodovia: "",
        trecho: "",
        tipo_problema: "",
        data_ocorrencia: "",
        descricao: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("ocorrencias.store"));
    };

    return (
        <Container>
            <Titulo>Nova Ocorrência</Titulo>
            <Formulario onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Nome da Rodovia"
                    value={data.nome_rodovia}
                    onChange={(e) => setData("nome_rodovia", e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Trecho"
                    value={data.trecho}
                    onChange={(e) => setData("trecho", e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Tipo de Problema"
                    value={data.tipo_problema}
                    onChange={(e) => setData("tipo_problema", e.target.value)}
                />
                <Input
                    type="date"
                    value={data.data_ocorrencia}
                    onChange={(e) => setData("data_ocorrencia", e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Descrição"
                    value={data.descricao}
                    onChange={(e) => setData("descricao", e.target.value)}
                />
                <Botao type="submit" disabled={processing}>
                    {processing ? "Enviando..." : "Cadastrar"}
                </Botao>
            </Formulario>
            <Link href="/dashboard">Inicio</Link>
        </Container>
    );
}

const Container = styled.div`
    max-width: 500px;
    margin: 40px auto;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Titulo = styled.h2`
    text-align: center;
    color: #333;
`;

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const Botao = styled.button`
    background: #007bff;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background: #0056b3;
    }
`;
