import Header from "./Header";
import ModuleNavigation from "../modules/ModuleNavigation";
import Sidebar from "./Sidebar";
import ModuleContent from "../modules/ModuleContent";

const Layout = ({ activeModule, onModuleChange }) => {
  return (
    <div className="min-h-screen flex flex-col bg-clinic-bg">
      <Header />

      <div className="flex flex-1 min-h-0">
        <Sidebar />
        <div className="flex-1 flex flex-col min-h-0">
          <ModuleNavigation
            activeModule={activeModule}
            onModuleChange={onModuleChange}
          />
          <div className="flex-1 overflow-auto">
            <main className="p-6">
              <ModuleContent activeModule={activeModule} />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
