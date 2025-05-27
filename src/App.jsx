import React, { useState } from "react";
import Layout from "./components/Layout";
import "./index.css";

function App() {
  const [activeModule, setActiveModule] = useState("services");

  const handleModuleChange = (moduleId) => {
    setActiveModule(moduleId);
  };

  return (
    <Layout activeModule={activeModule} onModuleChange={handleModuleChange} />
  );
}

export default App;
