import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/Components/ui/dialog";
import { Button } from "@/Components/ui/button";
import styled from "styled-components";

const ModalVisualizacaoOcorrencia = ({ ocorrencia, open, onClose }) => {
    if (!ocorrencia) return null;

    return (
        <ContainerStyled>
            <Dialog open={open} onOpenChange={onClose}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Detalhes da Ocorrência</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col items-center">
                        {ocorrencia.imagem && (
                            <img
                                src={`/storage/${ocorrencia.imagem}`}
                                alt="Imagem da ocorrência"
                                className="w-full max-h-80 object-cover rounded-lg"
                            />
                        )}
                        <div className="mt-4 text-left w-full">
                            <p>
                                <strong>Rodovia:</strong>{" "}
                                {ocorrencia.nome_rodovia}
                            </p>
                            <p>
                                <strong>Trecho:</strong> {ocorrencia.trecho}
                            </p>
                            <p>
                                <strong>Tipo:</strong>{" "}
                                {ocorrencia.tipo_problema}
                            </p>
                            <p>
                                <strong>Data:</strong>{" "}
                                {ocorrencia.data_ocorrencia}
                            </p>
                            <p>
                                <strong>Descrição:</strong>{" "}
                                {ocorrencia.descricao || "Sem descrição"}
                            </p>
                        </div>
                        <Button onClick={onClose} className="mt-4">
                            Fechar
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </ContainerStyled>
    );
};

export default ModalVisualizacaoOcorrencia;

const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    margin-bottom: 50px;
    height: 100%;
    width: 500px;
`;
