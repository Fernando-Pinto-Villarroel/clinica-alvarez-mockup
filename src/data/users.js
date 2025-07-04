export const ROLES = {
  ADMINISTRADOR: "administrador",
  MEDICO: "medico",
  RECEPCIONISTA: "recepcionista",
  FARMACEUTICO: "farmaceutico",
  ENFERMERIA: "enfermeria",
  TECNICO: "tecnico",
}

export const ROLE_PERMISSIONS = {
  [ROLES.ADMINISTRADOR]: {
    modules: [
      "personnel",
      "accounting",
      "users",
      "patients",
      "medical-consultations",
      "services",
      "nursing",
      "pharmacy",
    ],
    actions: {
      personnel: ["create", "list", "update", "delete"],
      accounting: [
        "create-income",
        "list-income",
        "update-income",
        "delete-income",
        "create-expense",
        "list-expense",
        "update-expense",
        "delete-expense",
      ],
      users: ["create", "list", "update", "delete"],
      patients: ["create", "list", "update", "delete"],
      "medical-consultations": ["create", "list", "update", "delete"],
      services: ["create", "list", "update", "delete"],
      nursing: ["create", "list", "update", "delete"],
      pharmacy: [
        "import-apdesc",
        "register-articles",
        "modify-articles",
        "advanced-search",
        "inventory",
        "sales-code",
        "suppliers",
        "sales-report",
        "expiring-products",
        "ticket-config",
      ],
    },
  },
  [ROLES.RECEPCIONISTA]: {
    modules: ["patients", "accounting"],
    actions: {
      patients: ["create", "list"],
      accounting: ["list-income", "list-expense"],
    },
  },
  [ROLES.MEDICO]: {
    modules: ["medical-consultations", "nursing"],
    actions: {
      "medical-consultations": ["list", "update"],
      nursing: ["observations"],
    },
  },
  [ROLES.FARMACEUTICO]: {
    modules: ["pharmacy", "nursing"],
    actions: {
      pharmacy: [
        "import-apdesc",
        "register-articles",
        "modify-articles",
        "advanced-search",
        "inventory",
        "sales-code",
        "suppliers",
        "sales-report",
        "expiring-products",
        "ticket-config",
      ],
      nursing: ["create", "list", "update", "delete"],
    },
  },
  [ROLES.ENFERMERIA]: {
    modules: ["nursing", "services"],
    actions: {
      nursing: ["beds", "search", "observations", "print"],
      services: ["create", "list", "update"],
    },
  },
  [ROLES.TECNICO]: {
    modules: ["services"],
    actions: {
      services: ["list", "update"],
    },
  },
}

export const MOCK_USERS = [
  {
    id: 1,
    username: "admin",
    name: "Dr. Carlos Admin",
    role: ROLES.ADMINISTRADOR,
  },
  {
    id: 2,
    username: "medico1",
    name: "Dr. María González",
    role: ROLES.MEDICO,
  },
  {
    id: 3,
    username: "recep1",
    name: "Ana Receptionist",
    role: ROLES.RECEPCIONISTA,
  },
  {
    id: 4,
    username: "farm1",
    name: "Luis Farmacéutico",
    role: ROLES.FARMACEUTICO,
  },
  { id: 5, username: "enf1", name: "Carmen Enfermera", role: ROLES.ENFERMERIA },
  { id: 6, username: "tec1", name: "Pedro Técnico", role: ROLES.TECNICO },
]
