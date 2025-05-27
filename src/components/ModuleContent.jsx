import React from "react";
import CrudActions from "./CrudActions";
import { Calendar, Stethoscope, Building2 } from "lucide-react";

const ModuleContent = ({ activeModule }) => {
  const getModuleConfig = (moduleId) => {
    const configs = {
      users: {
        name: "Usuarios",
        extraActions: [],
      },
      accounting: {
        name: "Registros Contables",
        extraActions: [
          {
            id: "reports",
            label: "Generar Reportes",
            icon: Building2,
            color: "bg-indigo-100 hover:bg-indigo-200 text-indigo-700",
          },
        ],
      },
      services: {
        name: "Servicios",
        extraActions: [],
      },
      pharmaceuticals: {
        name: "Insumos Farmacéuticos",
        extraActions: [
          {
            id: "inventory",
            label: "Control de Inventario",
            icon: Building2,
            color: "bg-teal-100 hover:bg-teal-200 text-teal-700",
          },
        ],
      },
      consultations: {
        name: "Consultas Médicas",
        extraActions: [
          {
            id: "schedule",
            label: "Programar Cita",
            icon: Calendar,
            color: "bg-orange-100 hover:bg-orange-200 text-orange-700",
          },
          {
            id: "diagnosis",
            label: "Registro de Diagnóstico",
            icon: Stethoscope,
            color: "bg-pink-100 hover:bg-pink-200 text-pink-700",
          },
        ],
      },
      hr: {
        name: "Personal",
        extraActions: [
          {
            id: "schedule",
            label: "Gestión de Horarios",
            icon: Calendar,
            color: "bg-cyan-100 hover:bg-cyan-200 text-cyan-700",
          },
        ],
      },
    };

    return configs[moduleId] || { name: "Módulo", extraActions: [] };
  };

  const config = getModuleConfig(activeModule);

  return (
    <div className="flex-1 overflow-y-auto">
      <CrudActions
        moduleName={config.name}
        extraActions={config.extraActions}
      />
    </div>
  );
};

export default ModuleContent;
