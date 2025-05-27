import React, { useState } from "react";
import Layout from "./components/common/Layout";
import "./index.css";
import { FloatingLogo } from "./components/common/Logo";

function App() {
  const [activeModule, setActiveModule] = useState("services");
  const handleModuleChange = (moduleId) => {
    setActiveModule(moduleId);
  };

  return (
    <div className="app-root">
      <Layout activeModule={activeModule} onModuleChange={handleModuleChange} />
      <FloatingLogo />
    </div>
  );
}

export default App;
