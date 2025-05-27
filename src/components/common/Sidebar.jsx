import { useState, useRef } from "react";
import {
  User,
  Settings,
  UserCog,
  Database,
  AlertTriangle,
  Shield,
} from "lucide-react";
import DropdownModal from "./DropdownModal";

const Sidebar = () => {
  const [activeModal, setActiveModal] = useState(null);
  const adminButtonRef = useRef(null);
  const configButtonRef = useRef(null);

  const adminButtons = [
    {
      id: "manage-account",
      label: "Gestionar Cuenta",
      icon: UserCog,
      onClick: () => console.log("Manage account clicked"),
    },
    {
      id: "close-session",
      label: "Cerrar Sesión",
      icon: Shield,
      onClick: () => console.log("Close session clicked"),
    },
  ];

  const configButtons = [
    {
      id: "report-problem",
      label: "Reportar Problema",
      icon: AlertTriangle,
      onClick: () => console.log("Report problem clicked"),
    },
    {
      id: "backup-copy",
      label: "Copia de Seguridad",
      icon: Database,
      onClick: () => console.log("Backup copy clicked"),
    },
  ];

  const handleModalToggle = (modalType) => {
    setActiveModal(activeModal === modalType ? null : modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <aside className="w-64 bg-clinic-light-blue text-white shadow-lg flex flex-col">
        <div className="flex-1 p-6">
          <div className="bg-clinic-blue rounded-lg p-4 mb-6">
            <h2 className="text-xl font-bold text-center">
              CLINICA
              <br />
              <span className="text-red-400">ALVAREZ</span>
            </h2>
            <p className="text-sm text-center mt-2 text-blue-100">
              Sistema de Atención
              <br />
              Primaria en Salud
            </p>
          </div>
        </div>
        <div className="p-6">
          <nav className="space-y-4">
            <button
              ref={adminButtonRef}
              onClick={() => handleModalToggle("admin")}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-blue-400 transition-colors duration-200"
            >
              <User size={20} />
              <span>Admin</span>
            </button>
            <button
              ref={configButtonRef}
              onClick={() => handleModalToggle("config")}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-blue-400 transition-colors duration-200"
            >
              <Settings size={20} />
              <span>Configuración</span>
            </button>
          </nav>
        </div>
      </aside>

      <DropdownModal
        isOpen={activeModal === "admin"}
        onClose={closeModal}
        triggerRef={adminButtonRef}
        buttons={adminButtons}
      />

      <DropdownModal
        isOpen={activeModal === "config"}
        onClose={closeModal}
        triggerRef={configButtonRef}
        buttons={configButtons}
      />
    </>
  );
};

export default Sidebar;
