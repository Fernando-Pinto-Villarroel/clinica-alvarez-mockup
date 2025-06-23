import BaseForm from "../../BaseForm";

const MammographyForm = ({ serviceToEdit, onSave, onCancel }) => {
  const fields = {
    patientName: { label: "Nombre del Paciente", type: "text", required: true },
    studyType: { label: "Tipo de Estudio", type: "select", required: true, options: [
      { value: "bilateral", label: "Bilateral" },
      { value: "unilateral", label: "Unilateral" },
    ]},
    projection: { label: "Proyección", type: "select", required: true, options: [
      { value: "cc", label: "CC" },
      { value: "mlo", label: "MLO" },
    ]},
    compression: { label: "Compresión Aplicada (kg)", type: "number", required: true },
    doctor: { label: "Médico Solicitante", type: "text", required: true },
    date: { label: "Fecha", type: "date", required: true },
    time: { label: "Hora", type: "time", required: true },
    technicalNotes: { label: "Observaciones Técnicas", type: "textarea" },
  };

  const defaultValues = {
    patientName: "",
    studyType: "",
    projection: "",
    compression: "",
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
      entityType="Mamografía"
      colorScheme="pink"
      defaultValues={defaultValues}
    />
  );
};

export default MammographyForm;