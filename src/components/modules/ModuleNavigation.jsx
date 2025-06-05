import { useAuth } from "../../auth/AuthContext";

const ModuleNavigation = ({ activeModule, onModuleChange }) => {
  const { hasModuleAccess, getAccessibleModules } = useAuth();

  const allModules = [
    { id: "accounting", label: "Contabilidad" },
    { id: "patients", label: "Pacientes" },
    { id: "services", label: "Servicios de la Clínica" },
    { id: "nursing", label: "Enfermería" },
    { id: "medical-consultations", label: "Consultas Médicas" },
    { id: "personnel", label: "Gestión de Personal (RRHH)" },
  ];

  const accessibleModuleIds = getAccessibleModules();
  const accessibleModules = allModules.filter((module) =>
    accessibleModuleIds.includes(module.id)
  );

  if (accessibleModules.length === 0) {
    return (
      <nav className="bg-clinic-light-blue text-white text-sm px-6 py-4">
        <div className="text-center text-blue-200">
          No tienes acceso a ningún módulo del sistema
        </div>
      </nav>
    );
  }

  if (!hasModuleAccess(activeModule) && accessibleModules.length > 0) {
    setTimeout(() => {
      onModuleChange(accessibleModules[0].id);
    }, 0);
  }

  return (
    <nav className="bg-clinic-light-blue text-white text-sm px-6 py-2">
      <div className="flex justify-center space-x-4">
        {accessibleModules.map((module) => (
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
