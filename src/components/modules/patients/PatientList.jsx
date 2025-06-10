import BaseList from "../BaseList";

const PatientList = ({ action, onEdit }) => {
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
      amount: 0,
      transactionType: "CASH",
      shift: "DAY",
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
      amount: 0,
      transactionType: "CASH",
      shift: "DAY",
    },
    {
      id: 3,
      date: "2023-07-02",
      firstName: "ABEL",
      lastName: "MAMANI",
      motherLastName: "VALENCIA",
      fullName: "ABEL MAMANI VALENCIA",
      identityCard: "5302925",
      phone: "72920726",
      bloodType: "O+",
      category: "A",
      address: "Villa Tunari",
      description: "Paciente: ABEL MAMANI",
      amount: 0,
      transactionType: "CASH",
      shift: "DAY",
    },
    {
      id: 4,
      date: "2023-07-02",
      firstName: "TIBUR",
      lastName: "QUELCA",
      motherLastName: "SOLIZ",
      fullName: "TIBUR QUELCA SOLIZ",
      identityCard: "5938119",
      phone: "71475386",
      bloodType: "O+",
      category: "C",
      address: "Kanata",
      description: "Paciente: TIBUR QUELCA",
      amount: 0,
      transactionType: "CASH",
      shift: "DAY",
    },
    {
      id: 5,
      date: "2023-07-02",
      firstName: "GONZALES",
      lastName: "CANALES",
      motherLastName: "RAMIREZ",
      fullName: "GONZALES CANALES RAMIREZ",
      identityCard: "8816044",
      phone: "69545349",
      bloodType: "O+",
      category: "M",
      address: "Cercado",
      description: "Paciente: GONZALES CANALES",
      amount: 0,
      transactionType: "CASH",
      shift: "DAY",
    },
  ];

  const columns = [
    { field: "date", label: "Fecha", type: "date" },
    { field: "fullName", label: "Nombre Completo", type: "text" },
    { field: "identityCard", label: "Carnet", type: "text" },
    { field: "phone", label: "Teléfono", type: "text" },
    { field: "bloodType", label: "Grupo Sanguíneo", type: "text" },
    { field: "category", label: "Categoría", type: "text" },
    { field: "address", label: "Dirección", type: "text" },
  ];

  const searchFields = [
    "fullName",
    "firstName",
    "lastName",
    "identityCard",
    "phone",
  ];

  return (
    <BaseList
      action={action}
      onEdit={onEdit}
      initialData={initialData}
      entityType="Paciente"
      colorScheme="blue"
      columns={columns}
      searchFields={searchFields}
    />
  );
};

export default PatientList;
