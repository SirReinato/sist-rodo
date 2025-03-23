import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link, useForm } from "@inertiajs/react";
import { getOcorrencias } from "../services/api";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import { LatLng } from "leaflet";

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
                    <option value="acidente">Acidente</option>
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
                                <Celula>{ocorrencia.tipo_problema}</Celula>
                                <Celula>{ocorrencia.data_ocorrencia}</Celula>
                                <Celula>{ocorrencia.descricao}</Celula>
                                <Celula>
                                    {ocorrencia.imagem ? (
                                        <img
                                            src={`storage/${ocorrencia.imagem}`}
                                            alt="Imagem da Ocorrência"
                                            width="100" // Pode ajustar o tamanho da imagem
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
                                        <StyledButton>Editar</StyledButton>
                                    </Link>
                                    <ExcluirBotao
                                        onClick={() =>
                                            handleDelete(ocorrencia.id)
                                        }
                                        disabled={processing}
                                    >
                                        {processing
                                            ? "Excluindo..."
                                            : "Excluir"}
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

            {/* Mapa com as ocorrências
            <MapContainer
                center={[-23.5505, -46.6333]}
                zoom={12}
                style={{ width: "100%", height: "400px" }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {ocorrencias.map((ocorrencia) => (
                    <Marker
                        key={ocorrencia.id}
                        position={[
                            parseFloat(ocorrencia.latitude),
                            parseFloat(ocorrencia.longitude),
                        ]}
                    >
                        <Popup>
                            <div>
                                <h4>{ocorrencia.nome_rodovia}</h4>
                                <p>{ocorrencia.tipo_problema}</p>
                                <p>{ocorrencia.data_ocorrencia}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer> */}
        </ContainerGeral>
    );
};

export default Ocorrencias;

const ContainerGeral = styled.div`
    background-color: #f3fbf6;
    /* min-height: 100vh; */
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const ContainerCabecalho = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
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

const StyledButton = styled.button`
    background-color: #75ceff;
    color: #1e1e30;
    padding: 0.5rem 1rem;
    font-weight: bold;
    font-size: 1.2rem;
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
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    font-weight: bold;
    font-size: 1.2rem;
    margin-left: 2px;
    &:hover {
        background-color: #c82333;
    }
`;
