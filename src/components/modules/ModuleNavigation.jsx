const ModuleNavigation = ({ activeModule, onModuleChange }) => {
  const modules = [
    { id: "users", label: "Usuarios" },
    { id: "accounting", label: "Contabilidad" },
    { id: "patients", label: "Pacientes" },
    { id: "services", label: "Servicios de la Clínica" },
    { id: "pharmaceutical-supplies", label: "Insumos Farmacéuticos" },
    { id: "medical-consultations", label: "Consultas Médicas" },
    { id: "personnel", label: "Gestión de Personal (RRHH)" },
  ];

  return (
    <nav className="bg-clinic-light-blue text-white text-sm px-6 py-2">
      <div className="flex justify-center space-x-4">
        {modules.map((module) => (
          <button
            key={module.id}
            onClick={() => onModuleChange(module.id)}
            className={`px-4 py-2 rounded transition-colors duration-200 flex-1 text-center ${
              activeModule === module.id
                ? "bg-white text-clinic-blue font-semibold"
                : "hover:bg-blue-400"
            }`}
          >
            {module.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default ModuleNavigation;
