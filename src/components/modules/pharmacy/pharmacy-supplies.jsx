"use client"

import { useState } from "react"
import { Package, AlertTriangle, CheckCircle, Eye, Printer } from "lucide-react"

// Mock data for pharmacy supplies by floor
const generatePharmacySupplies = (floorNumber) => {
  const baseSupplies = [
    {
      id: `MED-${floorNumber}-001`,
      name: "Paracetamol 500mg",
      category: "Analgésicos",
      delivered: floorNumber === 0 ? 50 : floorNumber === 1 ? 30 : 20,
      pharmacyStock: 200,
      unit: "tabletas",
      deliveryDate: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000),
      expiryDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
      batch: `L${floorNumber}${Math.floor(Math.random() * 1000)}`,
      status: "normal",
    },
    {
      id: `MED-${floorNumber}-002`,
      name: "Amoxicilina 250mg",
      category: "Antibióticos",
      delivered: floorNumber === 0 ? 25 : floorNumber === 1 ? 40 : 15,
      pharmacyStock: 150,
      unit: "cápsulas",
      deliveryDate: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000),
      expiryDate: new Date(Date.now() + 300 * 24 * 60 * 60 * 1000),
      batch: `L${floorNumber}${Math.floor(Math.random() * 1000)}`,
      status: "normal",
    },
    {
      id: `MED-${floorNumber}-003`,
      name: "Ibuprofeno 400mg",
      category: "Antiinflamatorios",
      delivered: floorNumber === 0 ? 35 : floorNumber === 1 ? 25 : 30,
      pharmacyStock: 80,
      unit: "tabletas",
      deliveryDate: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000),
      expiryDate: new Date(Date.now() + 400 * 24 * 60 * 60 * 1000),
      batch: `L${floorNumber}${Math.floor(Math.random() * 1000)}`,
      status: "low_stock",
    },
    {
      id: `MED-${floorNumber}-004`,
      name: "Omeprazol 20mg",
      category: "Protectores Gástricos",
      delivered: floorNumber === 0 ? 20 : floorNumber === 1 ? 15 : 25,
      pharmacyStock: 120,
      unit: "cápsulas",
      deliveryDate: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000),
      expiryDate: new Date(Date.now() + 200 * 24 * 60 * 60 * 1000),
      batch: `L${floorNumber}${Math.floor(Math.random() * 1000)}`,
      status: "normal",
    },
    {
      id: `MED-${floorNumber}-005`,
      name: "Loratadina 10mg",
      category: "Antihistamínicos",
      delivered: floorNumber === 0 ? 15 : floorNumber === 1 ? 20 : 10,
      pharmacyStock: 45,
      unit: "tabletas",
      deliveryDate: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000),
      expiryDate: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000),
      batch: `L${floorNumber}${Math.floor(Math.random() * 1000)}`,
      status: "critical",
    },
  ]

  return baseSupplies
}

const floorNames = {
  0: "Planta Baja - Emergencias",
  1: "Primer Piso - Medicina Interna",
  2: "Segundo Piso - Cuidados Especializados",
}

export default function PharmacySupplies({ floorNumber, nurseName }) {
  const [supplies] = useState(generatePharmacySupplies(floorNumber))
  const [selectedSupply, setSelectedSupply] = useState(null)

  const getStatusColor = (status) => {
    switch (status) {
      case "critical":
        return "bg-red-100 text-red-800 border-red-200"
      case "low_stock":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-green-100 text-green-800 border-green-200"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "critical":
        return <AlertTriangle size={16} className="text-red-600" />
      case "low_stock":
        return <AlertTriangle size={16} className="text-yellow-600" />
      default:
        return <CheckCircle size={16} className="text-green-600" />
    }
  }

  const totalDelivered = supplies.reduce((sum, supply) => sum + supply.delivered, 0)

  return (
    <div className="space-y-6">
      {/* Header with floor info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-blue-800">{floorNames[floorNumber]}</h3>
            <p className="text-sm text-blue-600">
              Enfermera responsable: <span className="font-medium">{nurseName}</span>
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-blue-600">{totalDelivered}</p>
            <p className="text-sm text-blue-500">Total medicamentos entregados</p>
          </div>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
          <CheckCircle className="mx-auto text-green-600 mb-2" size={24} />
          <p className="text-lg font-bold text-green-600">{supplies.filter((s) => s.status === "normal").length}</p>
          <p className="text-sm text-gray-600">Stock Normal</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
          <AlertTriangle className="mx-auto text-yellow-600 mb-2" size={24} />
          <p className="text-lg font-bold text-yellow-600">{supplies.filter((s) => s.status === "low_stock").length}</p>
          <p className="text-sm text-gray-600">Stock Bajo</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
          <AlertTriangle className="mx-auto text-red-600 mb-2" size={24} />
          <p className="text-lg font-bold text-red-600">{supplies.filter((s) => s.status === "critical").length}</p>
          <p className="text-sm text-gray-600">Stock Crítico</p>
        </div>
      </div>

      {/* Medications list */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Medicamentos Entregados</h4>
        {supplies.map((supply) => (
          <div key={supply.id} className="bg-white border border-gray-200 rounded-lg border-l-4 border-l-blue-500">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Package size={20} className="text-blue-600" />
                    <h5 className="font-semibold text-lg">{supply.name}</h5>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded border">
                      {supply.category}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Entregado a Enfermería:</p>
                      <p className="font-medium text-blue-600">
                        {supply.delivered} {supply.unit}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Stock en Farmacia:</p>
                      <p className="font-medium">
                        {supply.pharmacyStock} {supply.unit}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Lote:</p>
                      <p className="font-medium">{supply.batch}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Estado:</p>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(supply.status)}
                        <span className={`px-2 py-1 text-xs rounded border ${getStatusColor(supply.status)}`}>
                          {supply.status === "critical"
                            ? "Crítico"
                            : supply.status === "low_stock"
                              ? "Stock Bajo"
                              : "Normal"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => setSelectedSupply(supply)}
                    className="flex items-center gap-2 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded transition-colors"
                  >
                    <Eye size={16} />
                    Ver Detalle
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for supply details */}
      {selectedSupply && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Detalle del Medicamento - {selectedSupply.name}</h3>
              <button onClick={() => setSelectedSupply(null)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Medicamento</p>
                  <p className="font-medium">{selectedSupply.name}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Categoría</p>
                  <p className="font-medium">{selectedSupply.category}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Entregado</p>
                  <p className="font-medium text-blue-600">
                    {selectedSupply.delivered} {selectedSupply.unit}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Stock Farmacia</p>
                  <p className="font-medium">
                    {selectedSupply.pharmacyStock} {selectedSupply.unit}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Fecha Entrega</p>
                  <p className="font-medium">
                    {selectedSupply.deliveryDate.toLocaleDateString("es-ES", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Fecha Vencimiento</p>
                  <p className="font-medium">
                    {selectedSupply.expiryDate.toLocaleDateString("es-ES", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500">Lote</p>
                <p className="font-medium">{selectedSupply.batch}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500">Piso</p>
                <p className="font-medium">{floorNames[floorNumber]}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500">Enfermera Responsable</p>
                <p className="font-medium">{nurseName}</p>
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
