import BaseForm from "../../BaseForm";

const ECGForm = ({ serviceToEdit, onSave, onCancel }) => {
  const fields = {
    patientName: { label: "Nombre del Paciente", type: "text", required: true },
    ecgType: { label: "Tipo de ECG", type: "select", required: true, options: [
      { value: "reposo", label: "Reposo" },
      { value: "esfuerzo", label: "Esfuerzo" },
    ]},
    leads: { label: "Número de Derivaciones", type: "number", required: true },
    date: { label: "Fecha", type: "date", required: true },
    time: { label: "Hora", type: "time", required: true },
    technician: { label: "Técnico Responsable", type: "text", required: true },
    technicalNotes: { label: "Observaciones Técnicas", type: "textarea" },
  };

  const defaultValues = {
    patientName: "",
    ecgType: "",
    leads: "",
    date: new Date().toISOString().split("T")[0],
    time: "",
    technician: "",
    technicalNotes: "",
  };

  return (
    <BaseForm
      itemToEdit={serviceToEdit}
      onSave={onSave}
      onCancel={onCancel}
      fields={fields}
      entityType="ECG"
      colorScheme="purple"
      defaultValues={defaultValues}
    />
  );
};

export default ECGForm;