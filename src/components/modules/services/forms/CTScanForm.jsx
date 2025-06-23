import BaseForm from "../../BaseForm";

const CTScanForm = ({ serviceToEdit, onSave, onCancel }) => {
  const fields = {
    patientName: { label: "Nombre del Paciente", type: "text", required: true },
    region: { label: "Región Anatómica", type: "select", required: true, options: [
      { value: "craneal", label: "Craneal" },
      { value: "abdomen", label: "Abdomen" },
      { value: "torax", label: "Tórax" },
      { value: "columna", label: "Columna" },
    ]},
    protocol: { label: "Protocolo", type: "select", required: true, options: [
      { value: "simple", label: "Simple" },
      { value: "contraste", label: "Con Contraste" },
    ]},
    kvp: { label: "kVp", type: "number", required: true },
    mas: { label: "mAs", type: "number", required: true },
    sliceThickness: { label: "Espesor de Corte (mm)", type: "number" },
    pitch: { label: "Pitch", type: "number" },
    doctor: { label: "Médico Solicitante", type: "text", required: true },
    date: { label: "Fecha", type: "date", required: true },
    time: { label: "Hora", type: "time", required: true },
    technicalNotes: { label: "Observaciones Técnicas", type: "textarea" },
  };

  const defaultValues = {
    patientName: "",
    region: "",
    protocol: "",
    kvp: "",
    mas: "",
    sliceThickness: "",
    pitch: "",
    doctor: "",
    date: new Date().toISOString().split("T")[0],
    time: "",
    technicalNotes: "",
  };

  return (
    <BaseForm
      itemToEdit={serviceToEdit}
      onSave={onSave}
      onCancel={onCancel}
      fields={fields}
      entityType="Tomografía"
      colorScheme="blue"
      defaultValues={defaultValues}
    />
  );
};

export default CTScanForm;