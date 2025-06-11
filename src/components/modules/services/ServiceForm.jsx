import BaseForm from "../BaseForm";

const ServiceForm = ({ action, serviceToEdit, onSave, onCancel }) => {
    const fields = {
        patientName: {
            label: "Nombre del Paciente",
            type: "text",
            required: true,
        },
        serviceType: {
            label: "Tipo de Servicio",
            type: "select",
            options: [
            { value: "hemograma", label: "Hemograma Completo" },
            { value: "glucosa", label: "Glucosa" },
            { value: "colesterol", label: "Perfil Lipídico" },
            { value: "rayos_x", label: "Rayos X - Tórax" },
            { value: "ecografia_abdominal", label: "Ecografía Abdominal" },
            { value: "internacion", label: "Internación" },
            ],
            required: true,
        },
        doctor: {
            label: "Médico Solicitante",
            type: "text",
            required: false,
        },
        date: {
            label: "Fecha del Servicio",
            type: "date",
            required: true,
        },
        status: {
            label: "Estado",
            type: "select",
            options: [
            { value: "Pendiente", label: "Pendiente" },
            { value: "Completado", label: "Completado" },
            { value: "Cancelado", label: "Cancelado" },
            ],
            required: true,
        },
        observations: {
            label: "Observaciones",
            type: "textarea",
            required: false,
        },
    };


    const defaultValues = {
        patientName: "",
        serviceType: "",
        doctor: "",
        date: new Date().toISOString().split("T")[0],
        status: "Pendiente",
        observations: "",
    };

    return (
        <BaseForm
            itemToEdit={serviceToEdit}
            onSave={onSave}
            onCancel={onCancel}
            fields={fields}
            entityType="Servicio"
            colorScheme="green"
            defaultValues={defaultValues}
        />
    );
};

export default ServiceForm;
