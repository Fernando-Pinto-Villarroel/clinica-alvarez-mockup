import { useState, useEffect } from "react";
import Layout from "./components/common/Layout";
import "./index.css";
import { FloatingLogo } from "./components/common/Logo";
import { AuthProvider, useAuth } from "./auth/AuthContext";

function AppContent() {
  const [activeModule, setActiveModule] = useState("services");
  const { getAccessibleModules, hasModuleAccess } = useAuth();

  useEffect(() => {
    const accessibleModules = getAccessibleModules();

    if (!hasModuleAccess(activeModule) && accessibleModules.length > 0) {
      setActiveModule(accessibleModules[0]);
    }
  }, [getAccessibleModules, hasModuleAccess, activeModule]);

  const handleModuleChange = (moduleId) => {
    if (hasModuleAccess(moduleId)) {
      setActiveModule(moduleId);
    }
  };

  return (
    <div className="app-root">
      <Layout activeModule={activeModule} onModuleChange={handleModuleChange} />
      <FloatingLogo />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
