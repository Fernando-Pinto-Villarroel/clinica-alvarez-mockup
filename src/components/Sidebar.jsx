import React from "react";
import { User, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-clinic-light-blue text-white shadow-lg flex flex-col h-screen">
      <div className="flex-1 p-6">
        <div className="bg-clinic-blue rounded-lg p-4 mb-6">
          <h2 className="text-xl font-bold text-center">
            CLÍNICA
            <br />
            <span className="text-red-400">ALVAREZ</span>
          </h2>
          <p className="text-sm text-center mt-2 text-blue-100">
            Software de Atencion
            <br />
            Primaria en Salud
          </p>
        </div>
      </div>
      <div className="p-6">
        <nav className="space-y-4">
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-blue-400 transition-colors duration-200">
            <User size={20} />
            <span>Admin</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-blue-400 transition-colors duration-200">
            <Settings size={20} />
            <span>Configuración</span>
          </button>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
