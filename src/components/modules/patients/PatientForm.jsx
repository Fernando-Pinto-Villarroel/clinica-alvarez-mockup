import { User, Phone, Briefcase, MapPin, Calendar, Edit, DollarSign } from "lucide-react";
import BaseForm from "../BaseForm";

const PatientForm = ({ action, patientToEdit, onSave, onCancel }) => {
  const fields = {
    specialty: {
      label: "Especialidad o Motivo de Consulta",
      type: "textarea",
      icon: Edit,
      required: true,
      placeholder: "Describa la especialidad o el motivo principal de la visita...",
    },
    birthDate: {
      label: "Fecha de Nacimiento",
      type: "date",
      icon: Calendar,
      required: true,
    },
    birthPlace: {
        label: "Lugar de Nacimiento",
        type: "text",
        icon: MapPin,
        required: true,
        placeholder: "Ej: Cochabamba, Bolivia",
    },
    firstName: {
      label: "Nombres",
      type: "text",
      icon: User,
      required: true,
      placeholder: "Nombres del paciente",
    },
    lastName: {
      label: "Apellido Paterno",
      type: "text",
      icon: User,
      required: true,
      placeholder: "Apellido paterno",
    },
    motherLastName: {
      label: "Apellido Materno",
      type: "text",
      icon: User,
      required: true,
      placeholder: "Apellido materno",
    },
    transactionType: {
        label: "¿Cómo canceló?",
        type: "select",
        icon: DollarSign,
        required: true,
        options: [
            { value: "CASH", label: "Efectivo" },
            { value: "QR", label: "QR" },
            { value: "TRANSFER", label: "Transferencia" },
            { value: "CARD", label: "Tarjeta" },
        ],
    },
    amount: {
        label: "Monto Pagado (Bs.)",
        type: "number",
        icon: DollarSign,
        required: true,
        placeholder: "0.00",
    },
  };

  const defaultValues = {
    firstName: "",
    lastName: "",
    motherLastName: "",
    birthDate: "",
    birthPlace: "",
    specialty: "",
    transactionType: "CASH",
    amount: "",
  };

  const handleSave = (data) => {
    const patientData = {
      ...data,
      fullName: `${data.firstName} ${data.lastName} ${data.motherLastName}`,
      description: data.specialty,
    };
    onSave(patientData);
  };

  return (
    <BaseForm
      itemToEdit={patientToEdit}
      onSave={handleSave}
      onCancel={onCancel}
      fields={fields}
      entityType="Paciente"
      colorScheme="blue"
      defaultValues={defaultValues}
    />
  );
};

export default PatientForm;