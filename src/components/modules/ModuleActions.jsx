import { modules } from "../../data/modules.js";
import { useAuth } from "../../auth/AuthContext";

const ModuleActions = ({ moduleId }) => {
  const { hasModuleAccess, hasActionAccess, currentUser, getRoleDisplayName } =
    useAuth();
  const module = modules.find((m) => m.id === moduleId);

  if (!hasModuleAccess(moduleId)) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 mx-8 my-6">
        <div className="text-center">
          <div className="text-red-500 text-lg font-semibold mb-4">
            Acceso Denegado
          </div>
          <div className="text-gray-600 mb-4">
            Tu rol "{getRoleDisplayName(currentUser?.role)}" no tiene permisos
            para acceder a este módulo.
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
            Contacta al administrador del sistema si necesitas acceso a esta
            funcionalidad.
          </div>
        </div>
      </div>
    );
  }

  if (!module) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 mx-8 my-6">
        <div className="text-center text-gray-500">Module not found</div>
      </div>
    );
  }

  const accessibleActions = module.actions.filter((action) =>
    hasActionAccess(moduleId, action.id)
  );

  if (accessibleActions.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 mx-8 my-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Gestionar {module.title}
        </h2>

        <div className="text-center">
          <div className="text-yellow-600 text-lg font-semibold mb-4">
            Sin Acciones Disponibles
          </div>
          <div className="text-gray-600 mb-4">
            Tu rol "{getRoleDisplayName(currentUser?.role)}" no tiene permisos
            para realizar acciones en este módulo.
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-700">
            Contacta al administrador del sistema si necesitas permisos
            adicionales.
          </div>
        </div>
      </div>
    );
  }

  const buttonsCount = accessibleActions.length;
  const columnsPerRow = buttonsCount % 3 === 0 ? 3 : 4;

  const gridClasses = `grid gap-6 mb-8 justify-items-center ${
    columnsPerRow === 3
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  }`;

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mx-8 my-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          Gestionar {module.title}
        </h2>
        <div className="text-sm text-gray-500">
          Rol: {getRoleDisplayName(currentUser?.role)}
        </div>
      </div>

      <div className={gridClasses}>
        {accessibleActions.map((action) => {
          const IconComponent = action.icon;
          return (
            <button
              key={action.id}
              onClick={() => {
                console.log(
                  `Action ${action.id} clicked for module ${moduleId}`
                );
              }}
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

      <div className="bg-gray-50 rounded-lg p-6">
        <div className="text-center">
          <p className="text-gray-600 mb-3">
            Selecciona uno de los botones de gestión de "{module.title}" para
            realizar la operación correspondiente.
          </p>
          <div className="text-sm text-gray-500">
            Acciones disponibles: {accessibleActions.length} de{" "}
            {module.actions.length} • Usuario: {currentUser?.name} (
            {getRoleDisplayName(currentUser?.role)})
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleActions;
