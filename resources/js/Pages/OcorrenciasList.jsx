import React, { useState, useEffect } from "react";
import axios from "axios";

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
        <div>
            <h1>Lista de Ocorrências</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Rodovia</th>
                        <th>Trecho</th>
                        <th>Problema</th>
                        <th>Data</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    {ocorrencias.length > 0 ? (
                        ocorrencias.map((ocorrencia) => (
                            <tr key={ocorrencia.id}>
                                <td>{ocorrencia.id}</td>
                                <td>{ocorrencia.nome_rodovia}</td>
                                <td>{ocorrencia.trecho}</td>
                                <td>{ocorrencia.tipo_problema}</td>
                                <td>{ocorrencia.data_ocorrencia}</td>
                                <td>{ocorrencia.descricao}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">Nenhuma ocorrência encontrada.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Ocorrencias;
