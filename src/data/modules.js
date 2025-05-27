import {
  Calendar,
  Pill,
  Stethoscope,
  Users,
  UserPlus,
  Calculator,
  User,
  Plus,
  Edit,
  List,
  X,
} from "lucide-react";

export const modules = [
  {
    id: "services",
    title: "Servicios",
    icon: Calendar,
    actions: [
      { id: "create", label: "Programar Servicio", icon: Plus },
      { id: "edit", label: "Editar Registro", icon: Edit },
      { id: "list", label: "Listar Registros", icon: List },
      { id: "cancel", label: "Cancelar Registro", icon: X },
    ],
  },
  {
    id: "pharmaceutical-supplies",
    title: "Insumos Farmacéuticos",
    icon: Pill,
    actions: [
      { id: "create", label: "Agregar Insumo", icon: Plus },
      { id: "edit", label: "Editar Insumo", icon: Edit },
      { id: "list", label: "Listar Insumos", icon: List },
      { id: "delete", label: "Eliminar Insumo", icon: X },
    ],
  },
  {
    id: "medical-consultations",
    title: "Consultas Médicas",
    icon: Stethoscope,
    actions: [
      { id: "create", label: "Nueva Consulta", icon: Plus },
      { id: "edit", label: "Editar Consulta", icon: Edit },
      { id: "list", label: "Listar Consultas", icon: List },
      { id: "cancel", label: "Cancelar Consulta", icon: X },
    ],
  },
  {
    id: "personnel",
    title: "Gestión de Personal (RRHH)",
    icon: Users,
    actions: [
      { id: "create", label: "Agregar Personal", icon: Plus },
      { id: "edit", label: "Editar Personal", icon: Edit },
      { id: "list", label: "Listar Personal", icon: List },
      { id: "delete", label: "Eliminar Personal", icon: X },
    ],
  },
  {
    id: "patients",
    title: "Pacientes",
    icon: UserPlus,
    actions: [
      { id: "create", label: "Registrar Paciente", icon: Plus },
      { id: "edit", label: "Editar Paciente", icon: Edit },
      { id: "list", label: "Listar Pacientes", icon: List },
      { id: "delete", label: "Eliminar Paciente", icon: X },
    ],
  },
  {
    id: "accounting",
    title: "Contabilidad",
    icon: Calculator,
    actions: [
      { id: "create", label: "Nuevo Registro", icon: Plus },
      { id: "edit", label: "Editar Registro", icon: Edit },
      { id: "list", label: "Ver Reportes", icon: List },
      { id: "delete", label: "Eliminar Registro", icon: X },
    ],
  },
  {
    id: "users",
    title: "Usuarios",
    icon: User,
    actions: [
      { id: "create", label: "Crear Usuario", icon: Plus },
      { id: "edit", label: "Editar Usuario", icon: Edit },
      { id: "list", label: "Listar Usuarios", icon: List },
      { id: "delete", label: "Eliminar Usuario", icon: X },
    ],
  },
];
