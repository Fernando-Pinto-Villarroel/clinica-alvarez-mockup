import { User, Phone, CreditCard, MapPin } from "lucide-react";
import BaseForm from "../BaseForm";

const PatientForm = ({ action, patientToEdit, onSave, onCancel }) => {
  const fields = {
    date: {
      label: "Fecha de Registro",
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
    identityCard: {
      label: "Carnet de Identidad",
      type: "text",
      icon: CreditCard,
      required: true,
      placeholder: "Número de carnet",
    },
    phone: {
      label: "Teléfono",
      type: "tel",
      icon: Phone,
      required: true,
      placeholder: "Número de teléfono",
    },
    bloodType: {
      label: "Grupo Sanguíneo",
      type: "select",
      required: true,
      options: [
        { value: "O+", label: "O+" },
        { value: "O-", label: "O-" },
        { value: "A+", label: "A+" },
        { value: "A-", label: "A-" },
        { value: "B+", label: "B+" },
        { value: "B-", label: "B-" },
        { value: "AB+", label: "AB+" },
        { value: "AB-", label: "AB-" },
      ],
    },
    category: {
      label: "Categoría",
      type: "select",
      required: true,
      options: [
        { value: "A", label: "A" },
        { value: "B", label: "B" },
        { value: "C", label: "C" },
        { value: "D", label: "D" },
        { value: "M", label: "M" },
      ],
    },
    address: {
      label: "Dirección",
      type: "text",
      icon: MapPin,
      required: false,
      placeholder: "Dirección del paciente",
    },
  };

  const defaultValues = {
    firstName: "",
    lastName: "",
    motherLastName: "",
    identityCard: "",
    phone: "",
    bloodType: "O+",
    category: "A",
    address: "",
  };

  const handleSave = (data) => {
    const patientData = {
      ...data,
      fullName: `${data.firstName} ${data.lastName} ${data.motherLastName}`,
      description: `Paciente: ${data.firstName} ${data.lastName}`,
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
