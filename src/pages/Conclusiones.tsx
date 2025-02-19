import React from 'react';

const Conclusiones = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">Conclusiones</h1>
        <div className="grid gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Logros Alcanzados</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                A través de este proyecto, hemos logrado importantes avances en el desarrollo
                de soluciones tecnológicas innovadoras. Los resultados obtenidos demuestran
                la efectividad de nuestra metodología y enfoque.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <img src="../src/images/usuario.jpeg" alt="Logro 1" className="rounded-lg shadow-md" />
                <img src="../src/images/mascota.jpeg" alt="Logro 2" className="rounded-lg shadow-md" />
                <img src="../src/images/da.jpeg" alt="Logro 3" className="rounded-lg shadow-md" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Aprendizajes Clave</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-2"></span>
                <p className="text-gray-700">Importancia de la planificación detallada</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-2"></span>
                <p className="text-gray-700">Valor del trabajo en equipo coordinado</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-2"></span>
                <p className="text-gray-700">Beneficios de la metodología ágil</p>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Conclusiones del Proyecto</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-2"></span>
                <p className="text-gray-700">Nuestra app mejora la gestión de datos y la comunicación en medicina veterinaria, optimizando el flujo de trabajo.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-2"></span>
                <p className="text-gray-700">La app es fácil de usar y permite el acceso a datos en tiempo real, facilitando decisiones rápidas y precisas.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-2"></span>
                <p className="text-gray-700">Las pruebas con veterinarios destacan su usabilidad, aunque se pueden hacer ajustes para mejorar aún más la interacción.</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-2"></span>
                <p className="text-gray-700">La app es bien valorada por su funcionalidad, pero con algunas mejoras en integración y personalización, su uso sería aún más eficiente.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conclusiones;
