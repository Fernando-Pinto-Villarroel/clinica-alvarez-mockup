import BaseList from "../BaseList";
import { useAuth } from "../../../auth/AuthContext";

const PatientList = ({ action, onEdit }) => {
  const { currentUser } = useAuth();
  const isDoctor = currentUser.role === 'medico';

  const initialData = [
    {
      id: 1,
      date: "2023-07-02",
      firstName: "SANTOS",
      lastName: "ALVARO",
      motherLastName: "MAMANI",
      fullName: "SANTOS ALVARO MAMANI",
      identityCard: "5190677",
      phone: "79720666",
      bloodType: "O+",
      category: "A",
      address: "Zona Norte",
      description: "Paciente: SANTOS ALVARO",
      service: "Consulta General",
      amount: 0,
      transactionType: "CASH",
      shift: "DAY",
      registeredBy: "recep1"
    },
    {
      id: 2,
      date: "2023-07-02",
      firstName: "JUAN PABLO",
      lastName: "TRUJILLO",
      motherLastName: "ARCE",
      fullName: "JUAN PABLO TRUJILLO ARCE",
      identityCard: "9416228",
      phone: "77441020",
      bloodType: "D+",
      category: "B",
      address: "Zona Sur",
      description: "Paciente: JUAN PABLO TRUJILLO",
      service: "Emergencia",
      amount: 0,
      transactionType: "CASH",
      shift: "DAY",
      registeredBy: "admin"
    },
  ];

  const columnsForDoctor = [
    { field: "date", label: "Fecha", type: "date" },
    { field: "fullName", label: "Nombre Completo", type: "text" },
    { field: "service", label: "Servicio Agendado", type: "text" },
  ];

  const columnsForReception = [
    { field: "date", label: "Fecha de Registro", type: "date" },
    { field: "fullName", label: "Nombre Completo", type: "text" },
    { field: "identityCard", label: "Carnet", type: "text" },
    { field: "phone", label: "Teléfono", type: "text" },
    { field: "service", label: "Servicio Agendado", type: "text" },
    { field: "registeredBy", label: "Registrado Por", type: "text" },
  ];

  const searchFields = [
    "fullName",
    "firstName",
    "lastName",
    "identityCard",
    "phone",
  ];

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
    <BaseList
      action={action}
      onEdit={onEdit}
      initialData={initialData}
      entityType="Paciente"
      colorScheme="blue"
      columns={isDoctor ? columnsForDoctor : columnsForReception}
      searchFields={searchFields}
      filterConfig={isDoctor ? [] : filterConfig}
    />
  );
};

export default PatientList;