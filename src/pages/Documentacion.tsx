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
                <p className="text-gray-700">Creacion de las tablas </p>
                <div className="flex gap-2 mt-2">
                <img src="../src/images/user.jpg" alt="Arquitectura 1" className="w-100 h-800 object-cover rounded" />
               <img src="../src/images/datos-db.jpg" alt="Arquitectura 2" className="w-120 h-80 object-cover rounded" />
                </div>

              </div>
              <div className="border-l-4 border-indigo-600 pl-4">
                <h3 className="text-lg font-semibold text-indigo-600">APIs</h3>
                <p className="text-gray-700">Configuarcion de las APIs para su funcionamiento</p>
                <div className="flex gap-2 mt-2">
                <img src="../src/images/API-back.jpeg" alt="API1" className="w-100 h-80 object-cover rounded" />
               <img src="../src/images/API-front.jpeg" alt="API2" className="w-100 h-80 object-cover rounded" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Book className="text-indigo-600" size={24} />
                <h2 className="text-xl font-bold text-indigo-600">Servicios y Registros</h2>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Configuración de LogIN
                  <img src="../src/images/login.jpeg" alt="Manual de instalación" className="w-100 h-100 object-cover rounded mt-2" />
                </li>
                <li>
                  Verificación de Usuarios
                  <img src="../src/images/Registro-API.jpeg" alt="Guía de configuración" className="w-100 h-100 object-cover rounded mt-2" />
                </li>
                <li>
                  Registro de Ingreso
                  <img src="../src/images/Registro-pet.jpeg" alt="Tutorial de uso básico" className="w-100 h-100 object-cover rounded mt-2" />
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-indigo-600" size={24} />
                <h2 className="text-xl font-bold text-indigo-600">Endpoints y Crontolloers disponibles</h2>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Creacion de Usuraios
                  <img src="../src/images/Controller-back.jpeg" alt="Documentación de la API" className="w-100 h-100 object-cover rounded mt-2" />
                </li>
                <li>
                  Registro de Mascotas
                  <img src="../src/images/Controller2.jpeg" alt="Ejemplos de código" className="w-100 h-100 object-cover rounded mt-2" />
                </li>
                <li>
                  Almacenamiento de datos de los Sensores
                  <img src="../src/images/Service-back.jpeg" alt="Guías de contribución" className="w-100 h-100 object-cover rounded mt-2" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentacion;
