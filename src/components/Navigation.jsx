import React from "react";

const Navigation = ({ activeModule, onModuleChange }) => {
  const modules = [
    { id: "users", label: "Usuarios" },
    { id: "accounting", label: "Contabilidad" },
    { id: "services", label: "Servicios de la Clínica" },
    { id: "pharmaceuticals", label: "Insumos Farmacéuticos" },
    { id: "consultations", label: "Consultas Médicas" },
    { id: "hr", label: "Gestión de Personal (RRHH)" },
  ];

  return (
    <nav className="bg-clinic-light-blue text-white px-6 py-3 shadow-md">
      <div className="flex justify-center space-x-8">
        {modules.map((module) => (
          <button
            key={module.id}
            onClick={() => onModuleChange(module.id)}
            className={`px-4 py-2 rounded transition-colors duration-200 ${
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

export default Navigation;
