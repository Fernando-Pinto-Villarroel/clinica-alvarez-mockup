import BaseForm from "../../BaseForm";

const LabForm = ({ serviceToEdit, onSave, onCancel }) => {
  const fields = {
    patientName: { label: "Nombre del Paciente", type: "text", required: true },
    analysisType: { label: "Tipo de Análisis", type: "select", required: true, options: [
      { value: "hemograma", label: "Hemograma" },
      { value: "glucemia", label: "Glucemia" },
      { value: "orina", label: "Orina" },
      { value: "colesterol", label: "Colesterol" },
    ]},
    sampleType: { label: "Tipo de Muestra", type: "select", required: true, options: [
      { value: "sangre", label: "Sangre" },
      { value: "orina", label: "Orina" },
      { value: "heces", label: "Heces" },
    ]},
    collectionDate: { label: "Fecha de Toma", type: "date", required: true },
    collectionTime: { label: "Hora de Toma", type: "time", required: true },
    technician: { label: "Técnico Responsable", type: "text", required: true },
    technicalNotes: { label: "Observaciones Técnicas", type: "textarea" },
  };

  const defaultValues = {
    patientName: "",
    analysisType: "",
    sampleType: "",
    collectionDate: new Date().toISOString().split("T")[0],
    collectionTime: "",
    technician: "",
    technicalNotes: "",
  };

  return (
    <BaseForm
      itemToEdit={serviceToEdit}
      onSave={onSave}
      onCancel={onCancel}
      fields={fields}
      entityType="Laboratorio"
      colorScheme="red"
      defaultValues={defaultValues}
    />
  );
};

export default LabForm;