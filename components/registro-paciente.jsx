"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Save, Search, Printer } from "lucide-react"
import { Logo } from "@/components/logo"

export function RegistroPaciente({ onBuscarPacienteClick }) {
  const [formData, setFormData] = useState({
    primerApellido: "MARTINEZ",
    segundoApellido: "QUISPE",
    apellidoCasada: "",
    nombre: "MARTHA",
    tieneCi: true,
    nroId: "",
    complemento: "",
    exp: "",
    fechaNacDia: "",
    fechaNacMes: "",
    fechaNacAnio: "",
    edad: "",
    sexo: "femenino",
    estadoCivil: "",
    ocupacion: "",
    profesion: "",
    nivelEstudios: "",
    zonaLocalidad: "",
    direccion: "",
    nroPuerta: "",
    nombreEdificio: "",
    telefono: "",
    lugarNacDepartamento: "",
    lugarNacMunicipio: "",
    lugarViveDepartamento: "",
    lugarViveMunicipio: "",
    idiomaHablado: "",
    idiomaMaterno: "",
    autoPertenenciaCultural: "",
    actividadesReproductivas: "",
    gestionComunitaria: "",
  })

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div>
      {/* Header para impresión */}
      <div className="print:block hidden mb-4 text-center border-b pb-4">
        <div className="flex justify-center items-center mb-2">
          <Logo size="lg" />
        </div>
        <h1 className="text-xl font-bold">MÓDULO 5 - PACIENTES: DIEGO TERRAZAS</h1>
        <p className="text-sm">Registro de Paciente - Clínica Alvarez</p>
        <p className="text-xs">Software de Atención Primaria en Salud</p>
      </div>

      <div className="flex justify-between items-center mb-4 print:hidden">
        <h2 className="text-2xl font-semibold text-[#2980b9]">Registro de Paciente</h2>
        <div className="flex gap-2">
          <Button variant="outline" onClick={onBuscarPacienteClick} className="flex items-center gap-1">
            <Search className="h-4 w-4" />
            <span>Buscar Paciente</span>
          </Button>
          <Button variant="outline" onClick={handlePrint} className="flex items-center gap-1">
            <Printer className="h-4 w-4" />
            <span>Imprimir</span>
          </Button>
        </div>
      </div>

      <Card className="bg-[#e6f2ff] border-[#b3d9ff]">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="col-span-1">
              <Label htmlFor="registro-clinico" className="text-[#2980b9] font-medium">
                Registro Clínico:
              </Label>
              <Input id="registro-clinico" className="bg-[#fff9e6]" />
            </div>
            <div className="col-span-1 flex items-center gap-2 mt-6">
              <Checkbox id="temporal" />
              <Label htmlFor="temporal" className="text-sm">
                Temporal
              </Label>
              <Checkbox id="reciclar-rc" />
              <Label htmlFor="reciclar-rc" className="text-sm">
                Reciclar RC
              </Label>
            </div>
            <div className="col-span-1">
              <Label htmlFor="codigo-seguro" className="text-[#2980b9] font-medium">
                Código Seguro:
              </Label>
              <Input id="codigo-seguro" />
            </div>
            <div className="col-span-1">
              <Label htmlFor="codigo-carpeta" className="text-[#2980b9] font-medium">
                Código Carpeta Familiar:
              </Label>
              <Input id="codigo-carpeta" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div>
              <Label htmlFor="primer-apellido" className="text-[#2980b9] font-medium">
                Primer Apellido:
              </Label>
              <Input
                id="primer-apellido"
                value={formData.primerApellido}
                onChange={(e) => handleChange("primerApellido", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="segundo-apellido" className="text-[#2980b9] font-medium">
                Segundo Apellido:
              </Label>
              <Input
                id="segundo-apellido"
                value={formData.segundoApellido}
                onChange={(e) => handleChange("segundoApellido", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="apellido-casada" className="text-[#2980b9] font-medium">
                Apellido Casada:
              </Label>
              <Input
                id="apellido-casada"
                value={formData.apellidoCasada}
                onChange={(e) => handleChange("apellidoCasada", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="nombre" className="text-[#2980b9] font-medium">
                Nombre(s):
              </Label>
              <Input id="nombre" value={formData.nombre} onChange={(e) => handleChange("nombre", e.target.value)} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4 items-end">
            <div className="col-span-2">
              <Label className="text-[#2980b9] font-medium">Tiene CI?</Label>
              <div className="flex items-center gap-2 mt-2">
                <Checkbox
                  id="ci-si"
                  checked={formData.tieneCi}
                  onCheckedChange={(checked) => handleChange("tieneCi", checked === true)}
                />
                <Label htmlFor="ci-si" className="text-sm">
                  Sí
                </Label>
                <Checkbox
                  id="ci-no"
                  checked={!formData.tieneCi}
                  onCheckedChange={(checked) => handleChange("tieneCi", checked !== true)}
                />
                <Label htmlFor="ci-no" className="text-sm">
                  No
                </Label>
              </div>
            </div>
            <div className="col-span-2">
              <Label htmlFor="nro-id" className="text-[#2980b9] font-medium">
                N° ID.
              </Label>
              <Input id="nro-id" value={formData.nroId} onChange={(e) => handleChange("nroId", e.target.value)} />
            </div>
            <div className="col-span-1">
              <Label htmlFor="complemento" className="text-[#2980b9] font-medium">
                Complemento
              </Label>
              <Input
                id="complemento"
                value={formData.complemento}
                onChange={(e) => handleChange("complemento", e.target.value)}
              />
            </div>
            <div className="col-span-1">
              <Label htmlFor="exp" className="text-[#2980b9] font-medium">
                Exp
              </Label>
              <Select value={formData.exp} onValueChange={(value) => handleChange("exp", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lp">LP</SelectItem>
                  <SelectItem value="cb">CB</SelectItem>
                  <SelectItem value="sc">SC</SelectItem>
                  <SelectItem value="or">OR</SelectItem>
                  <SelectItem value="pt">PT</SelectItem>
                  <SelectItem value="tj">TJ</SelectItem>
                  <SelectItem value="bn">BN</SelectItem>
                  <SelectItem value="pn">PN</SelectItem>
                  <SelectItem value="ch">CH</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-4">
              <Label className="text-[#2980b9] font-medium block mb-1">Fecha de Nacimiento</Label>
              <div className="flex gap-2">
                <div>
                  <Label htmlFor="fecha-nac-dia" className="text-xs">
                    día
                  </Label>
                  <Input
                    id="fecha-nac-dia"
                    className="w-16"
                    value={formData.fechaNacDia}
                    onChange={(e) => handleChange("fechaNacDia", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="fecha-nac-mes" className="text-xs">
                    mes
                  </Label>
                  <Input
                    id="fecha-nac-mes"
                    className="w-16"
                    value={formData.fechaNacMes}
                    onChange={(e) => handleChange("fechaNacMes", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="fecha-nac-anio" className="text-xs">
                    año
                  </Label>
                  <Input
                    id="fecha-nac-anio"
                    className="w-20"
                    value={formData.fechaNacAnio}
                    onChange={(e) => handleChange("fechaNacAnio", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="edad" className="text-xs">
                    edad
                  </Label>
                  <Input
                    id="edad"
                    className="w-16"
                    value={formData.edad}
                    onChange={(e) => handleChange("edad", e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <Label className="text-[#2980b9] font-medium">Sexo</Label>
              <div className="flex items-center gap-2 mt-2">
                <Checkbox
                  id="sexo-femenino"
                  checked={formData.sexo === "femenino"}
                  onCheckedChange={(checked) => checked && handleChange("sexo", "femenino")}
                />
                <Label htmlFor="sexo-femenino" className="text-sm">
                  Femenino
                </Label>
                <Checkbox
                  id="sexo-masculino"
                  checked={formData.sexo === "masculino"}
                  onCheckedChange={(checked) => checked && handleChange("sexo", "masculino")}
                />
                <Label htmlFor="sexo-masculino" className="text-sm">
                  Masculino
                </Label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div>
              <Label htmlFor="estado-civil" className="text-[#2980b9] font-medium">
                Estado Civil:
              </Label>
              <Select value={formData.estadoCivil} onValueChange={(value) => handleChange("estadoCivil", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="soltero">Soltero/a</SelectItem>
                  <SelectItem value="casado">Casado/a</SelectItem>
                  <SelectItem value="divorciado">Divorciado/a</SelectItem>
                  <SelectItem value="viudo">Viudo/a</SelectItem>
                  <SelectItem value="concubino">Concubino/a</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="ocupacion" className="text-[#2980b9] font-medium">
                Ocupación:
              </Label>
              <Select value={formData.ocupacion} onValueChange={(value) => handleChange("ocupacion", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="estudiante">Estudiante</SelectItem>
                  <SelectItem value="empleado">Empleado</SelectItem>
                  <SelectItem value="independiente">Trabajador Independiente</SelectItem>
                  <SelectItem value="jubilado">Jubilado</SelectItem>
                  <SelectItem value="desempleado">Desempleado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="profesion" className="text-[#2980b9] font-medium">
                Profesión:
              </Label>
              <Select value={formData.profesion} onValueChange={(value) => handleChange("profesion", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="medico">Médico</SelectItem>
                  <SelectItem value="ingeniero">Ingeniero</SelectItem>
                  <SelectItem value="abogado">Abogado</SelectItem>
                  <SelectItem value="profesor">Profesor</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="nivel-estudios" className="text-[#2980b9] font-medium">
                Nivel de Estudios:
              </Label>
              <Select value={formData.nivelEstudios} onValueChange={(value) => handleChange("nivelEstudios", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ninguno">Ninguno</SelectItem>
                  <SelectItem value="primaria">Primaria</SelectItem>
                  <SelectItem value="secundaria">Secundaria</SelectItem>
                  <SelectItem value="tecnico">Técnico</SelectItem>
                  <SelectItem value="universitario">Universitario</SelectItem>
                  <SelectItem value="postgrado">Postgrado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
            <div className="col-span-4">
              <Label htmlFor="zona-localidad" className="text-[#2980b9] font-medium">
                Zona / Localidad:
              </Label>
              <Select value={formData.zonaLocalidad} onValueChange={(value) => handleChange("zonaLocalidad", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="norte">Zona Norte</SelectItem>
                  <SelectItem value="sur">Zona Sur</SelectItem>
                  <SelectItem value="este">Zona Este</SelectItem>
                  <SelectItem value="oeste">Zona Oeste</SelectItem>
                  <SelectItem value="centro">Zona Centro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-4">
              <Label htmlFor="direccion" className="text-[#2980b9] font-medium">
                Dir./Calle, Avenida, carretera, camino:
              </Label>
              <Input
                id="direccion"
                value={formData.direccion}
                onChange={(e) => handleChange("direccion", e.target.value)}
              />
            </div>
            <div className="col-span-1">
              <Label htmlFor="nro-puerta" className="text-[#2980b9] font-medium">
                N° Puerta
              </Label>
              <Input
                id="nro-puerta"
                value={formData.nroPuerta}
                onChange={(e) => handleChange("nroPuerta", e.target.value)}
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="nombre-edificio" className="text-[#2980b9] font-medium">
                Nombre Edificio
              </Label>
              <Input
                id="nombre-edificio"
                value={formData.nombreEdificio}
                onChange={(e) => handleChange("nombreEdificio", e.target.value)}
              />
            </div>
            <div className="col-span-1">
              <Label htmlFor="telefono" className="text-[#2980b9] font-medium">
                Teléfono:
              </Label>
              <Input
                id="telefono"
                value={formData.telefono}
                onChange={(e) => handleChange("telefono", e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
            <div>
              <h3 className="text-[#2980b9] font-medium mb-2">Lugar de Nacimiento:</h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="lugar-nac-departamento" className="text-sm">
                    Departamento:
                  </Label>
                  <Select
                    value={formData.lugarNacDepartamento}
                    onValueChange={(value) => handleChange("lugarNacDepartamento", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="la-paz">La Paz</SelectItem>
                      <SelectItem value="cochabamba">Cochabamba</SelectItem>
                      <SelectItem value="santa-cruz">Santa Cruz</SelectItem>
                      <SelectItem value="oruro">Oruro</SelectItem>
                      <SelectItem value="potosi">Potosí</SelectItem>
                      <SelectItem value="tarija">Tarija</SelectItem>
                      <SelectItem value="beni">Beni</SelectItem>
                      <SelectItem value="pando">Pando</SelectItem>
                      <SelectItem value="chuquisaca">Chuquisaca</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="lugar-nac-municipio" className="text-sm">
                    Municipio:
                  </Label>
                  <Select
                    value={formData.lugarNacMunicipio}
                    onValueChange={(value) => handleChange("lugarNacMunicipio", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="la-paz">La Paz</SelectItem>
                      <SelectItem value="el-alto">El Alto</SelectItem>
                      <SelectItem value="cochabamba">Cochabamba</SelectItem>
                      <SelectItem value="quillacollo">Quillacollo</SelectItem>
                      <SelectItem value="santa-cruz">Santa Cruz</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-[#2980b9] font-medium mb-2">Lugar donde vive:</h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="lugar-vive-departamento" className="text-sm">
                    Departamento:
                  </Label>
                  <Select
                    value={formData.lugarViveDepartamento}
                    onValueChange={(value) => handleChange("lugarViveDepartamento", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="la-paz">La Paz</SelectItem>
                      <SelectItem value="cochabamba">Cochabamba</SelectItem>
                      <SelectItem value="santa-cruz">Santa Cruz</SelectItem>
                      <SelectItem value="oruro">Oruro</SelectItem>
                      <SelectItem value="potosi">Potosí</SelectItem>
                      <SelectItem value="tarija">Tarija</SelectItem>
                      <SelectItem value="beni">Beni</SelectItem>
                      <SelectItem value="pando">Pando</SelectItem>
                      <SelectItem value="chuquisaca">Chuquisaca</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="lugar-vive-municipio" className="text-sm">
                    Municipio:
                  </Label>
                  <Select
                    value={formData.lugarViveMunicipio}
                    onValueChange={(value) => handleChange("lugarViveMunicipio", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="la-paz">La Paz</SelectItem>
                      <SelectItem value="el-alto">El Alto</SelectItem>
                      <SelectItem value="cochabamba">Cochabamba</SelectItem>
                      <SelectItem value="quillacollo">Quillacollo</SelectItem>
                      <SelectItem value="santa-cruz">Santa Cruz</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-[#2980b9] font-medium mb-2">Interculturalidad</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="idioma-hablado" className="text-sm">
                  Idioma hablado:
                </Label>
                <Select value={formData.idiomaHablado} onValueChange={(value) => handleChange("idiomaHablado", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="castellano">Castellano</SelectItem>
                    <SelectItem value="quechua">Quechua</SelectItem>
                    <SelectItem value="aymara">Aymara</SelectItem>
                    <SelectItem value="guarani">Guaraní</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="idioma-materno" className="text-sm">
                  Idioma Materno:
                </Label>
                <Select value={formData.idiomaMaterno} onValueChange={(value) => handleChange("idiomaMaterno", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="castellano">Castellano</SelectItem>
                    <SelectItem value="quechua">Quechua</SelectItem>
                    <SelectItem value="aymara">Aymara</SelectItem>
                    <SelectItem value="guarani">Guaraní</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="auto-pertenencia" className="text-sm">
                  Auto Pertenencia cultural:
                </Label>
                <Select
                  value={formData.autoPertenenciaCultural}
                  onValueChange={(value) => handleChange("autoPertenenciaCultural", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ninguno">Ninguno</SelectItem>
                    <SelectItem value="quechua">Quechua</SelectItem>
                    <SelectItem value="aymara">Aymara</SelectItem>
                    <SelectItem value="guarani">Guaraní</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-[#2980b9] font-medium mb-2">Ocupación</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="actividades-reproductivas" className="text-sm">
                  Actividades Reproductivas:
                </Label>
                <Input
                  id="actividades-reproductivas"
                  value={formData.actividadesReproductivas}
                  onChange={(e) => handleChange("actividadesReproductivas", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="gestion-comunitaria" className="text-sm">
                  Gestión Comunitaria:
                </Label>
                <Input
                  id="gestion-comunitaria"
                  value={formData.gestionComunitaria}
                  onChange={(e) => handleChange("gestionComunitaria", e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-6 print:hidden">
            <div className="text-sm text-gray-600">
              Alt-N (Crear con una HC definitiva) Alt-D (Fecha actual) Alt-A (Tiene CI?) Alt-E (Edad) Alt-F (Femenino)
              Alt-M (Masculino) Alt-G (Grabar) Alt-S (Salir)
            </div>
            <Button className="bg-[#2980b9] hover:bg-[#1a5b8e]">
              <Save className="mr-2 h-4 w-4" />
              Guardar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
