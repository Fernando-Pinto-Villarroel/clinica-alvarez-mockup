import { User } from "lucide-react";
import BaseForm from "../BaseForm";

const ExpenseForm = ({ action, expenseToEdit, onSave, onCancel }) => {
  const fields = {
    date: {},
    amount: {},
    description: {},
    category: {},
    transactionType: {},
    receiver: {
      label: "Receptor/Destino",
      type: "text",
      icon: User,
      required: true,
      placeholder: "Nombre de persona o entidad",
    },
    shift: {},
  };

  const defaultValues = {
    receiver: "",
  };

  return (
    <BaseForm
      itemToEdit={expenseToEdit}
      onSave={onSave}
      onCancel={onCancel}
      fields={fields}
      entityType="Egreso"
      colorScheme="red"
      defaultValues={defaultValues}
    />
  );
};

export default ExpenseForm;
