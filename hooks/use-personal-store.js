"use client"
import { create } from "zustand"

// Datos de ejemplo basados en tu JSON
const personalInicial = [
  {
    _id: "64a1b2c3d4e5f67890123401",
    first_name: "Carlos Alberto",
    last_name: "García Martínez",
    document_type: "cedula",
    document_number: "1234567890",
    birth_date: "1985-03-15T00:00:00Z",
    gender: "masculino",
    phone: "+57 300 123 4567",
    email: "carlos.garcia@clinica.com",
    position: "Médico Cardiólogo",
    department: "Cardiología",
    profession: ["Medico"],
    specialties: ["cardiologia", "medicina_interna"],
    medical_license: "12345-COL",
    hire_date: "2020-01-15T08:00:00Z",
    contract_type: "indefinido",
    salary: 8500000,
    work_schedule: {
      lunes: { start: "08:00", end: "17:00" },
      martes: { start: "08:00", end: "17:00" },
      miercoles: { start: "08:00", end: "17:00" },
      jueves: { start: "08:00", end: "17:00" },
      viernes: { start: "08:00", end: "16:00" },
    },
    emergency_contact: {
      name: "María García",
      relationship: "esposa",
      phone: "+57 300 987 6543",
    },
    documents: ["cedula", "diploma", "registro_medico", "hoja_vida"],
    status: "activo",
    created_at: "2020-01-10T09:00:00Z",
    updated_at: "2024-05-20T11:00:00Z",
  },
  {
    _id: "64a1b2c3d4e5f67890123402",
    first_name: "Diego",
    last_name: "Erquicia",
    document_type: "cedula",
    document_number: "9876543210",
    birth_date: "1980-07-22T00:00:00Z",
    gender: "masculino",
    phone: "+591 700 123 456",
    email: "diego.erquicia@clinica.com",
    position: "Médico General",
    department: "Medicina General",
    profession: ["Medico"],
    specialties: ["medicina_general", "medicina_familiar"],
    medical_license: "54321-BOL",
    hire_date: "2018-03-01T08:00:00Z",
    contract_type: "indefinido",
    salary: 7500000,
    work_schedule: {
      lunes: { start: "07:00", end: "15:00" },
      martes: { start: "07:00", end: "15:00" },
      miercoles: { start: "07:00", end: "15:00" },
      jueves: { start: "07:00", end: "15:00" },
      viernes: { start: "07:00", end: "14:00" },
      sabado: { start: "08:00", end: "12:00" },
    },
    emergency_contact: {
      name: "Ana Erquicia",
      relationship: "esposa",
      phone: "+591 700 987 654",
    },
    documents: ["cedula", "diploma", "registro_medico"],
    status: "activo",
    created_at: "2018-02-20T09:00:00Z",
    updated_at: "2024-05-20T11:00:00Z",
  },
]

export const usePersonalStore = create((set, get) => ({
  personal: personalInicial,
  medicos: personalInicial.filter((p) => p.profession.includes("Medico") && p.status === "activo"),

  addPersonal: (newPersonal) =>
    set((state) => {
      const updatedPersonal = [...state.personal, newPersonal]
      const updatedMedicos = updatedPersonal.filter((p) => p.profession.includes("Medico") && p.status === "activo")
      return {
        personal: updatedPersonal,
        medicos: updatedMedicos,
      }
    }),

  updatePersonal: (id, updates) =>
    set((state) => {
      const updatedPersonal = state.personal.map((p) => (p._id === id ? { ...p, ...updates } : p))
      const updatedMedicos = updatedPersonal.filter((p) => p.profession.includes("Medico") && p.status === "activo")
      return {
        personal: updatedPersonal,
        medicos: updatedMedicos,
      }
    }),

  getMedicosByEspecialidad: (especialidad) => {
    const { medicos } = get()
    return medicos.filter((medico) => medico.specialties.includes(especialidad))
  },

  getMedicoById: (id) => {
    const { medicos } = get()
    return medicos.find((medico) => medico._id === id)
  },

  getHorarioMedico: (medicoId, dia) => {
    const { medicos } = get()
    const medico = medicos.find((m) => m._id === medicoId)
    return medico?.work_schedule[dia.toLowerCase()] || null
  },
}))
