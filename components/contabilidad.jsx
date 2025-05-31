"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, TrendingUp, TrendingDown, Printer } from "lucide-react"
import { Logo } from "@/components/logo"

export function Contabilidad() {
  const handlePrint = () => window.print()

  return (
    <div>
      {/* Header para impresión */}
      <div className="print:block hidden mb-4 text-center border-b pb-4">
        <div className="flex justify-center items-center mb-2">
          <Logo size="lg" />
        </div>
        <h1 className="text-xl font-bold">MÓDULO 6 - CONTABILIDAD: EVER</h1>
        <p className="text-sm">Gestión Financiera y Contable - Clínica Alvarez</p>
      </div>

      <div className="flex justify-between items-center mb-4 print:hidden">
        <h2 className="text-2xl font-semibold text-[#2980b9]">Contabilidad</h2>
        <Button variant="outline" onClick={handlePrint} className="flex items-center gap-1">
          <Printer className="h-4 w-4" />
          <span>Imprimir</span>
        </Button>
      </div>

      {/* Resumen financiero */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-green-600">Bs. 15,420</div>
                <p className="text-sm text-gray-600">Ingresos del Mes</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-red-600">Bs. 8,750</div>
                <p className="text-sm text-gray-600">Gastos del Mes</p>
              </div>
              <TrendingDown className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-[#2980b9]">Bs. 6,670</div>
                <p className="text-sm text-gray-600">Utilidad</p>
              </div>
              <DollarSign className="h-8 w-8 text-[#2980b9]" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-orange-600">Bs. 2,340</div>
                <p className="text-sm text-gray-600">Cuentas por Cobrar</p>
              </div>
              <DollarSign className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="ingresos" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="ingresos">Ingresos</TabsTrigger>
          <TabsTrigger value="gastos">Gastos</TabsTrigger>
          <TabsTrigger value="facturas">Facturación</TabsTrigger>
          <TabsTrigger value="reportes">Reportes</TabsTrigger>
        </TabsList>

        <TabsContent value="ingresos">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#2980b9]">Registro de Ingresos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <Label>Concepto</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Tipo de ingreso" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consulta">Consulta Médica</SelectItem>
                      <SelectItem value="laboratorio">Laboratorio</SelectItem>
                      <SelectItem value="farmacia">Farmacia</SelectItem>
                      <SelectItem value="otros">Otros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Monto (Bs.)</Label>
                  <Input type="number" placeholder="0.00" />
                </div>
                <div>
                  <Label>Fecha</Label>
                  <Input type="date" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gastos">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#2980b9]">Registro de Gastos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <Label>Categoría</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Tipo de gasto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="medicamentos">Medicamentos</SelectItem>
                      <SelectItem value="equipos">Equipos Médicos</SelectItem>
                      <SelectItem value="servicios">Servicios Básicos</SelectItem>
                      <SelectItem value="personal">Personal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Monto (Bs.)</Label>
                  <Input type="number" placeholder="0.00" />
                </div>
                <div>
                  <Label>Fecha</Label>
                  <Input type="date" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="facturas">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#2980b9]">Facturación</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Cliente/Paciente</Label>
                    <Input placeholder="Nombre del cliente" />
                  </div>
                  <div>
                    <Label>NIT/CI</Label>
                    <Input placeholder="Número de identificación" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label>Servicio</Label>
                    <Input placeholder="Descripción del servicio" />
                  </div>
                  <div>
                    <Label>Cantidad</Label>
                    <Input type="number" placeholder="1" />
                  </div>
                  <div>
                    <Label>Precio Unitario</Label>
                    <Input type="number" placeholder="0.00" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reportes">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#2980b9]">Reportes Financieros</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="h-20 flex flex-col">
                  <span className="font-medium">Estado de Resultados</span>
                  <span className="text-sm text-gray-600">Ingresos vs Gastos</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col">
                  <span className="font-medium">Balance General</span>
                  <span className="text-sm text-gray-600">Activos y Pasivos</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col">
                  <span className="font-medium">Flujo de Caja</span>
                  <span className="text-sm text-gray-600">Movimientos de efectivo</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col">
                  <span className="font-medium">Cuentas por Cobrar</span>
                  <span className="text-sm text-gray-600">Pendientes de pago</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
