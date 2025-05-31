"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Printer } from "lucide-react"
import { Logo } from "@/components/logo"

export function Servicios() {
  const handlePrint = () => window.print()

  return (
    <div>
      {/* Header para impresión */}
      <div className="print:block hidden mb-4 text-center border-b pb-4">
        <div className="flex justify-center items-center mb-2">
          <Logo size="lg" />
        </div>
        <h1 className="text-xl font-bold">MÓDULO 1 - SERVICIOS: FER</h1>
        <p className="text-sm">Laboratorio, Rayos X, Ecografías, Internación - Clínica Alvarez</p>
      </div>

      <div className="flex justify-between items-center mb-4 print:hidden">
        <h2 className="text-2xl font-semibold text-[#2980b9]">Servicios Médicos</h2>
        <Button variant="outline" onClick={handlePrint} className="flex items-center gap-1">
          <Printer className="h-4 w-4" />
          <span>Imprimir</span>
        </Button>
      </div>

      <Tabs defaultValue="laboratorio" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="laboratorio">Laboratorio</TabsTrigger>
          <TabsTrigger value="rayos-x">Rayos X</TabsTrigger>
          <TabsTrigger value="ecografias">Ecografías</TabsTrigger>
          <TabsTrigger value="internacion">Internación</TabsTrigger>
        </TabsList>

        <TabsContent value="laboratorio">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#2980b9]">Laboratorio Clínico</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <Label>Paciente</Label>
                  <Input placeholder="Buscar paciente..." />
                </div>
                <div>
                  <Label>Tipo de Examen</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar examen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hemograma">Hemograma Completo</SelectItem>
                      <SelectItem value="glucosa">Glucosa</SelectItem>
                      <SelectItem value="colesterol">Perfil Lipídico</SelectItem>
                      <SelectItem value="orina">Examen de Orina</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Fecha</Label>
                  <Input type="date" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <div>
                    <p className="font-medium">Hemograma - Juan Pérez</p>
                    <p className="text-sm text-gray-600">Solicitado: 15/01/2024</p>
                  </div>
                  <Badge variant="outline">Pendiente</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rayos-x">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#2980b9]">Rayos X</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <Label>Paciente</Label>
                  <Input placeholder="Buscar paciente..." />
                </div>
                <div>
                  <Label>Tipo de Estudio</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar estudio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="torax">Tórax PA y Lateral</SelectItem>
                      <SelectItem value="abdomen">Abdomen Simple</SelectItem>
                      <SelectItem value="extremidades">Extremidades</SelectItem>
                      <SelectItem value="columna">Columna</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Urgencia</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Prioridad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="normal">Normal</SelectItem>
                      <SelectItem value="urgente">Urgente</SelectItem>
                      <SelectItem value="emergencia">Emergencia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ecografias">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#2980b9]">Ecografías</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <Label>Paciente</Label>
                  <Input placeholder="Buscar paciente..." />
                </div>
                <div>
                  <Label>Tipo de Ecografía</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="abdominal">Abdominal</SelectItem>
                      <SelectItem value="obstetrica">Obstétrica</SelectItem>
                      <SelectItem value="pelvica">Pélvica</SelectItem>
                      <SelectItem value="tiroidea">Tiroidea</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Médico Solicitante</Label>
                  <Input placeholder="Nombre del médico" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="internacion">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#2980b9]">Internación</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <Label>N° Cama</Label>
                  <Input placeholder="Número de cama" />
                </div>
                <div>
                  <Label>Paciente</Label>
                  <Input placeholder="Buscar paciente..." />
                </div>
                <div>
                  <Label>Fecha Ingreso</Label>
                  <Input type="date" />
                </div>
                <div>
                  <Label>Estado</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ocupada">Ocupada</SelectItem>
                      <SelectItem value="disponible">Disponible</SelectItem>
                      <SelectItem value="mantenimiento">Mantenimiento</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
