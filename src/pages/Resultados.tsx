import React from 'react';
import { BarChart } from 'lucide-react';

const Resultados = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">Resultados</h1>
        {/* Bloque de Resultados Actuales */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6" style={{ textAlign: "justify" }}>
          <p className="mb-4"><strong>Resultados Actuales:</strong></p>
          <p className="mb-4">
            <strong>Evaluación Técnica:</strong> La aplicación ha mostrado un rendimiento sólido en términos de velocidad de transferencia de datos y precisión. Sin embargo, se han identificado áreas de mejora en usabilidad y satisfacción, especialmente en la interacción real con la aplicación.
          </p>
          <p className="mb-4">
            <strong>Evaluación de Veterinarios:</strong> Los profesionales han valorado positivamente la facilidad de uso y la utilidad percibida de la aplicación. No obstante, se han señalado oportunidades para mejorar la funcionalidad y la personalización de la interfaz para adaptarse mejor a las necesidades específicas de las clínicas veterinarias.
          </p>
        </div>

        {/* Sección: Imagen 1 */}
        <div className="flex justify-center mt-6">
          <img
            src="../src/images/grafica.png"
            alt="Imagen 1"
            className="w-full max-w-3xl rounded-lg shadow-md"
          />
        </div>

        {/* Sección de Métricas Clave */}
        <div className="bg-white p-6 rounded-lg shadow-md my-6">
          <div className="flex items-center gap-3 mb-4">
            <BarChart className="text-indigo-600" size={24} />
            <h2 className="text-2xl font-bold text-indigo-600">Métricas Clave</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-indigo-50 rounded-lg">
              <p className="text-4xl font-bold text-indigo-600">81%</p>
              <p className="text-gray-700">Satisfacción del Cliente</p>
            </div>
            <div className="p-4 bg-indigo-50 rounded-lg">
              <p className="text-4xl font-bold text-indigo-600">+85%</p>
              <p className="text-gray-700">Mejora en Eficiencia</p>
            </div>
            <div className="p-4 bg-indigo-50 rounded-lg">
              <p className="text-4xl font-bold text-indigo-600">-25%</p>
              <p className="text-gray-700">Reducción de Costos</p>
            </div>
          </div>
        </div>

        {/* Sección: Mejoras a Considerar */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex items-center gap-3 mb-4">
            <BarChart className="text-indigo-600" size={24} />
            <h2 className="text-2xl font-bold text-indigo-600">Mejoras a Considerar</h2>
          </div>
          <ul className="list-disc pl-5">
            <li className="mb-2">
              <strong>Optimización de la Usabilidad:</strong> Simplificar la interfaz y mejorar la navegación para facilitar su uso durante las consultas y tratamientos.
            </li>
            <li className="mb-2">
              <strong>Integración con Otros Sistemas:</strong> Desarrollar capacidades para integrarse con software de gestión clínica existente, permitiendo una gestión de datos más eficiente y centralizada.
            </li>
            <li className="mb-2">
              <strong>Personalización de la Interfaz:</strong> Ofrecer opciones de personalización que permitan a las clínicas adaptar la aplicación a sus procesos y preferencias específicas.
            </li>
            <li className="mb-2">
              <strong>Mejoras en la Seguridad de los Datos:</strong> Implementar protocolos de seguridad más robustos para proteger la información sensible de los pacientes y cumplir con las normativas vigentes.
            </li>
            <li>
              <strong>Soporte Multiplataforma:</strong> Ampliar la compatibilidad de la aplicación a diferentes dispositivos y sistemas operativos para facilitar su adopción en diversas clínicas.
            </li>
          </ul>
        </div>

        {/* Sección: Imagen 2 */}
        <div className="flex justify-center mt-6">
          <img
            src="../src/images/1.png"
            alt="Imagen 2"
            className="w-full max-w-3xl rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Resultados;
