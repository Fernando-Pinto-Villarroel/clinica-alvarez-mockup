import BaseList from "../BaseList";

const ServiceList = ({ action, onEdit }) => {
  const initialData = [
    {
      id: 1,
      date: "2024-06-01",
      serviceType: "Hemograma Completo",
      patientName: "Juan Pérez",
      doctor: "Dr. Ramírez",
      status: "Pendiente",
    },
    {
      id: 2,
      date: "2024-06-03",
      serviceType: "Rayos X - Tórax",
      patientName: "Ana Gómez",
      doctor: "Dra. Ledezma",
      status: "Completado",
    },
    {
      id: 3,
      date: "2024-06-05",
      serviceType: "Ecografía Abdominal",
      patientName: "Carlos Fernández",
      doctor: "Dr. Quiroga",
      status: "Pendiente",
    },
  ];

  const columns = [
    { field: "date", label: "Fecha", type: "date" },
    { field: "patientName", label: "Paciente", type: "text" },
    { field: "serviceType", label: "Servicio", type: "text" },
    { field: "doctor", label: "Médico", type: "text" },
    { field: "status", label: "Estado", type: "text" },
  ];

  const searchFields = ["patientName", "serviceType", "doctor", "status"];

  return (
    <BaseList
      action={action}
      onEdit={onEdit}
      initialData={initialData}
      entityType="Servicio"
      colorScheme="green"
      columns={columns}
      searchFields={searchFields}
      hideListUntilSearch={true}
    />
  );
};

export default ServiceList;
