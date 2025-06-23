import BaseList from "../BaseList";
import { useAuth } from "../../../auth/AuthContext";

const PatientList = ({ action, onEdit }) => {
  const { currentUser } = useAuth();
  const isDoctor = currentUser.role === 'medico';

  const patientData = [
    {
      id: 1,
      date: "2025-06-23",
      fullName: "SANTOS ALVARO MAMANI",
      identityCard: "5190677",
      phone: "79720666",
      birthDate: "1985-10-20",
      birthPlace: "Cochabamba, Bolivia",
      specialty: "Control anual de presión arterial.",
      transactionType: "CASH",
      amount: 150.00, 
      registeredBy: "recep1"
    },
    {
      id: 2,
      date: "2025-06-22",
      fullName: "JUAN PABLO TRUJILLO ARCE",
      identityCard: "9416228",
      phone: "77441020",
      birthDate: "1992-05-15",
      birthPlace: "La Paz, Bolivia",
      specialty: "Paciente con síntomas de gripe.",
      transactionType: "QR",
      amount: 100.00, 
      registeredBy: "admin"
    },
  ];

  const appointmentData = [
    {
      id: 1,
      date: "2025-06-23",
      fullName: "SANTOS ALVARO MAMANI",
      description: "Control anual de presión arterial.",
      specialty: "Cardiología",
      status: "Programada",
    },
    {
      id: 2,
      date: "2025-06-23",
      fullName: "ANA GOMEZ",
      description: "Paciente con síntomas de gripe.",
      specialty: "Medicina General",
      status: "Programada",
    },
  ];

  const columnsForDoctor = [
    { field: "date", label: "Fecha de Cita", type: "date" },
    { field: "fullName", label: "Nombre del Paciente", type: "text" },
    { field: "specialty", label: "Especialidad", type: "text" },
    { field: "description", label: "Motivo de Consulta", type: "text" },
    { field: "status", label: "Estado", type: "text" },
  ];

  const columnsForReception = [
    { field: "date", label: "Fecha de Registro", type: "date" },
    { field: "fullName", label: "Nombre Completo", type: "text" },
    { field: "phone", label: "Teléfono", type: "text" },
    { field: "specialty", label: "Motivo de Consulta", type: "text" },
    { field: "amount", label: "Monto (Bs.)", type: "amount" },
    { field: "transactionType", label: "Método de Pago", type: "text" },
    { field: "registeredBy", label: "Registrado Por", type: "text" },
  ];

  const searchFields = ["fullName", "identityCard", "phone", "specialty", "description"];

  const filterConfig = [
    {
      name: "registeredBy",
      label: "Registrado Por",
      options: [
        { value: "ALL", label: "Todos" },
        { value: "recep1", label: "Ana Receptionist" },
        { value: "admin", label: "Admin" },
      ],
    },
  ];

  return (
    <>
      {isDoctor && <h2 className="text-2xl font-bold text-gray-800 mb-4 px-1">Lista de Citas Programadas</h2>}
      <BaseList
        action={action}
        onEdit={onEdit}
        initialData={isDoctor ? appointmentData : patientData}
        entityType={isDoctor ? "Cita" : "Paciente"}
        colorScheme="blue"
        columns={isDoctor ? columnsForDoctor : columnsForReception}
        searchFields={searchFields}
        filterConfig={isDoctor ? [] : filterConfig}
      />
    </>
  );
};

export default PatientList;