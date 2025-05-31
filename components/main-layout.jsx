"use client";

import { Logo } from "./logo";
import SidebarSystem from "./Sidebar";
import ModuleNavigation from "./ModuleNavigation";
import Header from "./Header";

export const MainLayout = ({ activeModule, onModuleChange, children }) => {
  return (
    <div className="h-screen flex flex-col bg-clinic-bg overflow-hidden">
      <Header />

      <div className="flex flex-1 min-h-0">
        <SidebarSystem />
        <div className="flex-1 flex flex-col min-h-0">
          <ModuleNavigation
            activeModule={activeModule}
            onModuleChange={onModuleChange}
          />
          <div className="flex-1 overflow-auto">
            <main className="p-6">{children}</main>
          </div>
        </div>
      </div>
      <Logo />
    </div>
  );
};
