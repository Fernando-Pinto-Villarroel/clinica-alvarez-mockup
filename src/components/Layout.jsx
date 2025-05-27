import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import ModuleContent from "./ModuleContent";

const Layout = ({ activeModule, onModuleChange }) => {
  return (
    <div className="min-h-screen flex flex-col bg-clinic-bg">
      <Header />
      <Navigation activeModule={activeModule} onModuleChange={onModuleChange} />

      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 flex flex-col">
          <ModuleContent activeModule={activeModule} />
        </main>
      </div>
    </div>
  );
};

export default Layout;
