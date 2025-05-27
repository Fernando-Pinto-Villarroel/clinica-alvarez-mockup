import React from "react";
import { FileText, Edit, List, X, Printer, Plus } from "lucide-react";

const CrudActions = ({ moduleName, extraActions = [] }) => {
  const baseActions = [
    {
      id: "register",
      label: `Registro de ${moduleName}`,
      icon: FileText,
      color: "bg-blue-100 hover:bg-blue-200 text-blue-700",
    },
    {
      id: "edit",
      label: `Editar ${moduleName}`,
      icon: Edit,
      color: "bg-green-100 hover:bg-green-200 text-green-700",
    },
    {
      id: "list",
      label: `Listar ${moduleName}`,
      icon: List,
      color: "bg-yellow-100 hover:bg-yellow-200 text-yellow-700",
    },
    {
      id: "delete",
      label: `Delete ${moduleName}`,
      icon: X,
      color: "bg-red-100 hover:bg-red-200 text-red-700",
    },
    {
      id: "invoice",
      label: "Generar Factura",
      icon: Printer,
      color: "bg-purple-100 hover:bg-purple-200 text-purple-700",
    },
  ];

  const allActions = [...baseActions, ...extraActions];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mx-8 my-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        Gestionar {moduleName}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
        {allActions.map((action) => {
          const IconComponent = action.icon;
          return (
            <button
              key={action.id}
              className={`${action.color} p-6 rounded-lg border-2 border-transparent hover:border-gray-300 transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md`}
            >
              <div className="flex flex-col items-center space-y-3">
                <IconComponent size={32} />
                <span className="text-sm font-medium text-center leading-tight">
                  {action.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <p className="text-gray-600">
          Seleccione uno de los botones de "Gestionar {moduleName}" para
          realizar la operación correspondiente.
        </p>
      </div>
    </div>
  );
};

export default CrudActions;
