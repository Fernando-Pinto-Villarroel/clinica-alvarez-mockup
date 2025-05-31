"use client"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Printer, User, Stethoscope } from "lucide-react"
import { Logo } from "@/components/logo"
import { usePersonalStore } from "@/hooks/use-personal-store"

export function ConsultasMedicas() {
  const { medicos, getMedicosByEspecialidad, getMedicoById, getHorarioMedico } = usePersonalStore()
  const [selectedEspecialidad, setSelectedEspecialidad] = useState("")
  const [selectedMedico, setSelectedMedico] = useState("")
  const [selectedFecha, setSelectedFecha] = useState("")
  const [horariosDisponibles, setHorariosDisponibles] = useState([])

  const [citas, setCitas] = useState([
    {
      id: "1",
      paciente: "María González",
      medico_id: "64a1b2c3d4e5f67890123402",
      fecha: "2024-01-15",
      hora: "09:00",
      especialidad: "medicina_general",
      motivo: "Control rutinario",
      estado: "confirmada",
    },
    {
      id: "2",
      paciente: "Juan Pérez",
      medico_id: "64a1b2c3d4e5f67890123401",
      fecha: "2024-01-15",
      hora: "10:30",
      especialidad: "cardiologia",
      motivo: "Dolor en el pecho",
      estado: "en_curso",
    },
  ])

  const [nuevaCita, setNuevaCita] = useState({
    paciente: "",
    medico_id: "",
    fecha: "",
    hora: "",
    especialidad: "",
    motivo: "",
    observaciones: "",
  })

  // Obtener especialidades únicas de los médicos activos
  const especialidadesDisponibles = [...new Set(medicos.flatMap((m) => m.specialties))]

  // Obtener médicos filtrados por especialidad
  const medicosDisponibles = selectedEspecialidad ? getMedicosByEspecialidad(selectedEspecialidad) : medicos

  // Generar horarios disponibles basados en el horario del médico
  useEffect(() => {
    if (selectedMedico && selectedFecha) {
      const fecha = new Date(selectedFecha)
      const diaSemana = fecha.toLocaleDateString("es-ES", { weekday: "long" }).toLowerCase()

      const horario = getHorarioMedico(selectedMedico, diaSemana)

      if (horario) {
        const horarios = generarHorarios(horario.start, horario.end)
        // Filtrar horarios ya ocupados
        const citasDelDia = citas.filter(
          (c) => c.medico_id === selectedMedico && c.fecha === selectedFecha && c.estado !== "cancelada",
        )
        const horariosOcupados = citasDelDia.map((c) => c.hora)
        const horariosLibres = horarios.filter((h) => !horariosOcupados.includes(h))

        setHorariosDisponibles(horariosLibres)
      } else {
        setHorariosDisponibles([])
      }
    }
  }, [selectedMedico, selectedFecha, citas])

  const generarHorarios = (inicio, fin) => {
    const horarios = []
    const [horaInicio, minutoInicio] = inicio.split(":").map(Number)
    const [horaFin, minutoFin] = fin.split(":").map(Number)

    let horaActual = horaInicio
    let minutoActual = minutoInicio

    while (horaActual < horaFin || (horaActual === horaFin && minutoActual < minutoFin)) {
      const horaStr = horaActual.toString().padStart(2, "0")
      const minutoStr = minutoActual.toString().padStart(2, "0")
      horarios.push(`${horaStr}:${minutoStr}`)

      minutoActual += 30 // Citas cada 30 minutos
      if (minutoActual >= 60) {
        horaActual += 1
        minutoActual = 0
      }
    }

    return horarios
  }

  const handlePrint = () => window.print()

  const handleAgendarCita = () => {
    const nuevaCitaCompleta = {
      id: Date.now().toString(),
      ...nuevaCita,
      estado: "programada",
    }

    setCitas((prev) => [...prev, nuevaCitaCompleta])

    // Reset form
    setNuevaCita({
      paciente: "",
      medico_id: "",
      fecha: "",
      hora: "",
      especialidad: "",
      motivo: "",
      observaciones: "",
    })
    setSelectedEspecialidad("")
    setSelectedMedico("")
    setSelectedFecha("")
  }

  const getMedicoNombre = (medicoId) => {
    const medico = getMedicoById(medicoId)
    return medico ? `${medico.first_name} ${medico.last_name}` : "Médico no encontrado"
  }

  const getEspecialidadNombre = (especialidad) => {
    return especialidad.replace("_", " ").toUpperCase()
  }

  return (
    <div>
      {/* Header para impresión */}
      <div className="print:block hidden mb-4 text-center border-b pb-4">
        <div className="flex justify-center items-center mb-2">
          <Logo size="lg" />
        </div>
        <h1 className="text-xl font-bold">MÓDULO 3 - CONSULTAS MÉDICAS: DIEGO ERQUICIA</h1>
        <p className="text-sm">Gestión de Consultas y Atención Médica - Clínica Alvarez</p>
      </div>

      <div className="flex justify-between items-center mb-4 print:hidden">
        <h2 className="text-2xl font-semibold text-[#2980b9]">Consultas Médicas</h2>
        <Button variant="outline" onClick={handlePrint} className="flex items-center gap-1">
          <Printer className="h-4 w-4" />
          <span>Imprimir</span>
        </Button>
      </div>

      {/* Médicos Disponibles */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-[#2980b9] flex items-center gap-2">
            <Stethoscope className="h-5 w-5" />
            Médicos Disponibles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {medicos.map((medico) => (
              <div key={medico._id} className="border rounded-lg p-4 bg-gray-50">
                <div className="flex items-center gap-2 mb-2">
                  <User className="h-4 w-4 text-[#2980b9]" />
                  <h3 className="font-medium">
                    {medico.first_name} {medico.last_name}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">{medico.position}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {medico.specialties.map((specialty) => (
                    <Badge key={specialty} variant="outline" className="text-xs">
                      {getEspecialidadNombre(specialty)}
                    </Badge>
                  ))}
                </div>
                <div className="text-xs text-gray-500">
                  <p className="font-medium">Horarios:</p>
                  {Object.entries(medico.work_schedule).map(
                    ([day, schedule]) =>
                      schedule.start &&
                      schedule.end && (
                        <p key={day} className="capitalize">
                          {day}: {schedule.start} - {schedule.end}
                        </p>
                      ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Agenda del día */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#2980b9] flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Agenda del Día
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {citas.map((cita) => (
                <div key={cita.id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <div>
                    <p className="font-medium">{cita.paciente}</p>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {cita.hora} - {getMedicoNombre(cita.medico_id)}
                    </p>
                    <p className="text-xs text-gray-500">{getEspecialidadNombre(cita.especialidad)}</p>
                  </div>
                  <Badge
                    variant={
                      cita.estado === "completada"
                        ? "default"
                        : cita.estado === "en_curso"
                          ? "destructive"
                          : cita.estado === "confirmada"
                            ? "secondary"
                            : "outline"
                    }
                  >
                    {cita.estado}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Nueva consulta */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#2980b9]">Nueva Consulta</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label>Paciente</Label>
                <Input
                  placeholder="Nombre del paciente..."
                  value={nuevaCita.paciente}
                  onChange={(e) => setNuevaCita((prev) => ({ ...prev, paciente: e.target.value }))}
                />
              </div>

              <div>
                <Label>Especialidad</Label>
                <Select
                  value={selectedEspecialidad}
                  onValueChange={(value) => {
                    setSelectedEspecialidad(value)
                    setNuevaCita((prev) => ({ ...prev, especialidad: value }))
                    setSelectedMedico("")
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar especialidad" />
                  </SelectTrigger>
                  <SelectContent>
                    {especialidadesDisponibles.map((especialidad) => (
                      <SelectItem key={especialidad} value={especialidad}>
                        {getEspecialidadNombre(especialidad)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Médico</Label>
                <Select
                  value={selectedMedico}
                  onValueChange={(value) => {
                    setSelectedMedico(value)
                    setNuevaCita((prev) => ({ ...prev, medico_id: value }))
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar médico" />
                  </SelectTrigger>
                  <SelectContent>
                    {medicosDisponibles.map((medico) => (
                      <SelectItem key={medico._id} value={medico._id}>
                        {medico.first_name} {medico.last_name} - {medico.position}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Fecha</Label>
                  <Input
                    type="date"
                    value={selectedFecha}
                    onChange={(e) => {
                      setSelectedFecha(e.target.value)
                      setNuevaCita((prev) => ({ ...prev, fecha: e.target.value }))
                    }}
                  />
                </div>
                <div>
                  <Label>Hora</Label>
                  <Select
                    value={nuevaCita.hora}
                    onValueChange={(value) => setNuevaCita((prev) => ({ ...prev, hora: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar hora" />
                    </SelectTrigger>
                    <SelectContent>
                      {horariosDisponibles.map((hora) => (
                        <SelectItem key={hora} value={hora}>
                          {hora}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Motivo de Consulta</Label>
                <Textarea
                  placeholder="Describir motivo de la consulta..."
                  value={nuevaCita.motivo}
                  onChange={(e) => setNuevaCita((prev) => ({ ...prev, motivo: e.target.value }))}
                />
              </div>

              <Button
                className="w-full bg-[#2980b9] hover:bg-[#1a5b8e]"
                onClick={handleAgendarCita}
                disabled={!nuevaCita.paciente || !nuevaCita.medico_id || !nuevaCita.fecha || !nuevaCita.hora}
              >
                Agendar Consulta
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
