"use client"

import { useState, useEffect } from "react"
import { Eye, Printer } from "lucide-react"

// Mock patient data
const mockPatients = [
  {
    id: "P1001",
    name: "Martha Martínez Quispe",
    historyNumber: "HC-5432",
    services: [
      {
        id: "S1",
        type: "Laboratorio",
        name: "Hemograma Completo",
        date: new Date("2025-06-01"),
        time: "09:30",
        doctor: "Dr. Ramírez",
        specialty: "Medicina General",
        results: "Valores normales",
        observations: "Paciente presenta valores dentro del rango normal. Se recomienda control en 6 meses.",
      },
      {
        id: "S2",
        type: "Rayos X",
        name: "Radiografía de Tórax",
        date: new Date("2025-05-28"),
        time: "14:15",
        doctor: "Dra. Flores",
        specialty: "Neumología",
        results: "Sin hallazgos patológicos",
        observations: "No se observan anomalías. Pulmones limpios.",
      },
    ],
  },
  {
    id: "P1002",
    name: "Juan Carlos Pérez Gómez",
    historyNumber: "HC-6789",
    services: [
      {
        id: "S4",
        type: "Laboratorio",
        name: "Perfil Lipídico",
        date: new Date("2025-06-03"),
        time: "08:00",
        doctor: "Dr. Morales",
        specialty: "Cardiología",
        results: "Colesterol elevado",
        observations: "Se recomienda dieta baja en grasas y control en 3 meses.",
      },
    ],
  },
]

export default function PatientSearch({ searchQuery, date }) {
  const [filteredPatients, setFilteredPatients] = useState(mockPatients)
  const [selectedPatient, setSelectedPatient] = useState(null)

  useEffect(() => {
    let results = mockPatients

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      results = results.filter(
        (patient) => patient.name.toLowerCase().includes(query) || patient.historyNumber.toLowerCase().includes(query),
      )
    }

    if (date) {
      const dateString = date.toDateString()
      results = results.filter((patient) =>
        patient.services.some((service) => service.date.toDateString() === dateString),
      )
    }

    setFilteredPatients(results)
  }, [searchQuery, date])

  const getServiceTypeColor = (type) => {
    switch (type) {
      case "Laboratorio":
        return "bg-blue-100 text-blue-800"
      case "Rayos X":
        return "bg-green-100 text-green-800"
      case "Ecografía":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-4">
      {filteredPatients.length === 0 ? (
        <div className="text-center py-8 text-gray-500">No se encontraron pacientes que coincidan con la búsqueda</div>
      ) : (
        filteredPatients.map((patient) => (
          <div key={patient.id} className="bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{patient.name}</h3>
                  <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                    <span>HC: {patient.historyNumber}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPatient(patient)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                >
                  <Eye size={16} />
                  Ver Estudios
                </button>
              </div>
            </div>
          </div>
        ))
      )}

      {/* Modal for patient details */}
      {selectedPatient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Estudios y Servicios - {selectedPatient.name}</h3>
              <button onClick={() => setSelectedPatient(null)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-500">Paciente</p>
                  <p className="font-medium">{selectedPatient.name}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Historial Clínico</p>
                  <p className="font-medium">{selectedPatient.historyNumber}</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-4 text-lg">Historial de Estudios y Servicios</h4>
                <div className="space-y-4">
                  {selectedPatient.services
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .map((service) => (
                      <div
                        key={service.id}
                        className="border border-gray-200 rounded-lg p-4 border-l-4 border-l-blue-500"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className={`px-2 py-1 rounded text-xs ${getServiceTypeColor(service.type)}`}>
                                {service.type}
                              </span>
                              <h5 className="font-semibold text-lg">{service.name}</h5>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <p className="text-gray-500">Fecha:</p>
                                <p className="font-medium">
                                  {service.date.toLocaleDateString("es-ES", {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                  })}
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-500">Hora:</p>
                                <p className="font-medium">{service.time}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Médico:</p>
                                <p className="font-medium">{service.doctor}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Especialidad:</p>
                                <p className="font-medium">{service.specialty}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <hr className="my-3" />

                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">Resultado:</p>
                            <p className="text-sm font-semibold text-green-700">{service.results}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">Observaciones:</p>
                            <p className="text-sm text-gray-700">{service.observations}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
                <Printer size={16} />
                Imprimir Historial
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
