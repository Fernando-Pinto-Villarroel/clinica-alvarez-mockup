"use client"

import { useState } from "react"
import { Search, Printer } from "lucide-react"
import PatientSearch from "./patient-search"
import FloorBeds from "./floor-beds"
import PatientObservations from "./patient-observations"
import DatePicker from "./date-picker"
import PharmacySupplies from "../pharmacy/pharmacy-supplies"
import { useAuth } from "../../../auth/AuthContext"

export default function NursingModule() {
  const { currentUser, getRoleDisplayName } = useAuth()
  const [activeTab, setActiveTab] = useState("pharmacy-supplies")
  const [activeFloor, setActiveFloor] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mx-4 my-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Gestionar Enfermería</h2>
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-500">
            Usuario: {currentUser?.name} ({getRoleDisplayName(currentUser?.role)})
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
            <Printer size={16} />
            <span>Imprimir</span>
          </button>
        </div>
      </div>

      <div className="w-full">
        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab("pharmacy-supplies")}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
              activeTab === "pharmacy-supplies"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Farmacia - Suministros
          </button>
          <button
            onClick={() => setActiveTab("floor-management")}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
              activeTab === "floor-management"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Gestión de Camas
          </button>
          <button
            onClick={() => setActiveTab("patient-search")}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
              activeTab === "patient-search"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Búsqueda de Pacientes
          </button>
          <button
            onClick={() => setActiveTab("observations")}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
              activeTab === "observations"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Observaciones Médicas
          </button>
        </div>

        {activeTab === "pharmacy-supplies" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Medicamentos Entregados a Enfermería</h3>
              <DatePicker date={selectedDate} setDate={setSelectedDate} />
            </div>

            <div className="w-full">
              <div className="flex border-b border-gray-200 mb-4">
                <button
                  onClick={() => setActiveFloor(0)}
                  className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                    activeFloor === 0
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Planta Baja
                </button>
                <button
                  onClick={() => setActiveFloor(1)}
                  className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                    activeFloor === 1
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Primer Piso
                </button>
                <button
                  onClick={() => setActiveFloor(2)}
                  className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                    activeFloor === 2
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Segundo Piso
                </button>
              </div>

              <PharmacySupplies
                floorNumber={activeFloor}
                nurseName={
                  activeFloor === 0 ? "Carmen Enfermera" : activeFloor === 1 ? "Ana Rodríguez" : "María González"
                }
              />
            </div>
          </div>
        )}

        {activeTab === "floor-management" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Distribución de Camas por Piso</h3>
              <DatePicker date={selectedDate} setDate={setSelectedDate} />
            </div>

            <div className="w-full">
              <div className="flex border-b border-gray-200 mb-4">
                <button
                  onClick={() => setActiveFloor(0)}
                  className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                    activeFloor === 0
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Planta Baja
                </button>
                <button
                  onClick={() => setActiveFloor(1)}
                  className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                    activeFloor === 1
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Primer Piso
                </button>
                <button
                  onClick={() => setActiveFloor(2)}
                  className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                    activeFloor === 2
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Segundo Piso
                </button>
              </div>

              <FloorBeds floorNumber={activeFloor} />
            </div>
          </div>
        )}

        {activeTab === "patient-search" && (
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Buscar por nombre o número de historial clínico..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <DatePicker date={selectedDate} setDate={setSelectedDate} />
            </div>

            <PatientSearch searchQuery={searchQuery} date={selectedDate} />
          </div>
        )}

        {activeTab === "observations" && <PatientObservations />}
      </div>
    </div>
  )
}
