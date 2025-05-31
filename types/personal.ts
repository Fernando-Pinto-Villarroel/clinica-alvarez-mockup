export interface PersonalMedico {
  _id: string
  first_name: string
  last_name: string
  document_type: string
  document_number: string
  birth_date: string
  gender: "masculino" | "femenino"
  phone: string
  email: string
  position: string
  department: string
  profession: string[]
  specialties: string[]
  medical_license: string
  hire_date: string
  contract_type: string
  salary: number
  work_schedule: {
    [key: string]: {
      start: string
      end: string
    }
  }
  emergency_contact: {
    name: string
    relationship: string
    phone: string
  }
  documents: string[]
  status: "activo" | "inactivo"
  created_at: string
  updated_at: string
}

export interface CitaMedica {
  id: string
  paciente: string
  medico_id: string
  fecha: string
  hora: string
  especialidad: string
  motivo: string
  estado: "programada" | "confirmada" | "en_curso" | "completada" | "cancelada"
  observaciones?: string
}
