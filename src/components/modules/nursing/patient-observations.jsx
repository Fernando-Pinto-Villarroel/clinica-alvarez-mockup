"use client"

import { useState } from "react"
import { Search, Eye, Printer } from "lucide-react"
import DatePicker from "./date-picker"

const mockObservations = [
  {
    id: "O1",
    patientName: "Martha Martínez Quispe",
    historyNumber: "HC-5432",
    date: new Date("2025-06-01"),
    doctor: "Dr. Ramírez",
    specialty: "Medicina General",
    text: "Paciente acude por cuadro gripal. Se recomienda reposo y medicación sintomática. Control en 7 días.",
    medications: ["Paracetamol 500mg c/8h por 5 días", "Loratadina 10mg c/24h por 7 días"],
  },
  {
    id: "O2",
    patientName: "Juan Carlos Pérez Gómez",
    historyNumber: "HC-6789",
    date: new Date("2025-06-03"),
    doctor: "Dr. Morales",
    specialty: "Cardiología",
    text: "Paciente con hipertensión controlada. Se ajusta medicación y se solicitan exámenes de control.",
    medications: ["Atorvastatina 20mg c/24h", "Losartán 50mg c/12h"],
  },
  {
    id: "O3",
    patientName: "Alex carriso",
    historyNumber: "HC-6789",
    date: new Date("2025-06-03"),
    doctor: "Dr. Morales",
    specialty: "Cardiología",
    text: "Paciente con hipertensión controlada. Se ajusta medicación y se solicitan exámenes de control.",
    medications: ["Atorvastatina 20mg c/24h", "Losartán 50mg c/12h"],
  },
  {
    id: "O4",
    patientName: "Juan ozada",
    historyNumber: "HC-6789",
    date: new Date("2025-06-03"),
    doctor: "Dr. Morales",
    specialty: "Cardiología",
    text: "Paciente con hipertensión controlada. Se ajusta medicación y se solicitan exámenes de control.",
    medications: ["Atorvastatina 20mg c/24h", "Losartán 50mg c/12h"],
  },
  {
    id: "O5",
    patientName: "Ever torrez",
    historyNumber: "HC-6789",
    date: new Date("2025-06-03"),
    doctor: "Dr. Morales",
    specialty: "Cardiología",
    text: "Paciente con hipertensión controlada. Se ajusta medicación y se solicitan exámenes de control.",
    medications: ["Atorvastatina 20mg c/24h", "Losartán 50mg c/12h"],
  },
]

export default function PatientObservations() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [filteredObservations, setFilteredObservations] = useState(mockObservations)
  const [selectedObservation, setSelectedObservation] = useState(null)

  const handleSearch = () => {
    let results = mockObservations

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      results = results.filter(
        (obs) =>
          obs.patientName.toLowerCase().includes(query) ||
          obs.historyNumber.toLowerCase().includes(query) ||
          obs.doctor.toLowerCase().includes(query),
      )
    }

    if (selectedDate) {
      const dateString = selectedDate.toDateString()
      results = results.filter((obs) => obs.date.toDateString() === dateString)
    }

    setFilteredObservations(results)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Buscar por paciente, historial o médico..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <DatePicker date={selectedDate} setDate={setSelectedDate} />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          Buscar
        </button>
      </div>

      <div className="space-y-4">
        {filteredObservations.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No se encontraron observaciones médicas que coincidan con la búsqueda
          </div>
        ) : (
          filteredObservations.map((observation) => (
            <div key={observation.id} className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{observation.patientName}</h3>
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                        {observation.historyNumber}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      {observation.date.toLocaleDateString("es-ES", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })}{" "}
                      • {observation.doctor} • {observation.specialty}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedObservation(observation)}
                      className="flex items-center gap-2 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded transition-colors"
                    >
                      <Eye size={14} />
                      Ver Detalle
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded transition-colors">
                      <Printer size={14} />
                      Imprimir
                    </button>
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-sm">{observation.text}</p>
                </div>

                <div className="mt-3">
                  <p className="text-sm font-medium">Medicamentos:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {observation.medications.slice(0, 2).map((med, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                        {med}
                      </span>
                    ))}
                    {observation.medications.length > 2 && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                        +{observation.medications.length - 2} más
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal for observation details */}
      {selectedObservation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Observación Médica</h3>
              <button onClick={() => setSelectedObservation(null)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Paciente</p>
                <p className="font-medium">{selectedObservation.patientName}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Historial Clínico</p>
                  <p className="font-medium">{selectedObservation.historyNumber}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Fecha</p>
                  <p className="font-medium">
                    {selectedObservation.date.toLocaleDateString("es-ES", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Médico</p>
                  <p className="font-medium">{selectedObservation.doctor}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Especialidad</p>
                  <p className="font-medium">{selectedObservation.specialty}</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500">Observación</p>
                <p className="text-sm">{selectedObservation.text}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500 mb-2">Medicamentos Recetados</p>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedObservation.medications.map((med, idx) => (
                    <li key={idx} className="text-sm">
                      {med}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
                <Printer size={16} />
                Imprimir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
