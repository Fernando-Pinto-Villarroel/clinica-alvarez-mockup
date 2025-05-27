import React from "react";

const Header = () => {
  return (
    <header className="bg-clinic-blue text-white px-6 py-4 shadow-lg">
      <div className="flex items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-white text-clinic-blue px-3 py-2 rounded font-bold text-lg">
            CLINICA
          </div>
          <span className="font-bold text-lg">ALVAREZ</span>
        </div>
        <div className="ml-4 text-sm">
          <div>Software de Atención</div>
          <div>Primaria en Salud</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
