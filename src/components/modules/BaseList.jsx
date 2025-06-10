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
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("ALL");
  const [filterShift, setFilterShift] = useState("ALL");
  const [items, setItems] = useState(initialData);

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

  const transactionTypes = {
    CASH: "Efectivo",
    QR: "QR",
    TRANSFER: "Transferencia",
    CARD: "Tarjeta",
  };

  const shifts = {
    DAY: "Día",
    NIGHT: "Noche",
  };

  const filteredItems = items.filter((item) => {
    const matchesSearch = searchFields.some((field) =>
      item[field]?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesType =
      filterType === "ALL" || item.transactionType === filterType;
    const matchesShift = filterShift === "ALL" || item.shift === filterShift;

    return matchesSearch && matchesType && matchesShift;
  });

  const hasAmountData = filteredItems.some((item) => item.amount > 0);
  const totalAmount = filteredItems.reduce((sum, item) => sum + item.amount, 0);

  const handleEdit = (item) => {
    if (onEdit) {
      onEdit(item);
    } else {
      console.log(`Edit ${entityType.toLowerCase()}:`, item);
      alert(`Editar ${entityType.toLowerCase()}: ${item.description}`);
    }
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
      case "transactionType":
        return (
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              colorScheme === "red"
                ? "bg-red-100 text-red-800"
                : "bg-blue-100 text-blue-800"
            }`}
          >
            {transactionTypes[value]}
          </span>
        );
      case "shift":
        return (
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              value === "DAY"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-indigo-100 text-indigo-800"
            }`}
          >
            {shifts[value]}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Search className="w-4 h-4 inline mr-1" />
              Buscar
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por descripción o receptor"
              className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${focusRingClass}`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de Transacción
            </label>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${focusRingClass}`}
            >
              <option value="ALL">Todos los Tipos</option>
              <option value="CASH">Efectivo</option>
              <option value="QR">QR</option>
              <option value="TRANSFER">Transferencia</option>
              <option value="CARD">Tarjeta</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Turno
            </label>
            <select
              value={filterShift}
              onChange={(e) => setFilterShift(e.target.value)}
              className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${focusRingClass}`}
            >
              <option value="ALL">Todos los Turnos</option>
              <option value="DAY">Día</option>
              <option value="NIGHT">Noche</option>
            </select>
          </div>
        </div>
      </div>

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
                      className={`px-4 py-4 text-sm ${
                        column.type === "amount" ||
                        column.field === "date" ||
                        column.field === "category" ||
                        column.field === "shift"
                          ? "whitespace-nowrap"
                          : ""
                      } ${
                        column.field === "description" ||
                        column.field === "payer" ||
                        column.field === "receiver"
                          ? ""
                          : "text-gray-900"
                      }`}
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

        {filteredItems.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No se encontraron registros de {entityType.toLowerCase()}s
          </div>
        )}
      </div>
    </div>
  );
};

export default BaseList;
