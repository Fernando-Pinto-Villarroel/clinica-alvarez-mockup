import { useState } from "react";
import ServiceFormRouter from "./ServiceFormRouter";

export default function ServiceForm(props) {
  const [selectedType, setSelectedType] = useState("");

  if (!selectedType) {
    return (
      <div style={{ maxWidth: 400, margin: "2rem auto", padding: 24, borderRadius: 8, boxShadow: "0 2px 8px #0002", background: "#fff" }}>
        <label style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: 12, display: "block" }}>
          Seleccione el tipo de servicio:
        </label>
        <select
          value={selectedType}
          onChange={e => setSelectedType(e.target.value)}
          style={{
            width: "100%",
            padding: "0.75rem",
            fontSize: "1.1rem",
            borderRadius: 6,
            border: "1px solid #bbb",
            marginBottom: 8,
            background: "#f9f9f9"
          }}
        >
          <option value="" disabled style={{ color: "#888", fontSize: "1.1rem" }}>
            -- Seleccione un servicio --
          </option>
          <option value="rayos_x">Rayos X</option>
          <option value="tomografia">Tomografía Computada (TAC)</option>
          <option value="ecografia">Ecografía</option>
          <option value="laboratorio">Laboratorio</option>
          <option value="ecg">Electrocardiograma (ECG)</option>
          <option value="mamografia">Mamografía</option>
        </select>
      </div>
    );
  }

  return <ServiceFormRouter serviceType={selectedType} {...props} />;
}