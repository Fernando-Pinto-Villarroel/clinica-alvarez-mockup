import ModuleActions from "./ModuleActions";

const ModuleContent = ({ activeModule }) => {
  return (
    <div className="flex-1 overflow-y-auto">
      <ModuleActions moduleId={activeModule} />
    </div>
  );
};

export default ModuleContent;
