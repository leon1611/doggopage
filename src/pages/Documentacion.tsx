import React from 'react';
import { FileText, Book, Code, Database } from 'lucide-react';

const Documentacion = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">Documentación</h1>
        <div className="grid gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-indigo-600" size={24} />
              <h2 className="text-2xl font-bold text-indigo-600">Documentación Técnica</h2>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-600 pl-4">
                <h3 className="text-lg font-semibold text-indigo-600">Arquitectura del Sistema</h3>
                <p className="text-gray-700">Descripción detallada de la arquitectura implementada</p>
              </div>
              <div className="border-l-4 border-indigo-600 pl-4">
                <h3 className="text-lg font-semibold text-indigo-600">APIs y Servicios</h3>
                <p className="text-gray-700">Documentación de endpoints y servicios disponibles</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Book className="text-indigo-600" size={24} />
                <h2 className="text-xl font-bold text-indigo-600">Guías de Usuario</h2>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Manual de instalación</li>
                <li>Guía de configuración</li>
                <li>Tutorial de uso básico</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-indigo-600" size={24} />
                <h2 className="text-xl font-bold text-indigo-600">Recursos para Desarrolladores</h2>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Documentación de la API</li>
                <li>Ejemplos de código</li>
                <li>Guías de contribución</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentacion;