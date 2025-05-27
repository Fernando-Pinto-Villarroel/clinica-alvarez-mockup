import { modules } from "../../data/modules.js";

const ModuleActions = ({ moduleId }) => {
  const module = modules.find((m) => m.id === moduleId);

  if (!module) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 mx-8 my-6">
        <div className="text-center text-gray-500">Module not found</div>
      </div>
    );
  }

  const buttonsCount = module.actions.length;
  const columnsPerRow = buttonsCount % 3 === 0 ? 3 : 4;

  const gridClasses = `grid gap-6 mb-8 justify-items-center ${
    columnsPerRow === 3
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  }`;

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mx-8 my-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        Gestionar {module.title}
      </h2>

      <div className={gridClasses}>
        {module.actions.map((action) => {
          const IconComponent = action.icon;
          return (
            <button
              key={action.id}
              className={`bg-white p-6 rounded-lg border-2 border-gray hover:border-gray-300 transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md w-full max-w-xs`}
            >
              <div className="flex flex-col items-center space-y-3">
                <IconComponent size={32} />
                <span className="text-base font-normal text-center leading-tight">
                  {action.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <p className="text-gray-600">
          Selecciona uno de los botones de gestión de "{module.title}" para
          realizar la operación correspondiente.
        </p>
      </div>
    </div>
  );
};

export default ModuleActions;
