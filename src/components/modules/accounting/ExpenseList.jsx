import BaseList from "../BaseList";

const ExpenseList = ({ action, onEdit }) => {
  const initialData = [
    {
      id: 1,
      date: "2024-06-08",
      description: "Consultas Médicas",
      amount: 200,
      transactionType: "CASH",
      receiver: "Dr. Gladys",
      category: "CONSULTAS",
      shift: "DAY",
    },
    {
      id: 2,
      date: "2024-06-08",
      description: "Servicios de Enfermería",
      amount: 50,
      transactionType: "CASH",
      receiver: "Sonia",
      category: "ENFERMERÍA",
      shift: "DAY",
    },
    {
      id: 3,
      date: "2024-06-08",
      description: "Compra de Combustible",
      amount: 200,
      transactionType: "CASH",
      receiver: "Ricardo",
      category: "COMBUSTIBLE",
      shift: "DAY",
    },
    {
      id: 4,
      date: "2024-06-08",
      description: "Gastos de Alimentación",
      amount: 200,
      transactionType: "CASH",
      receiver: "Dra. Vania",
      category: "COMIDA",
      shift: "NIGHT",
    },
    {
      id: 5,
      date: "2024-06-08",
      description: "Servicios de Rayos X",
      amount: 204,
      transactionType: "CASH",
      receiver: "Juan",
      category: "EQUIPAMIENTO",
      shift: "NIGHT",
    },
  ];

  const columns = [
    { field: "date", label: "Fecha", type: "date" },
    { field: "description", label: "Descripción", type: "text" },
    { field: "amount", label: "Monto (Bs.)", type: "amount" },
    { field: "transactionType", label: "Tipo", type: "transactionType" },
    { field: "receiver", label: "Receptor", type: "text" },
    { field: "category", label: "Categoría", type: "text" },
    { field: "shift", label: "Turno", type: "shift" },
  ];

  const searchFields = ["description", "receiver"];

  return (
    <BaseList
      action={action}
      onEdit={onEdit}
      initialData={initialData}
      entityType="Egreso"
      colorScheme="red"
      columns={columns}
      searchFields={searchFields}
    />
  );
};

export default ExpenseList;
