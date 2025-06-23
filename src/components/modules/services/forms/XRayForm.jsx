import BaseForm from "../../BaseForm";

const XRayForm = ({ serviceToEdit, onSave, onCancel }) => {
  const fields = {
    patientName: { label: "Nombre del Paciente", type: "text", required: true },
    studyType: { label: "Tipo de Estudio", type: "select", required: true, options: [
      { value: "torax", label: "Tórax" },
      { value: "abdomen", label: "Abdomen" },
      { value: "extremidades", label: "Extremidades" },
      { value: "columna", label: "Columna" },
    ]},
    projection: { label: "Proyección", type: "select", required: true, options: [
      { value: "ap", label: "AP" },
      { value: "pa", label: "PA" },
      { value: "lateral", label: "Lateral" },
    ]},
    kvp: { label: "kVp", type: "number", required: true },
    mas: { label: "mAs", type: "number", required: true },
    doctor: { label: "Médico Solicitante", type: "text", required: true },
    date: { label: "Fecha", type: "date", required: true },
    time: { label: "Hora", type: "time", required: true },
    technicalNotes: { label: "Observaciones Técnicas", type: "textarea" },
  };

  const defaultValues = {
    patientName: "",
    studyType: "",
    projection: "",
    kvp: "",
    mas: "",
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
      entityType="Rayos X"
      colorScheme="yellow"
      defaultValues={defaultValues}
    />
  );
};

export default XRayForm;