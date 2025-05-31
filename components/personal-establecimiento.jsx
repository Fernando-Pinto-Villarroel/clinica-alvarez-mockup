"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Pencil, Plus, Printer } from "lucide-react"
import { Logo } from "@/components/logo"
import { usePersonalStore } from "@/hooks/use-personal-store"

export function PersonalEstablecimiento() {
  const { personal, addPersonal, updatePersonal } = usePersonalStore()
  const [showForm, setShowForm] = useState(false)
  const [editingPersonal, setEditingPersonal] = useState(null)

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    document_type: "cedula",
    document_number: "",
    birth_date: "",
    gender: "masculino",
    phone: "",
    email: "",
    position: "",
    department: "",
    profession: [],
    specialties: [],
    medical_license: "",
    hire_date: "",
    contract_type: "indefinido",
    salary: 0,
    work_schedule: {
      lunes: { start: "", end: "" },
      martes: { start: "", end: "" },
      miercoles: { start: "", end: "" },
      jueves: { start: "", end: "" },
      viernes: { start: "", end: "" },
      sabado: { start: "", end: "" },
      domingo: { start: "", end: "" },
    },
    emergency_contact: {
      name: "",
      relationship: "",
      phone: "",
    },
    documents: [],
    status: "activo",
  })

  const handlePrint = () => window.print()

  const handleSubmit = () => {
    const newPersonal = {
      _id: Date.now().toString(),
      ...formData,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    if (editingPersonal) {
      updatePersonal(editingPersonal._id, formData)
    } else {
      addPersonal(newPersonal)
    }

    // Reset form
    setFormData({
      first_name: "",
      last_name: "",
      document_type: "cedula",
      document_number: "",
      birth_date: "",
      gender: "masculino",
      phone: "",
      email: "",
      position: "",
      department: "",
      profession: [],
      specialties: [],
      medical_license: "",
      hire_date: "",
      contract_type: "indefinido",
      salary: 0,
      work_schedule: {
        lunes: { start: "", end: "" },
        martes: { start: "", end: "" },
        miercoles: { start: "", end: "" },
        jueves: { start: "", end: "" },
        viernes: { start: "", end: "" },
        sabado: { start: "", end: "" },
        domingo: { start: "", end: "" },
      },
      emergency_contact: {
        name: "",
        relationship: "",
        phone: "",
      },
      documents: [],
      status: "activo",
    })
    setShowForm(false)
    setEditingPersonal(null)
  }

  const handleEdit = (person) => {
    setFormData({
      first_name: person.first_name,
      last_name: person.last_name,
      document_type: person.document_type,
      document_number: person.document_number,
      birth_date: person.birth_date.split("T")[0],
      gender: person.gender,
      phone: person.phone,
      email: person.email,
      position: person.position,
      department: person.department,
      profession: person.profession,
      specialties: person.specialties,
      medical_license: person.medical_license,
      hire_date: person.hire_date.split("T")[0],
      contract_type: person.contract_type,
      salary: person.salary,
      work_schedule: person.work_schedule,
      emergency_contact: person.emergency_contact,
      documents: person.documents,
      status: person.status,
    })
    setEditingPersonal(person)
    setShowForm(true)
  }

  const handleProfessionChange = (profession, checked) => {
    setFormData((prev) => ({
      ...prev,
      profession: checked ? [...prev.profession, profession] : prev.profession.filter((p) => p !== profession),
    }))
  }

  const handleSpecialtyChange = (specialty, checked) => {
    setFormData((prev) => ({
      ...prev,
      specialties: checked ? [...prev.specialties, specialty] : prev.specialties.filter((s) => s !== specialty),
    }))
  }

  const handleScheduleChange = (day, field, value) => {
    setFormData((prev) => ({
      ...prev,
      work_schedule: {
        ...prev.work_schedule,
        [day]: {
          ...prev.work_schedule[day],
          [field]: value,
        },
      },
    }))
  }

  return (
    <div>
      {/* Header para impresión */}
      <div className="print:block hidden mb-4 text-center border-b pb-4">
        <div className="flex justify-center items-center mb-2">
          <Logo size="lg" />
        </div>
        <h1 className="text-xl font-bold">MÓDULO 4 - PERSONAL (RRHH): DIEGO ERQUICIA</h1>
        <p className="text-sm">Gestión de Recursos Humanos - Clínica Alvarez</p>
      </div>

      <div className="flex justify-between items-center mb-4 print:hidden">
        <h2 className="text-2xl font-semibold text-[#2980b9]">Personal del Establecimiento</h2>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setShowForm(true)}>
            <Plus className="h-4 w-4 mr-1" />
            Nuevo Personal
          </Button>
          <Button variant="outline" onClick={handlePrint}>
            <Printer className="h-4 w-4 mr-1" />
            Imprimir
          </Button>
        </div>
      </div>

      {showForm && (
        <Card className="mb-6">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-[#2980b9] mb-4">
              {editingPersonal ? "Editar Personal" : "Nuevo Personal"}
            </h3>

            {/* Información Personal */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <Label>Nombres</Label>
                <Input
                  value={formData.first_name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, first_name: e.target.value }))}
                />
              </div>
              <div>
                <Label>Apellidos</Label>
                <Input
                  value={formData.last_name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, last_name: e.target.value }))}
                />
              </div>
              <div>
                <Label>Número de Documento</Label>
                <Input
                  value={formData.document_number}
                  onChange={(e) => setFormData((prev) => ({ ...prev, document_number: e.target.value }))}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <Label>Fecha de Nacimiento</Label>
                <Input
                  type="date"
                  value={formData.birth_date}
                  onChange={(e) => setFormData((prev) => ({ ...prev, birth_date: e.target.value }))}
                />
              </div>
              <div>
                <Label>Género</Label>
                <Select
                  value={formData.gender}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, gender: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="masculino">Masculino</SelectItem>
                    <SelectItem value="femenino">Femenino</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Teléfono</Label>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                />
              </div>
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                />
              </div>
            </div>

            {/* Información Laboral */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <Label>Cargo</Label>
                <Input
                  value={formData.position}
                  onChange={(e) => setFormData((prev) => ({ ...prev, position: e.target.value }))}
                />
              </div>
              <div>
                <Label>Departamento</Label>
                <Input
                  value={formData.department}
                  onChange={(e) => setFormData((prev) => ({ ...prev, department: e.target.value }))}
                />
              </div>
              <div>
                <Label>Salario</Label>
                <Input
                  type="number"
                  value={formData.salary}
                  onChange={(e) => setFormData((prev) => ({ ...prev, salary: Number(e.target.value) }))}
                />
              </div>
            </div>

            {/* Profesiones */}
            <div className="mb-4">
              <Label className="text-[#2980b9] font-medium">Profesiones:</Label>
              <div className="flex gap-4 mt-2">
                {["Administrativo", "Medico", "Enfermero"].map((prof) => (
                  <div key={prof} className="flex items-center gap-2">
                    <Checkbox
                      checked={formData.profession.includes(prof)}
                      onCheckedChange={(checked) => handleProfessionChange(prof, checked)}
                    />
                    <Label>{prof}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Especialidades (solo si es médico) */}
            {formData.profession.includes("Medico") && (
              <div className="mb-4">
                <Label className="text-[#2980b9] font-medium">Especialidades Médicas:</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                  {[
                    "medicina_general",
                    "cardiologia",
                    "pediatria",
                    "ginecologia",
                    "traumatologia",
                    "neurologia",
                    "dermatologia",
                    "medicina_interna",
                    "medicina_familiar",
                    "cirugia_general",
                  ].map((specialty) => (
                    <div key={specialty} className="flex items-center gap-2">
                      <Checkbox
                        checked={formData.specialties.includes(specialty)}
                        onCheckedChange={(checked) => handleSpecialtyChange(specialty, checked)}
                      />
                      <Label className="text-sm">{specialty.replace("_", " ").toUpperCase()}</Label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Registro Médico (solo si es médico) */}
            {formData.profession.includes("Medico") && (
              <div className="mb-4">
                <Label>Registro Médico</Label>
                <Input
                  value={formData.medical_license}
                  onChange={(e) => setFormData((prev) => ({ ...prev, medical_license: e.target.value }))}
                  placeholder="Número de registro médico"
                />
              </div>
            )}

            {/* Horario de Trabajo */}
            <div className="mb-4">
              <Label className="text-[#2980b9] font-medium">Horario de Trabajo:</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                {Object.keys(formData.work_schedule).map((day) => (
                  <div key={day} className="border p-3 rounded">
                    <Label className="font-medium capitalize">{day}</Label>
                    <div className="flex gap-2 mt-2">
                      <Input
                        type="time"
                        placeholder="Inicio"
                        value={formData.work_schedule[day].start}
                        onChange={(e) => handleScheduleChange(day, "start", e.target.value)}
                      />
                      <Input
                        type="time"
                        placeholder="Fin"
                        value={formData.work_schedule[day].end}
                        onChange={(e) => handleScheduleChange(day, "end", e.target.value)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contacto de Emergencia */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <Label>Contacto de Emergencia - Nombre</Label>
                <Input
                  value={formData.emergency_contact.name}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      emergency_contact: { ...prev.emergency_contact, name: e.target.value },
                    }))
                  }
                />
              </div>
              <div>
                <Label>Relación</Label>
                <Input
                  value={formData.emergency_contact.relationship}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      emergency_contact: { ...prev.emergency_contact, relationship: e.target.value },
                    }))
                  }
                />
              </div>
              <div>
                <Label>Teléfono de Emergencia</Label>
                <Input
                  value={formData.emergency_contact.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      emergency_contact: { ...prev.emergency_contact, phone: e.target.value },
                    }))
                  }
                />
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  setShowForm(false)
                  setEditingPersonal(null)
                }}
              >
                Cancelar
              </Button>
              <Button onClick={handleSubmit} className="bg-[#2980b9] hover:bg-[#1a5b8e]">
                {editingPersonal ? "Actualizar" : "Guardar"}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Lista de Personal */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 z-10">
            <tr className="bg-gray-800 text-white">
              <th className="p-2 text-left">Nombre Completo</th>
              <th className="p-2 text-left">Documento</th>
              <th className="p-2 text-left">Cargo</th>
              <th className="p-2 text-left">Departamento</th>
              <th className="p-2 text-left">Profesión</th>
              <th className="p-2 text-left">Especialidades</th>
              <th className="p-2 text-left">Estado</th>
              <th className="p-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {personal.map((person) => (
              <tr key={person._id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-2">
                  {person.first_name} {person.last_name}
                </td>
                <td className="p-2">{person.document_number}</td>
                <td className="p-2">{person.position}</td>
                <td className="p-2">{person.department}</td>
                <td className="p-2">{person.profession.join(", ")}</td>
                <td className="p-2">{person.specialties.join(", ")}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      person.status === "activo" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {person.status}
                  </span>
                </td>
                <td className="p-2">
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(person)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
