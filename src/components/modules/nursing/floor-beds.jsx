"use client"

import { useState, useEffect } from "react"
import { Bed, X } from "lucide-react"

const floorData = {
  0: {
    floorName: "Planta Baja",
    description: "Área de Emergencias y Cuidados Generales",
    patients: [
      {
        name: "Juan Pérez García",
        diagnosis: "Neumonía",
        doctor: "Dr. Ramírez",
        medications: ["Amoxicilina 500mg c/8h", "Paracetamol 500mg c/6h"],
      },
      {
        name: "María González López",
        diagnosis: "Post-operatorio apendicectomía",
        doctor: "Dra. Flores",
        medications: ["Metamizol 500mg c/8h", "Omeprazol 20mg c/24h"],
      },
      {
        name: "Carlos Rodríguez Sánchez",
        diagnosis: "Fractura de fémur",
        doctor: "Dr. Morales",
        medications: ["Tramadol 50mg c/8h", "Diclofenaco 75mg c/12h"],
      },
      {
        name: "Ana Martínez Castro",
        diagnosis: "Gastroenteritis aguda",
        doctor: "Dra. Castillo",
        medications: ["Suero oral", "Loperamida 2mg c/8h"],
      },
      {
        name: "Luis Sánchez Vargas",
        diagnosis: "Hipertensión arterial",
        doctor: "Dr. Ramírez",
        medications: ["Losartán 50mg c/12h", "Amlodipino 5mg c/24h"],
      },
      {
        name: "Carmen Herrera Díaz",
        diagnosis: "Diabetes mellitus",
        doctor: "Dra. Flores",
        medications: ["Metformina 850mg c/12h", "Insulina NPH"],
      },
      {
        name: "Roberto Silva Mendoza",
        diagnosis: "Bronquitis aguda",
        doctor: "Dr. Morales",
        medications: ["Salbutamol inhalador", "Prednisolona 20mg c/24h"],
      },
      {
        name: "Teresa Vega Morales",
        diagnosis: "Infarto agudo de miocardio",
        doctor: "Dr. Ramírez",
        medications: ["Aspirina 100mg c/24h", "Atorvastatina 40mg c/24h"],
      },
      {
        name: "Francisco Delgado Ruiz",
        diagnosis: "Accidente cerebrovascular",
        doctor: "Dra. Castillo",
        medications: ["Clopidogrel 75mg c/24h", "Enalapril 10mg c/12h"],
      },
    ],
    occupiedBeds: [1, 2, 4, 6, 7, 9, 11, 13, 15], // 9 camas ocupadas - alta ocupación
    bedColor: "bg-blue-50 border-blue-200",
  },
  1: {
    // Primer Piso - Medicina Interna y Especialidades
    floorName: "Primer Piso",
    description: "Medicina Interna y Especialidades",
    patients: [
      {
        name: "Elena Vásquez Torres",
        diagnosis: "Infección urinaria",
        doctor: "Dr. Jiménez",
        medications: ["Ciprofloxacino 500mg c/12h", "Fenazopiridina 200mg c/8h"],
      },
      {
        name: "Miguel Ángel Ruiz",
        diagnosis: "Angina de pecho",
        doctor: "Dra. Mendoza",
        medications: ["Nitroglicerina sublingual", "Atorvastatina 20mg c/24h"],
      },
      {
        name: "Patricia Delgado Cruz",
        diagnosis: "Migraña crónica",
        doctor: "Dr. Herrera",
        medications: ["Sumatriptán 50mg PRN", "Propranolol 40mg c/12h"],
      },
      {
        name: "Fernando Castro Rojas",
        diagnosis: "Artritis reumatoide",
        doctor: "Dra. Vega",
        medications: ["Metotrexato 15mg semanal", "Ácido fólico 5mg c/24h"],
      },
      {
        name: "Sofía Moreno Aguilar",
        diagnosis: "Anemia ferropénica",
        doctor: "Dr. Jiménez",
        medications: ["Sulfato ferroso 325mg c/8h", "Ácido ascórbico 500mg c/24h"],
      },
      {
        name: "Andrés Paredes Lima",
        diagnosis: "Úlcera péptica",
        doctor: "Dra. Mendoza",
        medications: ["Lansoprazol 30mg c/24h", "Claritromicina 500mg c/12h"],
      },
    ],
    occupiedBeds: [3, 5, 8, 10, 12, 14],
    bedColor: "bg-green-50 border-green-200",
  },
  2: {
    floorName: "Segundo Piso",
    description: "Cuidados Especializados y Recuperación",
    patients: [
      {
        name: "Ricardo Espinoza Peña",
        diagnosis: "Insuficiencia cardíaca",
        doctor: "Dr. Salazar",
        medications: ["Enalapril 10mg c/12h", "Furosemida 40mg c/24h"],
      },
      {
        name: "Valentina Guerrero Ramos",
        diagnosis: "Epilepsia",
        doctor: "Dra. Campos",
        medications: ["Carbamazepina 200mg c/12h", "Ácido valproico 500mg c/8h"],
      },
      {
        name: "Joaquín Medina Flores",
        diagnosis: "Cirrosis hepática",
        doctor: "Dr. Navarro",
        medications: ["Espironolactona 100mg c/24h", "Lactulose 30ml c/8h"],
      },
      {
        name: "Isabella Romero Guzmán",
        diagnosis: "Lupus eritematoso",
        doctor: "Dra. Reyes",
        medications: ["Hidroxicloroquina 200mg c/12h", "Prednisona 10mg c/24h"],
      },
    ],
    occupiedBeds: [1, 4, 7, 11],
    bedColor: "bg-purple-50 border-purple-200",
  },
}

// Función para generar datos específicos de cada piso
const generateFloorBeds = (floorNumber) => {
  const floor = floorData[floorNumber]
  const beds = []

  for (let i = 1; i <= 15; i++) {
    const isOccupied = floor.occupiedBeds.includes(i)
    let patient = null

    if (isOccupied) {
      const patientIndex = floor.occupiedBeds.indexOf(i)
      const patientData = floor.patients[patientIndex % floor.patients.length]

      patient = {
        id: `P${floorNumber}${i.toString().padStart(2, "0")}`,
        name: patientData.name,
        historyNumber: `HC-${floorNumber}${i.toString().padStart(3, "0")}`,
        entryDate: new Date(Date.now() - (patientIndex + 1) * 24 * 60 * 60 * 1000),
        diagnosis: patientData.diagnosis,
        doctor: patientData.doctor,
        medications: patientData.medications,
        observations: `Paciente en ${floor.floorName}. ${patientData.diagnosis}. Evolución favorable bajo tratamiento médico.`,
      }
    }

    beds.push({
      id: `${floorNumber}-${i}`,
      number: i,
      isOccupied,
      patient,
    })
  }

  return beds
}

export default function FloorBeds({ floorNumber }) {
  const [beds, setBeds] = useState([])
  const [selectedBed, setSelectedBed] = useState(null)

  // Usar useEffect para actualizar las camas cuando cambie el piso
  useEffect(() => {
    const newBeds = generateFloorBeds(floorNumber)
    setBeds(newBeds)
  }, [floorNumber])

  const handleFreeBed = (bedId) => {
    setBeds(beds.map((bed) => (bed.id === bedId ? { ...bed, isOccupied: false, patient: null } : bed)))
    setSelectedBed(null)
  }

  const floorInfo = floorData[floorNumber]
  const occupiedCount = beds.filter((b) => b.isOccupied).length

  return (
    <div className="space-y-6">
      {/* Header del piso */}
      <div className={`p-4 rounded-lg ${floorInfo.bedColor}`}>
        <div className="flex items-center justify-between mb-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{floorInfo.floorName}</h3>
            <p className="text-sm text-gray-600">{floorInfo.description}</p>
          </div>
        </div>
      </div>

      {/* Indicadores de estado */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <span className="text-sm text-gray-600">Disponible ({15 - occupiedCount})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            <span className="text-sm text-gray-600">Ocupada ({occupiedCount})</span>
          </div>
        </div>
        <div className="text-sm text-gray-600 font-medium">Total: {beds.length} camas</div>
      </div>

      {/* Grid de camas - SIN nombres de pacientes */}
      <div className="grid grid-cols-5 gap-4">
        {beds.map((bed) => (
          <button
            key={bed.id}
            onClick={() => setSelectedBed(bed)}
            className={`flex flex-col items-center p-4 border-2 rounded-lg transition-all duration-200 hover:shadow-md ${
              bed.isOccupied
                ? "border-red-300 bg-red-50 hover:bg-red-100"
                : "border-green-300 bg-green-50 hover:bg-green-100"
            }`}
          >
            <Bed size={28} className={`${bed.isOccupied ? "text-red-600" : "text-green-600"} mb-2`} />
            <span className="font-medium text-sm">Cama {bed.number}</span>
            {bed.isOccupied ? (
              <span className="mt-1 text-xs px-2 py-1 bg-red-200 text-red-800 rounded-full">Ocupada</span>
            ) : (
              <span className="mt-1 text-xs px-2 py-1 bg-green-200 text-green-800 rounded-full">Libre</span>
            )}
          </button>
        ))}
      </div>

      {/* Estadísticas del piso - SIN porcentaje */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
          <div className="text-2xl font-bold text-green-600">{15 - occupiedCount}</div>
          <div className="text-sm text-gray-600">Camas Libres</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
          <div className="text-2xl font-bold text-red-600">{occupiedCount}</div>
          <div className="text-sm text-gray-600">Camas Ocupadas</div>
        </div>
      </div>

      {/* Modal */}
      {selectedBed && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">
                {selectedBed.isOccupied
                  ? `${floorInfo.floorName} - Cama ${selectedBed.number}`
                  : `${floorInfo.floorName} - Cama ${selectedBed.number} - Disponible`}
              </h3>
              <button onClick={() => setSelectedBed(null)} className="text-gray-500 hover:text-gray-700">
                <X size={20} />
              </button>
            </div>

            {selectedBed.isOccupied && selectedBed.patient ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Paciente</p>
                    <p className="font-medium">{selectedBed.patient.name}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Historial Clínico</p>
                    <p className="font-medium">{selectedBed.patient.historyNumber}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Fecha de Ingreso</p>
                    <p className="font-medium">
                      {selectedBed.patient.entryDate.toLocaleDateString("es-ES", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Ubicación</p>
                    <p className="font-medium">{floorInfo.floorName}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">Diagnóstico</p>
                  <p className="font-medium">{selectedBed.patient.diagnosis}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">Médico Tratante</p>
                  <p className="font-medium">{selectedBed.patient.doctor}</p>
                </div>

                <hr />

                <div>
                  <p className="text-sm font-medium text-gray-500 mb-2">Medicamentos</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedBed.patient.medications.map((med, idx) => (
                      <li key={idx} className="text-sm">
                        {med}
                      </li>
                    ))}
                  </ul>
                </div>

                <hr />

                <div>
                  <p className="text-sm font-medium text-gray-500 mb-2">Observaciones</p>
                  <p className="text-sm">{selectedBed.patient.observations}</p>
                </div>

                <div className="flex justify-between mt-6">
                  <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    Imprimir Información
                  </button>
                  <button
                    onClick={() => handleFreeBed(selectedBed.id)}
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors flex items-center gap-2"
                  >
                    <X size={16} />
                    Desocupar Cama
                  </button>
                </div>
              </div>
            ) : (
              <div className="py-8 text-center text-gray-500">
                <Bed size={48} className="mx-auto mb-4 text-gray-300" />
                <p>Esta cama en {floorInfo.floorName} está disponible para asignar a un paciente.</p>
                <p className="text-sm mt-2">{floorInfo.description}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
