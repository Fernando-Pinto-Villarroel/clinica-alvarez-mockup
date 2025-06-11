import BaseList from "../BaseList";

const IncomeList = ({ action, onEdit }) => {
  const initialData = [
    {
      id: 1,
      date: "2024-06-08",
      description: "Consulta Médica",
      amount: 150,
      transactionType: "CASH",
      payer: "Maria Rodriguez",
      category: "CONSULTAS",
      shift: "DAY",
    },
    {
      id: 2,
      date: "2024-06-08",
      description: "Servicio de Enfermería",
      amount: 80,
      transactionType: "QR",
      payer: "Carlos Mendez",
      category: "ENFERMERÍA",
      shift: "DAY",
    },
    {
      id: 3,
      date: "2024-06-07",
      description: "Consulta de Emergencia",
      amount: 200,
      transactionType: "TRANSFER",
      payer: "Ana Torres",
      category: "CONSULTAS",
      shift: "NIGHT",
    },
  ];

  const columns = [
    { field: "date", label: "Fecha", type: "date" },
    { field: "description", label: "Descripción", type: "text" },
    { field: "amount", label: "Monto (Bs.)", type: "amount" },
    { field: "transactionType", label: "Tipo", type: "transactionType" },
    { field: "payer", label: "Pagador", type: "text" },
    { field: "category", label: "Categoría", type: "text" },
    { field: "shift", label: "Turno", type: "shift" },
  ];

  const searchFields = ["description", "payer"];

  const filterConfig = [
    {
      name: "transactionType",
      label: "Tipo de Transacción",
      options: [
        { value: "ALL", label: "Todos los Tipos" },
        { value: "CASH", label: "Efectivo" },
        { value: "QR", label: "QR" },
        { value: "TRANSFER", label: "Transferencia" },
        { value: "CARD", label: "Tarjeta" },
      ],
    },
    {
      name: "shift",
      label: "Turno",
      options: [
        { value: "ALL", label: "Todos los Turnos" },
        { value: "DAY", label: "Día" },
        { value: "NIGHT", label: "Noche" },
      ],
    },
  ];

  return (
    <BaseList
      action={action}
      onEdit={onEdit}
      initialData={initialData}
      entityType="Ingreso"
      colorScheme="blue"
      columns={columns}
      searchFields={searchFields}
      filterConfig={filterConfig}
    />
  );
};

export default IncomeList;
