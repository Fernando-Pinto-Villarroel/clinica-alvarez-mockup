import {
  Calendar,
  Pill,
  Stethoscope,
  Users,
  UserPlus,
  Calculator,
  Plus,
  Edit,
  List,
  X,
  Bed,
  Search,
  FileText,
  Printer,
} from "lucide-react"

export const modules = [
  {
    id: "services",
    title: "Servicios",
    icon: Calendar,
    actions: [
      { id: "create", label: "Programar Servicio", icon: Plus, component: "ServiceForm" },
      { id: "update", label: "Editar Servicio Programado", icon: Edit, component: "ServiceList" },
      { id: "list", label: "Ver Servicios Programados", icon: List, component: "ServiceList" },
    ],
  },
  {
    id: "nursing",
    title: "Enfermería",
    icon: Pill,
    actions: [
      { id: "beds", label: "Gestión de Camas", icon: Bed },
      { id: "search", label: "Buscar Pacientes", icon: Search },
      { id: "observations", label: "Observaciones Médicas", icon: FileText, component: "PatientObservations" },
      { id: "print", label: "Imprimir Información", icon: Printer },
    ],
  },
  {
    id: "medical-consultations",
    title: "Medico",
    icon: Stethoscope,
    actions: [
      { id: "create", label: "Programar Consulta", icon: Plus },
      { id: "update", label: "Registrar Evolución y Diagnóstico", icon: Edit, component: "PatientObservations" },
      { id: "list", label: "Ver Pacientes Agendados", icon: List, component: "PatientList" },
    ],
  },
  {
    id: "personnel",
    title: "Gestión de Personal (RRHH)",
    icon: Users,
    actions: [
      {
        id: "create",
        label: "Registrar Personal",
        icon: Plus,
        component: "PersonnelForm",
      },
      {
        id: "update",
        label: "Actualizar Personal",
        icon: Edit,
        component: "PersonnelList",
      },
      {
        id: "list",
        label: "Ver Personal",
        icon: List,
        component: "PersonnelList",
      },
      {
        id: "delete",
        label: "Eliminar Personal",
        icon: X,
        component: "PersonnelList",
      },
    ],
  },
  {
    id: "patients",
    title: "Recepción",
    icon: UserPlus,
    actions: [
      {
        id: "create",
        label: "Registrar Paciente",
        icon: Plus,
        component: "PatientForm",
      },
      {
        id: "update",
        label: "Actualizar Información de Paciente",
        icon: Edit,
        component: "PatientList",
      },
      {
        id: "list",
        label: "Ver Pacientes y sus Historiales",
        icon: List,
        component: "PatientList",
      },
      {
        id: "delete",
        label: "Eliminar Paciente",
        icon: X,
        component: "PatientList",
      },
    ],
  },
  {
    id: "accounting",
    title: "Contabilidad",
    icon: Calculator,
    actions: [
      {
        id: "create-income",
        label: "Registrar Ingreso Económico",
        icon: Plus,
        component: "IncomeForm",
      },
      {
        id: "update-income",
        label: "Actualizar Ingreso Económico",
        icon: Edit,
        component: "IncomeList",
      },
      {
        id: "list-income",
        label: "Ver Ingresos Económicos",
        icon: List,
        component: "IncomeList",
      },
      {
        id: "create-expense",
        label: "Registrar Egreso Económico",
        icon: Plus,
        component: "ExpenseForm",
      },
      {
        id: "update-expense",
        label: "Actualizar Egreso Económico",
        icon: Edit,
        component: "ExpenseList",
      },
      {
        id: "list-expense",
        label: "Ver Egresos Económicos",
        icon: List,
        component: "ExpenseList",
      },
    ],
  },
];