"use client"
import { useState } from "react";
import { useAuth } from "../../../auth/AuthContext";
import MedicalConsultation from "./MedicalConsultation";
import { User, Clock, CheckCircle, AlertCircle, Stethoscope } from "lucide-react";

const allAppointments = [
  {
    id: 1,
    date: "2025-06-23",
    time: "09:00",
    patientName: "SANTOS ALVARO MAMANI",
    patientId: "P1001",
    description: "Control anual de presión arterial.",
    specialty: "Cardiología",
    status: "Pendiente",
    doctorId: 2,
    doctorName: "Dra. María González",
  },
  {
    id: 2,
    date: "2025-06-23",
    time: "09:30",
    patientName: "ANA GOMEZ",
    patientId: "P1002",
    description: "Paciente con síntomas de gripe.",
    specialty: "Medicina General",
    status: "Pendiente",
    doctorId: 2,
    doctorName: "Dra. María González",
  },
  {
    id: 5,
    date: "2025-06-23",
    time: "10:00",
    patientName: "ROBERTO FERNANDEZ",
    patientId: "P1003",
    description: "Resultados de laboratorio.",
    specialty: "Medicina General",
    status: "Atendido",
    doctorId: 2,
    doctorName: "Dra. María González",
  },
  {
    id: 3,
    date: "2025-06-23",
    time: "10:30",
    patientName: "CARLOS MENDEZ",
    patientId: "P1004",
    description: "Revisión de tratamiento.",
    specialty: "Cardiología",
    status: "Pendiente",
    doctorId: 3,
    doctorName: "Dr. Luis Morales",
  },
  {
    id: 4,
    date: "2025-06-24",
    time: "11:00",
    patientName: "LAURA QUISPE",
    patientId: "P1005",
    description: "Consulta pediátrica de rutina.",
    specialty: "Pediatría",
    status: "Programada",
    doctorId: 2,
    doctorName: "Dra. María González",
  },
];

const DailyAgenda = ({ appointments, onSelectPatient }) => (
  <div className="space-y-3">
    {appointments.map((cita) => {
      const isPending = cita.status === "Pendiente";
      const statusColor = isPending ? "border-l-yellow-500" : "border-l-green-500";
      const statusIcon = isPending ? (
        <AlertCircle className="text-yellow-500" size={20} />
      ) : (
        <CheckCircle className="text-green-500" size={20} />
      );

      return (
        <div
          key={cita.id}
          className={`bg-white p-4 rounded-lg shadow-sm border-l-4 ${statusColor} flex items-center justify-between`}
        >
          <div className="flex items-center gap-4">
            {statusIcon}
            <div>
              <p className="font-semibold text-gray-800">{cita.patientName}</p>
              <div className="text-sm text-gray-600 flex items-center gap-4">
                  <span><Clock size={14} className="inline mr-1" />{cita.time} - {cita.description}</span>
                  <span className="border-l pl-4"><Stethoscope size={14} className="inline mr-1" />{cita.doctorName}</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => onSelectPatient(cita)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Iniciar Consulta
          </button>
        </div>
      );
    })}
  </div>
);

export default function DoctorDashboard() {
  const { currentUser } = useAuth();
  const [selectedPatient, setSelectedPatient] = useState(null);

  const today = new Date("2025-06-23T12:00:00.000Z").toISOString().split("T")[0];

  const dailyAgenda = allAppointments.filter((cita) => cita.date === today);

  const handleBackToAgenda = () => {
    setSelectedPatient(null);
  };

  if (selectedPatient) {
    return (
      <MedicalConsultation
        patient={selectedPatient}
        onBack={handleBackToAgenda}
      />
    );
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Agenda General del Día
        </h2>
        <p className="text-gray-600">
          Mostrando todas las citas programadas para el día de hoy,{" "}
          {new Date(today).toLocaleDateString("es-ES", {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC',
          })}
          .
        </p>
      </div>

      {dailyAgenda.length > 0 ? (
        <DailyAgenda
          appointments={dailyAgenda}
          onSelectPatient={setSelectedPatient}
        />
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <p className="text-gray-600">No hay pacientes agendados para hoy.</p>
        </div>
      )}
    </div>
  );
}
