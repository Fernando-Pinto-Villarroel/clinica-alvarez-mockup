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
      { id: "update", label: "Editar Servicio Programado", icon: Edit },
      { id: "list", label: "Ver Servicios Programados", icon: List },
    ],
  },
  {
    id: "nursing",
    title: "Enfermería",
    icon: Pill,
    actions: [
      { id: "create", label: "Registrar Paciente en Camilla", icon: Plus },
      { id: "update", label: "Actualizar Paciente en Camilla", icon: Edit },
      { id: "list", label: "Ver Pacientes en Camillas", icon: List },
      { id: "delete", label: "Desocupar Paciente en Camilla", icon: X },
    ],
  },
  {
    id: "medical-consultations",
    title: "Consultas Médicas",
    icon: Stethoscope,
    actions: [
      { id: "create", label: "Programar Consulta", icon: Plus },
      { id: "update", label: "Editar Consulta Programada", icon: Edit },
      { id: "list", label: "Ver Consultas Programadas", icon: List },
    ],
  },
  {
    id: "personnel",
    title: "Gestión de Personal (RRHH)",
    icon: Users,
    actions: [
      { id: "create", label: "Registrar Personal", icon: Plus },
      { id: "update", label: "Actualizar Personal", icon: Edit },
      { id: "list", label: "Ver Personal", icon: List },
      { id: "delete", label: "Eliminar Personal", icon: X },
    ],
  },
  {
    id: "patients",
    title: "Pacientes",
    icon: UserPlus,
    actions: [
      { id: "create", label: "Registrar Paciente", icon: Plus },
      { id: "update", label: "Actualizar Información de Paciente", icon: Edit },
      { id: "list", label: "Ver Pacientes y sus Historiales", icon: List },
      { id: "delete", label: "Eliminar Paciente", icon: X },
    ],
  },
  {
    id: "accounting",
    title: "Contabilidad",
    icon: Calculator,
    actions: [
      { id: "create-income", label: "Registrar Ingreso Económico", icon: Plus },
      {
        id: "update-income",
        label: "Actualizar Ingreso Económico",
        icon: Edit,
      },
      { id: "list-income", label: "Ver Ingresos Económicos", icon: List },
      {
        id: "create-expense",
        label: "Registrar Egreso Económico",
        icon: Plus,
      },
      {
        id: "update-expense",
        label: "Actualizar Egreso Económico",
        icon: Edit,
      },
      { id: "list-expense", label: "Ver Egresos Económicos", icon: List },
    ],
  },
  // {
  //   id: "users",
  //   title: "Usuarios",
  //   icon: User,
  //   actions: [
  //     { id: "create", label: "Registrar Usuario", icon: Plus },
  //     { id: "update", label: "Actualizar Usuario", icon: Edit },
  //     { id: "list", label: "Ver Usuarios", icon: List },
  //     { id: "delete", label: "Eliminar Usuario", icon: X },
  //   ],
  // },
];
