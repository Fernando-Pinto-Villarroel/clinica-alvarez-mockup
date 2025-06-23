import { useState } from "react";
import IncomeForm from "./accounting/IncomeForm";
import IncomeList from "./accounting/IncomeList";
import ExpenseForm from "./accounting/ExpenseForm";
import ExpenseList from "./accounting/ExpenseList";
import PatientForm from "./patients/PatientForm";
import PatientList from "./patients/PatientList";
import PersonnelForm from "./personnel/PersonnelForm";
import PersonnelList from "./personnel/PersonnelList";
import ServiceForm from "./services/ServiceForm";
import ServiceList from "./services/ServiceList";
import DoctorDashboard from "./medical/DoctorDashboard";

const componentMap = {
  IncomeForm,
  IncomeList,
  ExpenseForm,
  ExpenseList,
  PatientForm,
  PatientList,
  PersonnelForm,
  PersonnelList,
  ServiceForm,
  ServiceList,
  DoctorDashboard,
};

const ComponentRenderer = ({ componentName, action, moduleId }) => {
  const [editingItem, setEditingItem] = useState(null);
  const [showForm, setShowForm] = useState(false);

  if (moduleId === 'medical-consultations') {
    const DoctorComponent = componentMap['DoctorDashboard'];
    return <DoctorComponent />;
  }

  const Component = componentMap[componentName];

  if (!Component) {
    return (
      <div className="text-center py-8">
        <div className="text-gray-500 text-lg">
          Component "{componentName}" not found
        </div>
      </div>
    );
  }

  const handleEdit = (item) => {
    setEditingItem(item);
    setShowForm(true);
  };

  const handleSave = (data) => {
    console.log("Saving:", data);
    setEditingItem(null);
    setShowForm(false);
    alert(
      editingItem
        ? "Registro actualizado correctamente"
        : "Registro guardado correctamente"
    );
  };

  const handleCancel = () => {
    setEditingItem(null);
    setShowForm(false);
  };

  if (showForm) {
    const FormComponent =
      componentName === "IncomeList"
        ? IncomeForm
        : componentName === "ExpenseList"
        ? ExpenseForm
        : componentName === "PatientList"
        ? PatientForm
        : componentName === "PersonnelList"
        ? PersonnelForm
        : componentName === "ServiceList"
        ? ServiceForm
        : Component;

    return (
      <div>
        <div className="mb-4">
          <button
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            ← Volver a la Lista
          </button>
        </div>
        <FormComponent
          action={action}
          incomeToEdit={
            componentName === "IncomeList" ? editingItem : undefined
          }
          expenseToEdit={
            componentName === "ExpenseList" ? editingItem : undefined
          }
          patientToEdit={
            componentName === "PatientList" ? editingItem : undefined
          }
          personnelToEdit={
            componentName === "PersonnelList" ? editingItem : undefined
          }
          serviceToEdit={
            componentName === "ServiceList" ? editingItem : undefined
          }
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </div>
    );
  }

  return <Component action={action} moduleId={moduleId} onEdit={handleEdit} />;
};

export default ComponentRenderer;