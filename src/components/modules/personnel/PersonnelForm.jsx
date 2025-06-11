import { User, Phone, Briefcase, Mail, MapPin } from "lucide-react";
import BaseForm from "../BaseForm";

const PersonnelForm = ({ action, personnelToEdit, onSave, onCancel }) => {
  const fields = {
    date: {
      label: "Fecha de Registro",
    },
    firstName: {
      label: "Nombres",
      type: "text",
      icon: User,
      required: true,
      placeholder: "Nombres del personal",
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
      icon: Briefcase,
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
    email: {
      label: "Correo Electrónico",
      type: "email",
      icon: Mail,
      required: false,
      placeholder: "correo@example.com",
    },
    role: {
      label: "Rol",
      type: "select",
      required: true,
      options: [
        { value: "administrador", label: "Administrador" },
        { value: "medico", label: "Médico" },
        { value: "recepcionista", label: "Recepcionista" },
        { value: "farmaceutico", label: "Farmacéutico" },
        { value: "enfermeria", label: "Enfermería" },
        { value: "tecnico", label: "Técnico" },
      ],
    },
    address: {
      label: "Dirección",
      type: "text",
      icon: MapPin,
      required: false,
      placeholder: "Dirección del personal",
    },
  };

  const defaultValues = {
    firstName: "",
    lastName: "",
    motherLastName: "",
    identityCard: "",
    phone: "",
    email: "",
    role: "medico",
    address: "",
  };

  const handleSave = (data) => {
    const personnelData = {
      ...data,
      fullName: `${data.firstName} ${data.lastName} ${data.motherLastName}`,
      description: `Personal: ${data.firstName} ${data.lastName}`,
    };
    onSave(personnelData);
  };

  return (
    <BaseForm
      itemToEdit={personnelToEdit}
      onSave={handleSave}
      onCancel={onCancel}
      fields={fields}
      entityType="Personal"
      colorScheme="blue"
      defaultValues={defaultValues}
    />
  );
};

export default PersonnelForm;