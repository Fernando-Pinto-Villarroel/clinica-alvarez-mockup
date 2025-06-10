import { User } from "lucide-react";
import BaseForm from "../BaseForm";

const IncomeForm = ({ action, incomeToEdit, onSave, onCancel }) => {
  const fields = {
    date: {},
    amount: {},
    description: {},
    category: {},
    transactionType: {},
    sender: {
      label: "Remitente/Fuente",
      type: "text",
      icon: User,
      required: true,
      placeholder: "Nombre de persona o entidad",
    },
    shift: {},
  };

  const defaultValues = {
    sender: "",
  };

  const handleSave = (data) => {
    const incomeData = {
      ...data,
      payer: data.sender,
    };
    onSave(incomeData);
  };

  return (
    <BaseForm
      itemToEdit={incomeToEdit}
      onSave={handleSave}
      onCancel={onCancel}
      fields={fields}
      entityType="Ingreso"
      colorScheme="green"
      defaultValues={defaultValues}
    />
  );
};

export default IncomeForm;
