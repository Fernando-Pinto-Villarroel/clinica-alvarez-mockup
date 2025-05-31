"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Printer, Plus, Search } from "lucide-react"
import { Logo } from "@/components/logo"

export function InsumosFarmaceuticos() {
  const handlePrint = () => window.print()

  const medicamentos = [
    { id: 1, nombre: "Paracetamol 500mg", stock: 150, minimo: 50, lote: "L001", vencimiento: "12/2024" },
    { id: 2, nombre: "Ibuprofeno 400mg", stock: 25, minimo: 30, lote: "L002", vencimiento: "08/2024" },
    { id: 3, nombre: "Amoxicilina 500mg", stock: 80, minimo: 40, lote: "L003", vencimiento: "10/2024" },
  ]

  return (
    <div>
      {/* Header para impresión */}
      <div className="print:block hidden mb-4 text-center border-b pb-4">
        <div className="flex justify-center items-center mb-2">
          <Logo size="lg" />
        </div>
        <h1 className="text-xl font-bold">MÓDULO 2 - INSUMOS FARMACÉUTICOS: FER</h1>
        <p className="text-sm">Control de Medicamentos e Insumos - Clínica Alvarez</p>
      </div>

      <div className="flex justify-between items-center mb-4 print:hidden">
        <h2 className="text-2xl font-semibold text-[#2980b9]">Insumos Farmacéuticos</h2>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-1">
            <Plus className="h-4 w-4" />
            <span>Nuevo Insumo</span>
          </Button>
          <Button variant="outline" onClick={handlePrint} className="flex items-center gap-1">
            <Printer className="h-4 w-4" />
            <span>Imprimir</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-[#2980b9]">245</div>
            <p className="text-sm text-gray-600">Total Medicamentos</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-500">12</div>
            <p className="text-sm text-gray-600">Stock Bajo</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-orange-500">8</div>
            <p className="text-sm text-gray-600">Por Vencer</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-500">225</div>
            <p className="text-sm text-gray-600">En Stock</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-[#2980b9]">Inventario de Medicamentos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <Input placeholder="Buscar medicamento..." />
            </div>
            <Button variant="outline">
              <Search className="h-4 w-4" />
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#3498db] text-white">
                  <th className="p-2 text-left">Medicamento</th>
                  <th className="p-2 text-left">Stock Actual</th>
                  <th className="p-2 text-left">Stock Mínimo</th>
                  <th className="p-2 text-left">Lote</th>
                  <th className="p-2 text-left">Vencimiento</th>
                  <th className="p-2 text-left">Estado</th>
                </tr>
              </thead>
              <tbody>
                {medicamentos.map((med) => (
                  <tr key={med.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-2">{med.nombre}</td>
                    <td className="p-2">{med.stock}</td>
                    <td className="p-2">{med.minimo}</td>
                    <td className="p-2">{med.lote}</td>
                    <td className="p-2">{med.vencimiento}</td>
                    <td className="p-2">
                      <Badge variant={med.stock < med.minimo ? "destructive" : "default"}>
                        {med.stock < med.minimo ? "Stock Bajo" : "Normal"}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
