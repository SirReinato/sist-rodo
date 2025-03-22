import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000",
});

export const getOcorrencias = async (filtros) => {
    try {
        const response = await api.get("/ocorrencias", { params: filtros });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar ocorrências:", error);
        return [];
    }
};

export default api;
