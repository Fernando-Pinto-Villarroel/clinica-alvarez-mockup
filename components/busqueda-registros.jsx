"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X, Search, Loader2 } from "lucide-react";

// Datos de ejemplo para simular una base de datos más grande
const MOCK_PACIENTES = [
  {
    id: 1,
    regClinico: 1,
    primerApellido: "FLORES",
    segundoApellido: "MONTOYA",
    nombre: "JOSEFINA",
    codigo: "010260-JFM",
    nroCi: "1244765",
    fechaNac: "01/02/1960",
    direccion: "CALLE JOSE",
  },
  {
    id: 2,
    regClinico: 2,
    primerApellido: "GOMEZ",
    segundoApellido: "MONTERO",
    nombre: "ROSA",
    codigo: "070463-RGM",
    nroCi: "784653",
    fechaNac: "07/04/1963",
    direccion: "DEL POBLADO",
  },
  {
    id: 3,
    regClinico: 3,
    primerApellido: "RODRIGUEZ",
    segundoApellido: "PEREZ",
    nombre: "CARLOS",
    codigo: "150570-CRP",
    nroCi: "892345",
    fechaNac: "15/05/1970",
    direccion: "AV. PRINCIPAL 123",
  },
  {
    id: 4,
    regClinico: 4,
    primerApellido: "MARTINEZ",
    segundoApellido: "LOPEZ",
    nombre: "ANA",
    codigo: "230982-AML",
    nroCi: "567123",
    fechaNac: "23/09/1982",
    direccion: "CALLE NUEVA 45",
  },
  {
    id: 5,
    regClinico: 5,
    primerApellido: "SANCHEZ",
    segundoApellido: "GOMEZ",
    nombre: "LUIS",
    codigo: "100475-LSG",
    nroCi: "345678",
    fechaNac: "10/04/1975",
    direccion: "PASEO CENTRAL 67",
  },
  {
    id: 6,
    regClinico: 6,
    primerApellido: "TORRES",
    segundoApellido: "DIAZ",
    nombre: "ELENA",
    codigo: "050590-ETD",
    nroCi: "901234",
    fechaNac: "05/05/1990",
    direccion: "AV. LIBERTAD 89",
  },
  {
    id: 7,
    regClinico: 7,
    primerApellido: "FERNANDEZ",
    segundoApellido: "RUIZ",
    nombre: "JUAN",
    codigo: "120365-JFR",
    nroCi: "456789",
    fechaNac: "12/03/1965",
    direccion: "CALLE MAYOR 12",
  },
  {
    id: 8,
    regClinico: 8,
    primerApellido: "GONZALEZ",
    segundoApellido: "HERNANDEZ",
    nombre: "PATRICIA",
    codigo: "270288-PGH",
    nroCi: "123890",
    fechaNac: "27/02/1988",
    direccion: "PLAZA CENTRAL 34",
  },
  {
    id: 9,
    regClinico: 9,
    primerApellido: "MORALES",
    segundoApellido: "JIMENEZ",
    nombre: "ROBERTO",
    codigo: "180472-RMJ",
    nroCi: "678901",
    fechaNac: "18/04/1972",
    direccion: "AV. NORTE 56",
  },
  {
    id: 10,
    regClinico: 10,
    primerApellido: "NAVARRO",
    segundoApellido: "ROMERO",
    nombre: "SOFIA",
    codigo: "090595-SNR",
    nroCi: "234567",
    fechaNac: "09/05/1995",
    direccion: "CALLE SUR 78",
  },
  {
    id: 11,
    regClinico: 11,
    primerApellido: "CASTRO",
    segundoApellido: "ORTEGA",
    nombre: "MIGUEL",
    codigo: "140380-MCO",
    nroCi: "890123",
    fechaNac: "14/03/1980",
    direccion: "PASEO ESTE 90",
  },
  {
    id: 12,
    regClinico: 12,
    primerApellido: "RUBIO",
    segundoApellido: "SERRANO",
    nombre: "LAURA",
    codigo: "020692-LRS",
    nroCi: "345679", // Cambiado para evitar duplicación
    fechaNac: "02/06/1992",
    direccion: "AV. OESTE 12",
  },
  {
    id: 13,
    regClinico: 13,
    primerApellido: "MOLINA",
    segundoApellido: "DELGADO",
    nombre: "DANIEL",
    codigo: "110485-DMD",
    nroCi: "901235", // Cambiado para evitar duplicación
    fechaNac: "11/04/1985",
    direccion: "CALLE ALTA 34",
  },
  {
    id: 14,
    regClinico: 14,
    primerApellido: "ORTIZ",
    segundoApellido: "MORENO",
    nombre: "CARMEN",
    codigo: "300978-COM",
    nroCi: "567891", // Cambiado para evitar duplicación
    fechaNac: "30/09/1978",
    direccion: "PLAZA BAJA 56",
  },
  {
    id: 15,
    regClinico: 15,
    primerApellido: "RAMOS",
    segundoApellido: "CASTRO",
    nombre: "JAVIER",
    codigo: "250567-JRC",
    nroCi: "123457", // Cambiado para evitar duplicación
    fechaNac: "25/05/1967",
    direccion: "AV. CENTRAL 78",
  },
  {
    id: 16,
    regClinico: 16,
    primerApellido: "VARGAS",
    segundoApellido: "REYES",
    nombre: "MONICA",
    codigo: "170390-MVR",
    nroCi: "789013", // Cambiado para evitar duplicación
    fechaNac: "17/03/1990",
    direccion: "CALLE PRINCIPAL 90",
  },
  {
    id: 17,
    regClinico: 17,
    primerApellido: "SANTOS",
    segundoApellido: "MENDOZA",
    nombre: "ALBERTO",
    codigo: "080275-ASM",
    nroCi: "345680", // Cambiado para evitar duplicación
    fechaNac: "08/02/1975",
    direccion: "PASEO NUEVO 12",
  },
  {
    id: 18,
    regClinico: 18,
    primerApellido: "FLORES",
    segundoApellido: "CRUZ",
    nombre: "SILVIA",
    codigo: "190587-SFC",
    nroCi: "901236", // Cambiado para evitar duplicación
    fechaNac: "19/05/1987",
    direccion: "AV. ANTIGUA 34",
  },
  {
    id: 19,
    regClinico: 19,
    primerApellido: "HERRERA",
    segundoApellido: "GUTIERREZ",
    nombre: "RAUL",
    codigo: "220470-RHG",
    nroCi: "567892", // Cambiado para evitar duplicación
    fechaNac: "22/04/1970",
    direccion: "CALLE VIEJA 56",
  },
  {
    id: 20,
    regClinico: 20,
    primerApellido: "DIAZ",
    segundoApellido: "SOTO",
    nombre: "ISABEL",
    codigo: "130583-IDS",
    nroCi: "123458", // Cambiado para evitar duplicación
    fechaNac: "13/05/1983",
    direccion: "PLAZA MAYOR 78",
  },
  {
    id: 90000000,
    regClinico: 90000000,
    primerApellido: "SNIS",
    segundoApellido: "SNIS",
    nombre: "SNIS",
    codigo: "010111-SSS",
    nroCi: "0",
    fechaNac: "01/08/2011",
    direccion: "CALLE CENTRAL",
  },
  {
    id: 90000001,
    regClinico: 90000001,
    primerApellido: "NN",
    segundoApellido: "NN",
    nombre: "NN",
    codigo: "010911-NNN",
    nroCi: "1", // Cambiado para evitar duplicación con el anterior
    fechaNac: "01/09/2011",
    direccion: "CALLE CENTRAL",
  },
];

export function BusquedaRegistros({ onClose }) {
  const [pacientes, setPacientes] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef(null);
  const itemsPerPage = 5;

  // Cargar datos iniciales
  useEffect(() => {
    loadMoreData();
  }, []);

  // Función para cargar más datos
  const loadMoreData = () => {
    if (loading) return;

    setLoading(true);

    // Simular una carga de datos con un retraso
    setTimeout(() => {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = page * itemsPerPage;
      const newItems = MOCK_PACIENTES.slice(startIndex, endIndex);

      if (newItems.length > 0) {
        setPacientes((prev) => [...prev, ...newItems]);
        setPage((prev) => prev + 1);
      } else {
        setHasMore(false);
      }

      setLoading(false);
    }, 800);
  };

  // Configurar el observador de intersección para el scroll infinito
  const lastPacienteRef = useCallback(
    (node) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreData();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col bg-white">
        <div className="bg-[#d6e9f8] p-2 flex justify-between items-center">
          <h2 className="text-lg font-medium">
            Búsqueda de Registros Clínicos
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <CardContent className="p-4 flex-1 overflow-auto max-h-[70vh] bg-white">
          <div className="flex flex-wrap gap-4 mb-4 items-end">
            <div className="grid gap-1">
              <label className="text-sm">Primer Apellido (F5)</label>
              <Input placeholder="Buscar por primer apellido" />
            </div>

            <div className="grid gap-1">
              <label className="text-sm">Segundo Apellido (F6)</label>
              <Input placeholder="Buscar por segundo apellido" />
            </div>

            <div className="grid gap-1">
              <label className="text-sm">Nombres (F7)</label>
              <Input placeholder="Buscar por nombres" />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-6 items-end">
            <div className="grid gap-1">
              <label className="text-sm">Nro. de Registro Clínico (F3)</label>
              <Input placeholder="Buscar por registro" />
            </div>

            <div className="grid gap-1">
              <label className="text-sm">Fecha de Nacimiento (F4)</label>
              <Input placeholder="DD/MM/AAAA" />
            </div>

            <div className="grid gap-1">
              <label className="text-sm">C.I. - CC (F8)</label>
              <Input placeholder="Buscar por CI" />
            </div>

            <div className="grid gap-1">
              <label className="text-sm">Exp. (F9)</label>
              <Select defaultValue="ben">
                <SelectTrigger className="w-20">
                  <SelectValue placeholder="Exp." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ben">BEN</SelectItem>
                  <SelectItem value="lpz">LPZ</SelectItem>
                  <SelectItem value="cbba">CBBA</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="flex gap-2">
              <Search className="h-4 w-4" />
              Buscar
            </Button>
          </div>

          <div className="bg-white rounded-lg border overflow-hidden">
            <div className="overflow-x-auto max-h-[400px] overflow-y-auto">
              <table className="w-full border-collapse bg-white">
                <thead className="sticky top-0 z-10">
                  <tr className="bg-[#3498db] text-white text-sm">
                    <th className="p-2 text-left">Reg. Clínico</th>
                    <th className="p-2 text-left">Primer Apellido</th>
                    <th className="p-2 text-left">Segundo Apellido</th>
                    <th className="p-2 text-left">Nombre(s)</th>
                    <th className="p-2 text-left">Código Seguro</th>
                    <th className="p-2 text-left">Nro. CI</th>
                    <th className="p-2 text-left">Fecha de Nac.</th>
                    <th className="p-2 text-left">Dirección</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {pacientes.map((paciente, index) => (
                    <tr
                      key={paciente.id}
                      ref={
                        index === pacientes.length - 1 ? lastPacienteRef : null
                      }
                      className={`border-b border-gray-200 hover:bg-gray-50 text-sm ${
                        index % 2 === 1 ? "bg-[#f9f3d2]" : "bg-white"
                      }`}
                    >
                      <td className="p-2">{paciente.regClinico}</td>
                      <td className="p-2">{paciente.primerApellido}</td>
                      <td className="p-2">{paciente.segundoApellido}</td>
                      <td className="p-2">{paciente.nombre}</td>
                      <td className="p-2">{paciente.codigo}</td>
                      <td className="p-2">{paciente.nroCi}</td>
                      <td className="p-2">{paciente.fechaNac}</td>
                      <td className="p-2">{paciente.direccion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {loading && (
                <div className="flex justify-center items-center p-4 bg-white">
                  <Loader2 className="h-6 w-6 animate-spin text-[#3498db]" />
                  <span className="ml-2">Cargando más registros...</span>
                </div>
              )}

              {!hasMore && pacientes.length > 0 && (
                <div className="text-center p-4 text-gray-500 bg-white">
                  No hay más registros para mostrar
                </div>
              )}
            </div>
          </div>
        </CardContent>

        <div className="bg-[#d6e9f8] p-2 flex flex-wrap gap-2 justify-center">
          <Button variant="outline" size="sm" className="text-xs">
            Alt-N (Nuevo)
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            Alt-M (Modificar)
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            Alt-P (Imprimir)
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            Alt-L (Limpiar)
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            Alt-E (Elegir)
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            F2 (Convertir a Historia Clínica Definitiva)
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            Alt-S (Salir)
          </Button>
        </div>
      </Card>
    </div>
  );
}
