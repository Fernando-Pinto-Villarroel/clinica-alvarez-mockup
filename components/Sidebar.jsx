"use client";

import { useState, useRef } from "react";
import {
  User,
  Settings,
  UserCog,
  Database,
  AlertTriangle,
  Users,
  LogOut,
} from "lucide-react";
import DropdownModal from "./DropdownModal";
import { useAuth } from "./AuthContext";

const SidebarSystem = () => {
  const [activeModal, setActiveModal] = useState(null);
  const userButtonRef = useRef(null);
  const configButtonRef = useRef(null);
  const { currentUser, logout, switchUser, getRoleDisplayName, mockUsers } =
    useAuth();

  const userButtons = [
    {
      id: "profile",
      label: "Ver Perfil",
      icon: User,
      onClick: () => console.log("Ver perfil clicked"),
    },
    {
      id: "manage-account",
      label: "Gestionar Cuenta",
      icon: UserCog,
      onClick: () => console.log("Manage account clicked"),
    },
    {
      id: "switch-user",
      label: "Cambiar Usuario (Demo)",
      icon: Users,
      onClick: () => {
        const usernames = mockUsers.map((u) => u.username);
        const selectedUser = prompt(
          `Cambiar a usuario:\n${usernames.join("\n")}\n\nIngrese username:`
        );
        if (selectedUser && switchUser(selectedUser)) {
          console.log(`Switched to user: ${selectedUser}`);
        }
      },
    },
    {
      id: "close-session",
      label: "Cerrar Sesión",
      icon: LogOut,
      onClick: () => {
        logout();
        console.log("Session closed");
      },
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

  if (!currentUser) {
    return (
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
          <div className="text-center text-red-200">Usuario no autenticado</div>
        </div>
      </aside>
    );
  }

  return (
    <>
      <aside className="w-64 bg-clinic-light-blue text-white shadow-lg flex flex-col">
        <div className="flex-1 p-6">
          <div className="bg-clinic-blue rounded-lg p-4 mb-6">
            <h2 className="text-2xl font-bold text-center text-clinic-logo-red leading-none text-white-outline">
              CLINICA
              <br />
              <span className="text-clinic-logo-blue font-bold leading-none text-white-outline">
                ALVAREZ
              </span>
            </h2>
            <p className="text-sm text-center mt-2 text-blue-100">
              Sistema de Atención
              <br />
              Primaria en Salud
            </p>
          </div>

          <div className="bg-clinic-blue rounded-lg p-4 mb-6">
            <div className="text-center">
              <div className="text-sm font-semibold text-blue-100 mb-1">
                Usuario Actual
              </div>
              <div className="text-white font-bold">{currentUser.name}</div>
              <div className="text-xs text-blue-200 mt-1">
                {getRoleDisplayName(currentUser.role)}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <nav className="space-y-4">
            <button
              ref={userButtonRef}
              onClick={() => handleModalToggle("user")}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-blue-400 transition-colors duration-200"
            >
              <User size={20} />
              <span>{getRoleDisplayName(currentUser.role)}</span>
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
        isOpen={activeModal === "user"}
        onClose={closeModal}
        triggerRef={userButtonRef}
        buttons={userButtons}
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

export default SidebarSystem;
