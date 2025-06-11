import { useState } from "react";
import {
  Calendar,
  ReceiptText,
  User,
  CreditCard,
  Edit,
  Trash2,
  Search,
} from "lucide-react";

const BaseList = ({
  action,
  onEdit,
  initialData = [],
  entityType,
  colorScheme = "blue",
  columns = [],
  searchFields = ["description"],
  hideListUntilSearch = false,
  filterConfig = [],
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState(
    Object.fromEntries(filterConfig.map((f) => [f.name, "ALL"]))
  );
  const [items, setItems] = useState(initialData);

  const userHasSearched = searchTerm.trim() !== "";

  const isListAction =
    action?.id === "list" || action?.label?.toLowerCase().includes("ver");
  const isUpdateAction =
    action?.id === "update" ||
    action?.label?.toLowerCase().includes("actualizar") ||
    action?.label?.toLowerCase().includes("editar");
  const isDeleteAction =
    action?.id === "delete" ||
    action?.label?.toLowerCase().includes("eliminar");

  const showActions = !isListAction;
  const showEditAction = isUpdateAction;
  const showDeleteAction = isDeleteAction;

  const filteredItems = items.filter((item) => {
    const matchesSearch = searchFields.some((field) =>
      item[field]?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const matchesFilters = Object.entries(filters).every(([key, value]) => {
      return value === "ALL" || item[key] === value;
    });

    return matchesSearch && matchesFilters;
  });

  const hasAmountData = filteredItems.some((item) => item.amount > 0);
  const totalAmount = filteredItems.reduce((sum, item) => sum + item.amount, 0);

  const handleEdit = (item) => {
    if (onEdit) onEdit(item);
  };

  const handleDelete = (item) => {
    if (
      window.confirm(
        `¿Eliminar ${entityType.toLowerCase()}: ${item.description}?`
      )
    ) {
      setItems(items.filter((i) => i.id !== item.id));
      alert(`${entityType} eliminado exitosamente`);
    }
  };

  const getColumnIcon = (columnType) => {
    const icons = {
      date: Calendar,
      amount: ReceiptText,
      transactionType: CreditCard,
      payer: User,
      receiver: User,
    };
    return icons[columnType] || null;
  };

  const renderCellContent = (item, column) => {
    const value = item[column.field];

    switch (column.type) {
      case "amount":
        return (
          <span
            className={`font-medium ${
              colorScheme === "red" ? "text-red-600" : "text-green-600"
            }`}
          >
            {value.toFixed(2)}
          </span>
        );
      default:
        return value;
    }
  };

  const borderColorClass =
    colorScheme === "red" ? "border-red-200" : "border-blue-200";
  const bgColorClass = colorScheme === "red" ? "bg-red-50" : "bg-blue-50";
  const textColorClass =
    colorScheme === "red" ? "text-red-800" : "text-blue-800";
  const headerBgClass = colorScheme === "red" ? "bg-red-600" : "bg-blue-600";
  const focusRingClass =
    colorScheme === "red" ? "focus:ring-red-500" : "focus:ring-blue-500";

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className={`grid grid-cols-1 md:grid-cols-${1 + filterConfig.length} gap-4`}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Search className="w-4 h-4 inline mr-1" />
              Buscar
            </label>
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setSearchTerm(searchInput.trim());
                }
              }}
              placeholder="Buscar..."
              className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${focusRingClass}`}
            />
          </div>

          {filterConfig.map((filter) => (
            <div key={filter.name}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {filter.label}
              </label>
              <select
                value={filters[filter.name]}
                onChange={(e) =>
                  setFilters({ ...filters, [filter.name]: e.target.value })
                }
                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${focusRingClass}`}
              >
                {filter.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>

      {(!hideListUntilSearch || userHasSearched) && (
        <>
          <div
            className={`${bgColorClass} border ${borderColorClass} rounded-lg p-4`}
          >
            <div className="flex justify-between items-center">
              <span className={`${textColorClass} font-medium`}>
                Total de Registros: {filteredItems.length}
              </span>
              {hasAmountData && (
                <span className={`${textColorClass} font-bold text-lg`}>
                  Monto Total: {totalAmount.toFixed(2)} Bs.
                </span>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className={headerBgClass}>
                  <tr>
                    {columns.map((column) => {
                      const IconComponent = getColumnIcon(column.field);
                      return (
                        <th
                          key={column.field}
                          className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                        >
                          {IconComponent && (
                            <IconComponent className="w-4 h-4 inline mr-1" />
                          )}
                          {column.label}
                        </th>
                      );
                    })}
                    {showActions && (
                      <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Acciones
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredItems.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      {columns.map((column) => (
                        <td
                          key={column.field}
                          className="px-4 py-4 text-sm text-gray-900"
                        >
                          {renderCellContent(item, column)}
                        </td>
                      ))}
                      {showActions && (
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            {showEditAction && (
                              <button
                                onClick={() => handleEdit(item)}
                                className="text-blue-600 hover:text-blue-900 p-1 hover:bg-blue-50 rounded"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                            )}
                            {showDeleteAction && (
                              <button
                                onClick={() => handleDelete(item)}
                                className="text-red-600 hover:text-red-900 p-1 hover:bg-red-50 rounded"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredItems.length === 0 && userHasSearched && (
              <div className="text-center py-8 text-gray-500">
                No se encontraron registros de {entityType.toLowerCase()}s
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default BaseList;
