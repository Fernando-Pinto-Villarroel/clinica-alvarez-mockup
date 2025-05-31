"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { User, Shield, Key, Printer, Plus } from "lucide-react"
import { Logo } from "@/components/logo"

export function Usuarios() {
  const handlePrint = () => window.print()

  const usuarios = [
    { id: 1, nombre: "Diego Erquicia", rol: "Médico", modulos: ["Consultas", "Personal"], activo: true },
    { id: 2, nombre: "Diego Terrazas", rol: "Administrador", modulos: ["Pacientes"], activo: true },
    { id: 3, nombre: "Ever", rol: "Contador", modulos: ["Contabilidad", "Usuarios"], activo: true },
    { id: 4, nombre: "Fer", rol: "Técnico", modulos: ["Servicios", "Insumos"], activo: false },
  ]

  return (
    <div>
      {/* Header para impresión */}
      <div className="print:block hidden mb-4 text-center border-b pb-4">
        <div className="flex justify-center items-center mb-2">
          <Logo size="lg" />
        </div>
        <h1 className="text-xl font-bold">MÓDULO 7 - USUARIOS: EVER</h1>
        <p className="text-sm">Gestión de Usuarios y Permisos - Clínica Alvarez</p>
      </div>

      <div className="flex justify-between items-center mb-4 print:hidden">
        <h2 className="text-2xl font-semibold text-[#2980b9]">Gestión de Usuarios</h2>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-1">
            <Plus className="h-4 w-4" />
            <span>Nuevo Usuario</span>
          </Button>
          <Button variant="outline" onClick={handlePrint} className="flex items-center gap-1">
            <Printer className="h-4 w-4" />
            <span>Imprimir</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Lista de usuarios */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#2980b9] flex items-center gap-2">
              <User className="h-5 w-5" />
              Usuarios del Sistema
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {usuarios.map((usuario) => (
                <div key={usuario.id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <div>
                    <p className="font-medium">{usuario.nombre}</p>
                    <p className="text-sm text-gray-600">{usuario.rol}</p>
                    <div className="flex gap-1 mt-1">
                      {usuario.modulos.map((modulo) => (
                        <Badge key={modulo} variant="outline" className="text-xs">
                          {modulo}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch checked={usuario.activo} />
                    <Badge variant={usuario.activo ? "default" : "secondary"}>
                      {usuario.activo ? "Activo" : "Inactivo"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Crear/Editar usuario */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#2980b9] flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Configuración de Usuario
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label>Nombre Completo</Label>
                <Input placeholder="Nombre del usuario" />
              </div>
              <div>
                <Label>Usuario</Label>
                <Input placeholder="Nombre de usuario" />
              </div>
              <div>
                <Label>Contraseña</Label>
                <Input type="password" placeholder="Contraseña" />
              </div>
              <div>
                <Label>Rol</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar rol" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administrador</SelectItem>
                    <SelectItem value="medico">Médico</SelectItem>
                    <SelectItem value="contador">Contador</SelectItem>
                    <SelectItem value="tecnico">Técnico</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Módulos Asignados</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {["Servicios", "Insumos", "Consultas", "Personal", "Contabilidad", "Usuarios"].map((modulo) => (
                    <div key={modulo} className="flex items-center space-x-2">
                      <Switch id={modulo} />
                      <Label htmlFor={modulo} className="text-sm">
                        {modulo}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              <Button className="w-full bg-[#2980b9] hover:bg-[#1a5b8e]">Guardar Usuario</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Configuración de seguridad */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-[#2980b9] flex items-center gap-2">
            <Key className="h-5 w-5" />
            Configuración de Seguridad
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center justify-between">
              <Label>Requerir cambio de contraseña</Label>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <Label>Sesión automática</Label>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <Label>Auditoría de accesos</Label>
              <Switch defaultChecked />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
