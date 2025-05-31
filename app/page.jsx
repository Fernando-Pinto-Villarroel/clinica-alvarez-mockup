"use client";

import { useState, useEffect } from "react";
import { MainLayout } from "@/components/main-layout";
import { PersonalEstablecimiento } from "@/components/personal-establecimiento";
import { BusquedaRegistros } from "@/components/busqueda-registros";
import { RegistroPaciente } from "@/components/registro-paciente";
import { Servicios } from "@/components/servicios";
import { InsumosFarmaceuticos } from "@/components/insumos-farmaceuticos";
import { ConsultasMedicas } from "@/components/consultas-medicas";
import { Contabilidad } from "@/components/contabilidad";
import { Usuarios } from "@/components/usuarios";
import { useAuth } from "../components/AuthContext";

export default function Home() {
  const [activeModule, setActiveModule] = useState("services");
  const { getAccessibleModules, hasModuleAccess } = useAuth();
  const [showBusqueda, setShowBusqueda] = useState(false);

  useEffect(() => {
    const accessibleModules = getAccessibleModules();

    if (!hasModuleAccess(activeModule) && accessibleModules.length > 0) {
      setActiveModule(accessibleModules[0]);
    }
  }, [getAccessibleModules, hasModuleAccess, activeModule]);

  const handleModuleChange = (moduleId) => {
    if (hasModuleAccess(moduleId)) {
      setActiveModule(moduleId);
      // Cerrar búsqueda si está abierta al cambiar módulo
      setShowBusqueda(false);
    }
  };

  const handleBuscarPacienteClick = () => {
    setShowBusqueda(true);
  };

  const renderModuleContent = () => {
    switch (activeModule) {
      case "personnel":
        return <PersonalEstablecimiento />;
      case "patients":
        return (
          <RegistroPaciente onBuscarPacienteClick={handleBuscarPacienteClick} />
        );
      case "services":
        return <Servicios />;
      case "pharmaceutical-supplies":
        return <InsumosFarmaceuticos />;
      case "medical-consultations":
        return <ConsultasMedicas />;
      case "accounting":
        return <Contabilidad />;
      case "users":
        return <Usuarios />;
      default:
        return (
          <div className="text-center text-gray-500">Módulo no encontrado</div>
        );
    }
  };

  return (
    <>
      <MainLayout
        activeModule={activeModule}
        onModuleChange={handleModuleChange}
      >
        {renderModuleContent()}
      </MainLayout>

      {showBusqueda && (
        <BusquedaRegistros onClose={() => setShowBusqueda(false)} />
      )}
    </>
  );
}
