/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Calendar, ReceiptText, User, CreditCard } from "lucide-react";

const BaseForm = ({
  itemToEdit,
  onSave,
  onCancel,
  fields,
  entityType,
  colorScheme = "blue",
  defaultValues = {},
}) => {
  const getInitialFormData = () => ({
    date: new Date().toISOString().split("T")[0],
    description: "",
    amount: "",
    transactionType: "CASH",
    category: "",
    shift: "DAY",
    ...defaultValues,
  });

  const [formData, setFormData] = useState(getInitialFormData());
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (itemToEdit) {
      const editData = { ...getInitialFormData() };
      Object.keys(editData).forEach((key) => {
        if (itemToEdit[key] !== undefined) {
          editData[key] =
            key === "amount" ? itemToEdit[key].toString() : itemToEdit[key];
        }
      });
      setFormData(editData);
      setIsEditing(true);
    }
  }, [itemToEdit]);

  const transactionTypes = [
    { value: "CASH", label: "Efectivo" },
    { value: "QR", label: "QR" },
    { value: "TRANSFER", label: "Transferencia" },
    { value: "CARD", label: "Tarjeta" },
  ];

  const shifts = [
    { value: "DAY", label: "Día" },
    { value: "NIGHT", label: "Noche" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemData = {
      ...formData,
      amount: parseFloat(formData.amount),
      id: isEditing ? itemToEdit.id : Date.now(),
    };

    console.log(`${entityType} data:`, itemData);

    if (onSave) {
      onSave(itemData);
    } else {
      alert(
        isEditing
          ? `${entityType} actualizado correctamente`
          : `${entityType} registrado correctamente`
      );
      setFormData(getInitialFormData());
      setIsEditing(false);
    }
  };

  const handleClear = () => {
    setFormData(getInitialFormData());
    setIsEditing(false);
  };

  const getFieldConfig = (fieldName) => {
    const configs = {
      date: {
        label: "Fecha",
        type: "date",
        icon: Calendar,
        required: true,
      },
      amount: {
        label: "Monto (Bs.)",
        type: "number",
        icon: ReceiptText,
        required: true,
        min: "0",
        step: "0.01",
        placeholder: "0.00",
      },
      description: {
        label: "Descripción",
        type: "text",
        required: true,
        placeholder: `Descripción del ${entityType.toLowerCase()}`,
      },
      category: {
        label: "Categoría",
        type: "text",
        required: true,
        placeholder: `Categoría del ${entityType.toLowerCase()}`,
      },
      transactionType: {
        label: "Tipo de Transacción",
        type: "select",
        icon: CreditCard,
        required: true,
        options: transactionTypes,
      },
      shift: {
        label: "Turno",
        type: "select",
        required: true,
        options: shifts,
      },
    };

    return { ...configs[fieldName], ...fields[fieldName] };
  };

  const renderField = (fieldName) => {
    const config = getFieldConfig(fieldName);
    const IconComponent = config.icon;

    if (config.type === "select") {
      return (
        <div key={fieldName}>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {IconComponent && <IconComponent className="w-4 h-4 inline mr-1" />}
            {config.label}
          </label>
          <select
            name={fieldName}
            value={formData[fieldName]}
            onChange={handleChange}
            required={config.required}
            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-${colorScheme}-500`}
          >
            {config.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      );
    }

    return (
      <div key={fieldName}>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {IconComponent && <IconComponent className="w-4 h-4 inline mr-1" />}
          {config.label}
        </label>
        <input
          type={config.type}
          name={fieldName}
          value={formData[fieldName]}
          onChange={handleChange}
          required={config.required}
          min={config.min}
          step={config.step}
          placeholder={config.placeholder}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-${colorScheme}-500`}
        />
      </div>
    );
  };

  const buttonColorClass =
    colorScheme === "red"
      ? "bg-red-600 hover:bg-red-700"
      : "bg-green-600 hover:bg-green-700";

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.keys(fields).map(renderField)}
        </div>

        <div className="flex justify-end space-x-4 pt-6 border-t">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
          )}
          <button
            type="button"
            onClick={handleClear}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
          >
            Limpiar
          </button>
          <button
            type="submit"
            className={`px-6 py-2 ${buttonColorClass} text-white rounded-md transition-colors`}
          >
            {isEditing ? `Actualizar ${entityType}` : `Registrar ${entityType}`}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BaseForm;
