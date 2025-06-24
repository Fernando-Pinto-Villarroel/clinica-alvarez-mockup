"use client"

import { useState } from "react"
import {
  Upload,
  Package,
  BarChart3,
  AlertTriangle,
  FileSpreadsheet,
  CheckCircle,
  X,
  ShoppingCart,
  Users,
  Settings,
  Search,
  Plus,
  Edit,
  Warehouse,
  Printer,
} from "lucide-react"
import { useAuth } from "../../../auth/AuthContext"

export default function PharmacyModule() {
  const { currentUser, getRoleDisplayName } = useAuth()
  const [activeTab, setActiveTab] = useState("import-apdesc")
  const [importStatus, setImportStatus] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileUpload = (event) => {
    const file = event.target.files?.[0]
    if (file && (file.type.includes("sheet") || file.name.endsWith(".xlsx") || file.name.endsWith(".xls"))) {
      setSelectedFile(file)
      setImportStatus("ready")
    } else {
      alert("Por favor selecciona un archivo Excel válido (.xlsx, .xls)")
    }
  }

  const processImport = () => {
    if (!selectedFile) return

    setImportStatus("processing")

    // Simular procesamiento del archivo Excel
    setTimeout(() => {
      setImportStatus("success")
      setTimeout(() => {
        setImportStatus(null)
        setSelectedFile(null)
      }, 3000)
    }, 2000)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mx-4 my-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Gestionar Farmacia</h2>
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-500">
            Usuario: {currentUser?.name} ({getRoleDisplayName(currentUser?.role)})
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            <Package size={16} />
            <span>Sistema Apdesc Integrado</span>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab("import-apdesc")}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "import-apdesc"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <Upload size={16} className="inline mr-2" />
            Importar Apdesc
          </button>
          <button
            onClick={() => setActiveTab("register-articles")}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "register-articles"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <Plus size={16} className="inline mr-2" />
            Registrar Artículos
          </button>
          <button
            onClick={() => setActiveTab("modify-articles")}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "modify-articles"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <Edit size={16} className="inline mr-2" />
            Modificar Artículos
          </button>
          <button
            onClick={() => setActiveTab("advanced-search")}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "advanced-search"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <Search size={16} className="inline mr-2" />
            Búsqueda Avanzada
          </button>
          <button
            onClick={() => setActiveTab("inventory")}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "inventory"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <Warehouse size={16} className="inline mr-2" />
            Inventario
          </button>
          <button
            onClick={() => setActiveTab("sales-code")}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "sales-code"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <ShoppingCart size={16} className="inline mr-2" />
            Código de Ventas
          </button>
          <button
            onClick={() => setActiveTab("suppliers")}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "suppliers"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <Users size={16} className="inline mr-2" />
            Proveedores
          </button>
          <button
            onClick={() => setActiveTab("sales-report")}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "sales-report"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <BarChart3 size={16} className="inline mr-2" />
            Reporte de Ventas
          </button>
          <button
            onClick={() => setActiveTab("expiring-products")}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "expiring-products"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <AlertTriangle size={16} className="inline mr-2" />
            Productos por Vencer
          </button>
          <button
            onClick={() => setActiveTab("ticket-config")}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "ticket-config"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <Settings size={16} className="inline mr-2" />
            Configuración
          </button>
        </div>

        {/* IMPORTAR APDESC */}
        {activeTab === "import-apdesc" && (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileSpreadsheet className="text-blue-600" size={24} />
                <h3 className="text-lg font-semibold text-blue-800">Importar datos desde Apdesc</h3>
              </div>
              <p className="text-blue-700 mb-4">
                Sube el archivo Excel exportado desde tu sistema Apdesc para sincronizar el inventario, precios y
                productos.
              </p>

              <div className="space-y-4">
                <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center">
                  <Upload className="mx-auto text-blue-400 mb-4" size={48} />
                  <div className="space-y-2">
                    <p className="text-blue-600 font-medium">
                      Arrastra tu archivo Excel aquí o haz clic para seleccionar
                    </p>
                    <p className="text-sm text-blue-500">Formatos soportados: .xlsx, .xls</p>
                    <input
                      type="file"
                      accept=".xlsx,.xls"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="excel-upload"
                    />
                    <label
                      htmlFor="excel-upload"
                      className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-colors"
                    >
                      Seleccionar archivo
                    </label>
                  </div>
                </div>

                {selectedFile && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileSpreadsheet className="text-green-600" size={20} />
                        <div>
                          <p className="font-medium text-green-800">{selectedFile.name}</p>
                          <p className="text-sm text-green-600">
                            Tamaño: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedFile(null)
                          setImportStatus(null)
                        }}
                        className="text-green-600 hover:text-green-800"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>
                )}

                {importStatus === "ready" && (
                  <button
                    onClick={processImport}
                    className="w-full px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
                  >
                    🚀 Procesar e Importar Datos
                  </button>
                )}

                {importStatus === "processing" && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-yellow-600"></div>
                      <p className="text-yellow-800 font-medium">Procesando archivo Excel...</p>
                    </div>
                    <p className="text-sm text-yellow-600 mt-2">
                      Leyendo productos, precios, stock y categorías desde Apdesc
                    </p>
                  </div>
                )}

                {importStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-green-600" size={24} />
                      <div>
                        <p className="text-green-800 font-medium">¡Importación exitosa!</p>
                        <p className="text-sm text-green-600">
                          Se han importado 247 productos, actualizado el inventario y sincronizado los precios.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* REGISTRAR ARTÍCULOS */}
        {activeTab === "register-articles" && (
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Plus className="text-green-600" size={24} />
                <h3 className="text-lg font-semibold text-green-800">Registrar Nuevo Artículo</h3>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Código del Producto</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Ej: MED001"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre del Producto</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Ej: Paracetamol 500mg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Categoría</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option value="">Seleccionar categoría</option>
                    <option value="analgesicos">Analgésicos</option>
                    <option value="antibioticos">Antibióticos</option>
                    <option value="antiinflamatorios">Antiinflamatorios</option>
                    <option value="antihistaminicos">Antihistamínicos</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Precio de Venta</label>
                  <input
                    type="number"
                    step="0.01"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="0.00"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Stock Inicial</label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Fecha de Vencimiento</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Descripción</label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Descripción del producto..."
                  ></textarea>
                </div>

                <div className="md:col-span-2 flex gap-4">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Registrar Producto
                  </button>
                  <button
                    type="button"
                    className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Limpiar Formulario
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODIFICAR ARTÍCULOS */}
        {activeTab === "modify-articles" && (
          <div className="space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Edit className="text-yellow-600" size={24} />
                <h3 className="text-lg font-semibold text-yellow-800">Modificar Artículos</h3>
              </div>

              <div className="mb-6">
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Buscar producto por código o nombre..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                  <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">
                    <Search size={16} />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { code: "MED001", name: "Paracetamol 500mg", category: "Analgésicos", price: "$12.50", stock: 150 },
                  { code: "MED002", name: "Amoxicilina 250mg", category: "Antibióticos", price: "$25.00", stock: 89 },
                  {
                    code: "MED003",
                    name: "Ibuprofeno 400mg",
                    category: "Antiinflamatorios",
                    price: "$18.75",
                    stock: 200,
                  },
                ].map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg"
                  >
                    <div className="flex-1 grid grid-cols-5 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Código</p>
                        <p className="font-medium">{product.code}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Producto</p>
                        <p className="font-medium">{product.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Categoría</p>
                        <p className="font-medium">{product.category}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Precio</p>
                        <p className="font-medium text-green-600">{product.price}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Stock</p>
                        <p className="font-medium">{product.stock}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors">
                        Editar
                      </button>
                      <button className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors">
                        Eliminar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* BÚSQUEDA AVANZADA */}
        {activeTab === "advanced-search" && (
          <div className="space-y-6">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Search className="text-purple-600" size={24} />
                <h3 className="text-lg font-semibold text-purple-800">Búsqueda Avanzada de Productos</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Buscar por nombre</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Nombre del producto..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Categoría</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option value="">Todas las categorías</option>
                    <option value="analgesicos">Analgésicos</option>
                    <option value="antibioticos">Antibióticos</option>
                    <option value="antiinflamatorios">Antiinflamatorios</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Estado del stock</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option value="">Todos</option>
                    <option value="disponible">Disponible</option>
                    <option value="bajo">Stock bajo</option>
                    <option value="agotado">Agotado</option>
                  </select>
                </div>
              </div>

              <button className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors mb-6">
                Buscar Productos
              </button>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Código</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Producto</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Categoría</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Precio</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Stock</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      {
                        code: "MED001",
                        name: "Paracetamol 500mg",
                        category: "Analgésicos",
                        price: "$12.50",
                        stock: 150,
                        status: "Disponible",
                      },
                      {
                        code: "MED002",
                        name: "Amoxicilina 250mg",
                        category: "Antibióticos",
                        price: "$25.00",
                        stock: 15,
                        status: "Stock Bajo",
                      },
                      {
                        code: "MED003",
                        name: "Ibuprofeno 400mg",
                        category: "Antiinflamatorios",
                        price: "$18.75",
                        stock: 200,
                        status: "Disponible",
                      },
                    ].map((product, index) => (
                      <tr key={index}>
                        <td className="px-4 py-3 text-sm">{product.code}</td>
                        <td className="px-4 py-3 text-sm font-medium">{product.name}</td>
                        <td className="px-4 py-3 text-sm">{product.category}</td>
                        <td className="px-4 py-3 text-sm text-green-600 font-semibold">{product.price}</td>
                        <td className="px-4 py-3 text-sm">{product.stock}</td>
                        <td className="px-4 py-3 text-sm">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              product.status === "Disponible"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {product.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* INVENTARIO */}
        {activeTab === "inventory" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                <Package className="mx-auto text-blue-600 mb-3" size={32} />
                <h3 className="font-semibold text-blue-800 mb-2">Total Productos</h3>
                <p className="text-2xl font-bold text-blue-600">1,247</p>
                <p className="text-sm text-blue-500">Sincronizado con Apdesc</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <CheckCircle className="mx-auto text-green-600 mb-3" size={32} />
                <h3 className="font-semibold text-green-800 mb-2">En Stock</h3>
                <p className="text-2xl font-bold text-green-600">1,089</p>
                <p className="text-sm text-green-500">Disponibles para venta</p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                <AlertTriangle className="mx-auto text-yellow-600 mb-3" size={32} />
                <h3 className="font-semibold text-yellow-800 mb-2">Stock Bajo</h3>
                <p className="text-2xl font-bold text-yellow-600">23</p>
                <p className="text-sm text-yellow-500">Requieren reposición</p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                <X className="mx-auto text-red-600 mb-3" size={32} />
                <h3 className="font-semibold text-red-800 mb-2">Agotados</h3>
                <p className="text-2xl font-bold text-red-600">135</p>
                <p className="text-sm text-red-500">Sin stock</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Inventario Actual</h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  <Printer size={16} />
                  Imprimir Inventario
                </button>
              </div>

              <div className="space-y-3">
                {[
                  {
                    name: "Paracetamol 500mg",
                    stock: 150,
                    price: "$12.50",
                    category: "Analgésicos",
                    expiry: "2025-12-15",
                  },
                  {
                    name: "Amoxicilina 250mg",
                    stock: 89,
                    price: "$25.00",
                    category: "Antibióticos",
                    expiry: "2025-08-20",
                  },
                  {
                    name: "Ibuprofeno 400mg",
                    stock: 200,
                    price: "$18.75",
                    category: "Antiinflamatorios",
                    expiry: "2026-01-10",
                  },
                  {
                    name: "Loratadina 10mg",
                    stock: 45,
                    price: "$22.00",
                    category: "Antihistamínicos",
                    expiry: "2025-09-30",
                  },
                ].map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1 grid grid-cols-5 gap-4">
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-gray-500">{product.category}</p>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-blue-600">{product.stock}</p>
                        <p className="text-sm text-gray-500">Unidades</p>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-green-600">{product.price}</p>
                        <p className="text-sm text-gray-500">Precio</p>
                      </div>
                      <div className="text-center">
                        <p className="font-medium">{product.expiry}</p>
                        <p className="text-sm text-gray-500">Vencimiento</p>
                      </div>
                      <div className="text-center">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            product.stock > 100
                              ? "bg-green-100 text-green-800"
                              : product.stock > 50
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {product.stock > 100 ? "Stock Alto" : product.stock > 50 ? "Stock Medio" : "Stock Bajo"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CÓDIGO DE VENTAS */}
        {activeTab === "sales-code" && (
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <ShoppingCart className="text-green-600" size={24} />
                <h3 className="text-lg font-semibold text-green-800">Sistema de Ventas</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <ShoppingCart className="mx-auto text-green-600 mb-2" size={24} />
                  <h4 className="font-semibold text-green-800 mb-1">Ventas del Día</h4>
                  <p className="text-xl font-bold text-green-600">$2,450.00</p>
                  <p className="text-sm text-green-500">23 transacciones</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <Package className="mx-auto text-blue-600 mb-2" size={24} />
                  <h4 className="font-semibold text-blue-800 mb-1">Productos Vendidos</h4>
                  <p className="text-xl font-bold text-blue-600">156</p>
                  <p className="text-sm text-blue-500">Unidades despachadas</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <BarChart3 className="mx-auto text-purple-600 mb-2" size={24} />
                  <h4 className="font-semibold text-purple-800 mb-1">Promedio por Venta</h4>
                  <p className="text-xl font-bold text-purple-600">$106.52</p>
                  <p className="text-sm text-purple-500">Por transacción</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4">Últimas Ventas</h4>
                <div className="space-y-3">
                  {[
                    { time: "14:30", customer: "María González", items: 3, total: "$125.50", method: "Efectivo" },
                    { time: "14:15", customer: "Juan Pérez", items: 1, total: "$22.00", method: "Tarjeta" },
                    { time: "14:00", customer: "Ana Martínez", items: 2, total: "$87.25", method: "Efectivo" },
                    {
                      time: "13:45",
                      customer: "Carlos Rodríguez",
                      items: 4,
                      total: "$156.75",
                      method: "Transferencia",
                    },
                  ].map((sale, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-sm font-medium text-gray-600">{sale.time}</div>
                        <div>
                          <p className="font-medium">{sale.customer}</p>
                          <p className="text-sm text-gray-500">{sale.items} productos</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">{sale.total}</p>
                        <p className="text-sm text-gray-500">{sale.method}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PROVEEDORES */}
        {activeTab === "suppliers" && (
          <div className="space-y-6">
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Users className="text-indigo-600" size={24} />
                  <h3 className="text-lg font-semibold text-indigo-800">Gestión de Proveedores</h3>
                </div>
                <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors">
                  <Plus size={16} className="inline mr-2" />
                  Nuevo Proveedor
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Laboratorios ABC",
                    contact: "Dr. Roberto Silva",
                    phone: "+591 123-4567",
                    email: "contacto@lababc.com",
                    products: 245,
                    status: "Activo",
                  },
                  {
                    name: "Farmacéutica XYZ",
                    contact: "Lic. María Gonzales",
                    phone: "+591 987-6543",
                    email: "ventas@farmaxyz.com",
                    products: 189,
                    status: "Activo",
                  },
                  {
                    name: "Distribuidora MED",
                    contact: "Ing. Carlos Mendoza",
                    phone: "+591 456-7890",
                    email: "info@distmed.com",
                    products: 156,
                    status: "Pendiente",
                  },
                ].map((supplier, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-800">{supplier.name}</h4>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          supplier.status === "Activo" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {supplier.status}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="text-gray-500">Contacto:</span> {supplier.contact}
                      </p>
                      <p>
                        <span className="text-gray-500">Teléfono:</span> {supplier.phone}
                      </p>
                      <p>
                        <span className="text-gray-500">Email:</span> {supplier.email}
                      </p>
                      <p>
                        <span className="text-gray-500">Productos:</span> {supplier.products}
                      </p>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button className="flex-1 px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors">
                        Editar
                      </button>
                      <button className="flex-1 px-3 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-600 transition-colors">
                        Ver Productos
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* REPORTE DE VENTAS */}
        {activeTab === "sales-report" && (
          <div className="space-y-6">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="text-orange-600" size={24} />
                <h3 className="text-lg font-semibold text-orange-800">Reportes de Ventas</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <BarChart3 className="mx-auto text-blue-600 mb-2" size={24} />
                  <h4 className="font-semibold text-blue-800 mb-1">Ventas Mensuales</h4>
                  <p className="text-xl font-bold text-blue-600">$45,230</p>
                  <p className="text-sm text-blue-500">Este mes</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <Package className="mx-auto text-green-600 mb-2" size={24} />
                  <h4 className="font-semibold text-green-800 mb-1">Productos Vendidos</h4>
                  <p className="text-xl font-bold text-green-600">3,247</p>
                  <p className="text-sm text-green-500">Este mes</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <Users className="mx-auto text-purple-600 mb-2" size={24} />
                  <h4 className="font-semibold text-purple-800 mb-1">Clientes Atendidos</h4>
                  <p className="text-xl font-bold text-purple-600">892</p>
                  <p className="text-sm text-purple-500">Este mes</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <ShoppingCart className="mx-auto text-orange-600 mb-2" size={24} />
                  <h4 className="font-semibold text-orange-800 mb-1">Transacciones</h4>
                  <p className="text-xl font-bold text-orange-600">1,156</p>
                  <p className="text-sm text-orange-500">Este mes</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4">Reporte de Ventas por Categoría</h4>
                <div className="space-y-4">
                  {[
                    { category: "Analgésicos", sales: "$8,450", percentage: 35, color: "bg-blue-500" },
                    { category: "Antibióticos", sales: "$6,230", percentage: 28, color: "bg-green-500" },
                    { category: "Antiinflamatorios", sales: "$4,120", percentage: 18, color: "bg-yellow-500" },
                    { category: "Protectores Gástricos", sales: "$3,890", percentage: 12, color: "bg-purple-500" },
                    { category: "Otros", sales: "$2,340", percentage: 7, color: "bg-gray-500" },
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{item.category}</span>
                        <span className="text-green-600 font-semibold">{item.sales}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`${item.color} h-2 rounded-full`}
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <div className="text-sm text-gray-500">{item.percentage}% del total</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PRODUCTOS POR VENCER */}
        {activeTab === "expiring-products" && (
          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="text-red-600" size={24} />
                <h3 className="text-lg font-semibold text-red-800">Productos Próximos a Vencer</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <AlertTriangle className="mx-auto text-yellow-600 mb-2" size={24} />
                  <h4 className="font-semibold text-yellow-800 mb-1">Próximos 30 días</h4>
                  <p className="text-xl font-bold text-yellow-600">23</p>
                  <p className="text-sm text-yellow-500">Productos</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <AlertTriangle className="mx-auto text-orange-600 mb-2" size={24} />
                  <h4 className="font-semibold text-orange-800 mb-1">Próximos 15 días</h4>
                  <p className="text-xl font-bold text-orange-600">8</p>
                  <p className="text-sm text-orange-500">Productos</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <AlertTriangle className="mx-auto text-red-600 mb-2" size={24} />
                  <h4 className="font-semibold text-red-800 mb-1">Vencidos</h4>
                  <p className="text-xl font-bold text-red-600">3</p>
                  <p className="text-sm text-red-500">Productos</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4">Lista de Productos por Vencer</h4>
                <div className="space-y-3">
                  {[
                    { name: "Amoxicilina 250mg", expiry: "2025-07-15", days: 22, stock: 45, status: "warning" },
                    { name: "Paracetamol 500mg", expiry: "2025-07-08", days: 15, stock: 89, status: "danger" },
                    { name: "Ibuprofeno 400mg", expiry: "2025-06-30", days: 7, status: "critical", stock: 23 },
                    { name: "Loratadina 10mg", expiry: "2025-06-25", days: 2, status: "expired", stock: 12 },
                  ].map((product, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-4 rounded-lg border-l-4 ${
                        product.status === "expired"
                          ? "bg-red-50 border-l-red-500"
                          : product.status === "critical"
                            ? "bg-orange-50 border-l-orange-500"
                            : product.status === "danger"
                              ? "bg-yellow-50 border-l-yellow-500"
                              : "bg-blue-50 border-l-blue-500"
                      }`}
                    >
                      <div className="flex-1">
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-gray-500">Stock: {product.stock} unidades</p>
                      </div>
                      <div className="text-center">
                        <p className="font-medium">{product.expiry}</p>
                        <p
                          className={`text-sm ${
                            product.status === "expired"
                              ? "text-red-600"
                              : product.status === "critical"
                                ? "text-orange-600"
                                : product.status === "danger"
                                  ? "text-yellow-600"
                                  : "text-blue-600"
                          }`}
                        >
                          {product.status === "expired" ? "Vencido" : `${product.days} días`}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors">
                          Ver Detalles
                        </button>
                        {product.status === "expired" && (
                          <button className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors">
                            Retirar
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CONFIGURACIÓN DE TICKET */}
        {activeTab === "ticket-config" && (
          <div className="space-y-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="text-gray-600" size={24} />
                <h3 className="text-lg font-semibold text-gray-800">Configuración de Tickets de Venta</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de la Farmacia</label>
                    <input
                      type="text"
                      defaultValue="Farmacia San Rafael"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Dirección</label>
                    <textarea
                      rows={3}
                      defaultValue="Av. Principal #123, La Paz, Bolivia"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                    <input
                      type="text"
                      defaultValue="+591 2-123-4567"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">NIT</label>
                    <input
                      type="text"
                      defaultValue="1234567890"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje del Ticket</label>
                    <textarea
                      rows={3}
                      defaultValue="¡Gracias por su compra! Conserve este ticket para cualquier reclamo."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>

                  <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Guardar Configuración
                  </button>
                </div>

                <div className="bg-white border border-gray-300 rounded-lg p-4">
                  <h4 className="font-semibold mb-4 text-center">Vista Previa del Ticket</h4>
                  <div className="border-2 border-dashed border-gray-300 p-4 font-mono text-sm">
                    <div className="text-center mb-4">
                      <p className="font-bold">FARMACIA SAN RAFAEL</p>
                      <p>Av. Principal #123</p>
                      <p>La Paz, Bolivia</p>
                      <p>Tel: +591 2-123-4567</p>
                      <p>NIT: 1234567890</p>
                    </div>
                    <hr className="my-2" />
                    <p>Fecha: 23/06/2025 14:30</p>
                    <p>Ticket: #001234</p>
                    <p>Cajero: Luis Farmacéutico</p>
                    <hr className="my-2" />
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span>Paracetamol 500mg x2</span>
                        <span>$25.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ibuprofeno 400mg x1</span>
                        <span>$18.75</span>
                      </div>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between font-bold">
                      <span>TOTAL:</span>
                      <span>$43.75</span>
                    </div>
                    <hr className="my-2" />
                    <p className="text-center text-xs">
                      ¡Gracias por su compra!
                      <br />
                      Conserve este ticket para
                      <br />
                      cualquier reclamo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
