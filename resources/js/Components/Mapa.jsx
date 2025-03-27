import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Mapa = ({ ocorrencias }) => {
    const center = [-15.8706, -48.0902]; // Brasília

    return (
        <MapContainer
            center={center}
            zoom={12}
            style={{ height: "400px", width: "100%" }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {ocorrencias?.length > 0 &&
                ocorrencias.map((ocorrencia, index) =>
                    ocorrencia.latitude && ocorrencia.longitude ? (
                        <Marker
                            key={index}
                            position={[
                                parseFloat(ocorrencia.latitude),
                                parseFloat(ocorrencia.longitude),
                            ]}
                        >
                            <Popup>
                                <strong>
                                    {ocorrencia?.nome_rodovia ||
                                        "Rodovia desconhecida"}
                                </strong>
                                <br />
                                {ocorrencia?.descricao ||
                                    "Sem descrição disponível"}
                            </Popup>
                        </Marker>
                    ) : null
                )}
        </MapContainer>
    );
};

export default Mapa;
