import BaseList from "../BaseList";

const PersonnelList = ({ action, onEdit }) => {
  const initialData = [
    {
      id: 1,
      date: "2024-01-15",
      firstName: "CARLOS",
      lastName: "GARCIA",
      motherLastName: "PEREZ",
      fullName: "CARLOS GARCIA PEREZ",
      identityCard: "1234567",
      phone: "70011223",
      email: "carlos.g@clinic.com",
      role: "administrador",
      address: "Av. Principal #123",
      description: "Personal: CARLOS GARCIA",
      amount: 0,
      transactionType: "N/A",
      shift: "DAY",
    },
    {
      id: 2,
      date: "2024-02-20",
      firstName: "ANA",
      lastName: "MARTINEZ",
      motherLastName: "LOPEZ",
      fullName: "ANA MARTINEZ LOPEZ",
      identityCard: "7654321",
      phone: "71122334",
      email: "ana.m@clinic.com",
      role: "medico",
      address: "Calle Secundaria #45",
      description: "Personal: ANA MARTINEZ",
      amount: 0,
      transactionType: "N/A",
      shift: "DAY",
    },
  ];

  const columns = [
    { field: "date", label: "Fecha Reg.", type: "date" },
    { field: "fullName", label: "Nombre Completo", type: "text" },
    { field: "identityCard", label: "Carnet", type: "text" },
    { field: "phone", label: "Teléfono", type: "text" },
    { field: "email", label: "Email", type: "text" },
    { field: "role", label: "Rol", type: "text" },
    { field: "address", label: "Dirección", type: "text" },
  ];

  const searchFields = [
    "fullName",
    "firstName",
    "lastName",
    "identityCard",
    "phone",
    "email",
    "role",
  ];

  return (
    <BaseList
      action={action}
      onEdit={onEdit}
      initialData={initialData}
      entityType="Personal"
      colorScheme="blue"
      columns={columns}
      searchFields={searchFields}
    />
  );
};

export default PersonnelList;