import { User, Printer, ArrowLeft, Stethoscope, Pill } from "lucide-react";

const patientHistory = {
    P1001: [
        { type: 'Consulta', date: '2025-01-15', doctor: 'Dr. Morales', summary: 'Chequeo general, todo en orden.' },
        { type: 'Laboratorio', date: '2024-11-20', doctor: 'N/A', summary: 'Hemograma completo, valores normales.' }
    ],
    P1002: [
        { type: 'Consulta', date: '2025-03-10', doctor: 'Dra. Flores', summary: 'Tratamiento para infección respiratoria.' }
    ]
};

export default function MedicalConsultation({ patient, onBack }) {
    const history = patientHistory[patient.patientId] || [];

    const handleSave = () => {
        alert(`Evolución para ${patient.patientName} guardada.`);
        onBack();
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Consulta Médica</h2>
                    <p className="text-gray-600 font-semibold text-lg">{patient.patientName}</p>
                    <p className="text-sm text-gray-500">HC: {patient.patientId} - {patient.specialty}</p>
                </div>
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                >
                    <ArrowLeft size={16} />
                    Volver a la Agenda
                </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 space-y-4">
                    <h3 className="font-semibold text-lg text-gray-700 border-b pb-2">Historial del Paciente</h3>
                    <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                        {history.length > 0 ? history.map((item, index) => (
                            <div key={index} className="bg-gray-50 p-3 rounded-md">
                                <p className="font-semibold text-sm">{item.type} - {item.date}</p>
                                <p className="text-xs text-gray-600">{item.summary}</p>
                            </div>
                        )) : <p className="text-sm text-gray-500">No hay historial previo.</p>}
                    </div>
                </div>

                <div className="lg:col-span-2 space-y-4">
                    <div>
                        <label className="font-semibold text-lg text-gray-700">Evolución Diaria e Indicaciones</label>
                        <textarea
                            rows="8"
                            placeholder="Escriba aquí la evolución del paciente, notas de la consulta, indicaciones para enfermería, etc."
                            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                     <div>
                        <label className="font-semibold text-lg text-gray-700">Diagnóstico</label>
                        <input
                            type="text"
                            placeholder="Ingrese el diagnóstico principal"
                            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="font-semibold text-lg text-gray-700">Tratamiento</label>
                        <textarea
                            rows="4"
                            placeholder="Detalle el tratamiento a seguir."
                            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                </div>
            </div>

            <div className="flex justify-end items-center gap-4 mt-8 border-t pt-6">
                 <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                    <Printer size={16} />
                    Imprimir Expediente
                </button>
                 <button className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
                    <Pill size={16} />
                    Generar Receta
                </button>
                <button 
                    onClick={handleSave}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                    <Stethoscope size={16} />
                    Guardar Evolución y Diagnóstico
                </button>
            </div>
        </div>
    );
}
