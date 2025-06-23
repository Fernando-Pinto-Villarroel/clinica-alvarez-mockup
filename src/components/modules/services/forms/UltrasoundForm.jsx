import BaseForm from "../../BaseForm";

const UltrasoundForm = ({ serviceToEdit, onSave, onCancel }) => {
  const fields = {
    patientName: { label: "Nombre del Paciente", type: "text", required: true },
    studyType: { label: "Tipo de Estudio", type: "select", required: true, options: [
      { value: "abdominal", label: "Abdominal" },
      { value: "obstetrica", label: "Obstétrica" },
      { value: "partes_blandas", label: "Partes Blandas" },
      { value: "renal", label: "Renal" },
    ]},
    transducer: { label: "Transductor (MHz)", type: "number", required: true },
    doctor: { label: "Médico Solicitante", type: "text", required: true },
    date: { label: "Fecha", type: "date", required: true },
    time: { label: "Hora", type: "time", required: true },
    technicalNotes: { label: "Observaciones Técnicas", type: "textarea" },
  };

  const defaultValues = {
    patientName: "",
    studyType: "",
    transducer: "",
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
      entityType="Ecografía"
      colorScheme="green"
      defaultValues={defaultValues}
    />
  );
};

export default UltrasoundForm;