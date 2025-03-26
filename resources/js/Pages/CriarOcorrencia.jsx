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
        latitude: "",
        longitude: "",
        imagem: null,
    });

    const handleFileChange = (e) => {
        setData("imagem", e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("nome_rodovia", data.nome_rodovia);
        formData.append("trecho", data.trecho);
        formData.append("tipo_problema", data.tipo_problema);
        formData.append("data_ocorrencia", data.data_ocorrencia);
        formData.append("latitude", data.latitude);
        formData.append("longitude", data.longitude);
        formData.append("data_ocorrencia", data.data_ocorrencia);
        formData.append("descricao", data.descricao);
        if (data.imagem) {
            formData.append("imagem", data.imagem);
        }

        post(route("ocorrencias.store"), {
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    };

    return (
        <ConteinerBackground>
            <Container>
                <Titulo>Nova Ocorrência</Titulo>
                <Formulario onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        placeholder="Nome da Rodovia"
                        value={data.nome_rodovia}
                        onChange={(e) =>
                            setData("nome_rodovia", e.target.value)
                        }
                    />
                    <Input
                        type="text"
                        placeholder="Trecho"
                        value={data.trecho}
                        onChange={(e) => setData("trecho", e.target.value)}
                    />
                    <Input
                        type="number"
                        placeholder="Latitude"
                        value={data.latitude}
                        onChange={(e) => setData("latitude", e.target.value)}
                    />
                    <Input
                        type="number"
                        placeholder="Longitude"
                        value={data.longitude}
                        onChange={(e) => setData("longitude", e.target.value)}
                    />

                    <select
                        value={data.tipo_problema}
                        onChange={(e) =>
                            setData("tipo_problema", e.target.value)
                        }
                        placeholder="Tipo de Problema"
                    >
                        <option value="" disabled>
                            Tipo de Problema
                        </option>
                        <option value="buraco">buraco</option>
                        <option value="sinalização danificada">
                            sinalização danificada
                        </option>
                        <option value="erosão">erosão</option>{" "}
                        {/* Corrigido com acento */}
                        <option value="alagamento">alagamento</option>
                        <option value="outro">outro</option>
                    </select>
                    <Input
                        type="date"
                        value={data.data_ocorrencia}
                        onChange={(e) =>
                            setData("data_ocorrencia", e.target.value)
                        }
                    />
                    <Input
                        type="textarea"
                        rows="5"
                        cols="33"
                        placeholder="Descrição"
                        value={data.descricao}
                        onChange={(e) => setData("descricao", e.target.value)}
                    />
                    <Input
                        type="file"
                        onChange={handleFileChange}
                        accept="image/*"
                    />
                    <Botao type="submit" disabled={processing}>
                        {processing ? "Enviando..." : "Cadastrar"}
                    </Botao>
                </Formulario>
                <Link href="/dashboard">
                    <HomeButton>Inicio</HomeButton>
                </Link>
            </Container>
        </ConteinerBackground>
    );
}

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
    margin: 40px auto;
    padding: 20px;
    background: #4ebaf5;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Titulo = styled.h2`
    text-align: center;
    color: #f3fbf6;
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: bold;
    letter-spacing: 0.1em;
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
const HomeButton = styled.p`
    font-size: 16px;
    text-align: center;
    color: #f3fbf6;
    margin-top: 32px;
    cursor: pointer;
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
