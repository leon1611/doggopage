import React from 'react';

const Desarrollo = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">Desarrollo</h1>
        <div className="grid gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Metodología</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Para este proyecto se compararon diferentes métodos previamente utilizados por los investigadores para obtener los mejores resultados, e incluyeron nuevas metodologías con el fin de seguir el proceso más eficaz y lograr conclusiones reales.
              Tomando en cuenta el tipo de aplicación móvil y el alcance deseado, se tomaron como referencia las metodologías aplicativa y descriptiva.
              Asimismo, se consideraron enfoques ágiles como Scrum, React, Springboot,Trello y Mobil D para optimizar recursos, mejorar la productividad y asegurar la calidad del software mediante pruebas continuas, fomentando la colaboración y la retroalimentación del usuario.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Fases del Proyecto</h2>
            
           {/* Resumen distribuido en cada fase */}
<div className="space-y-4">
  <div className="border-l-4 border-indigo-600 pl-4">
    <h3 className="text-lg font-semibold text-indigo-600">Fase 1: Investigación</h3>
    <p className="text-gray-700">Análisis de requisitos y viabilidad</p>
    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2">
      <li>Adopta metodologías ágiles (Scrum u otras) para flexibilidad y eficiencia.</li>
      <li>Define fases de desarrollo con entregas incrementales.</li>
    </ul>
  </div>

  <div className="border-l-4 border-indigo-600 pl-4">
    <h3 className="text-lg font-semibold text-indigo-600">Fase 2: Diseño</h3>
    <p className="text-gray-700">Arquitectura de la solución y prototipos</p>
    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2">
      <li>Asegura la calidad con pruebas continuas.</li>
      <li>Promueve la colaboración con roles claros y comunicación constante.</li>
    </ul>
  </div>

  <div className="border-l-4 border-indigo-600 pl-4">
    <h3 className="text-lg font-semibold text-indigo-600">Fase 3: Implementación</h3>
    <p className="text-gray-700">Desarrollo y pruebas de la solución</p>
    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2">
      <li>Optimiza el flujo de trabajo con herramientas como Trello, GitHub.</li>
      <li>Incluye retroalimentación del usuario en cada iteración.</li>
      <li>Garantiza compatibilidad y escalabilidad en múltiples dispositivos.</li>
    </ul>
  </div>
</div>

            {/* Imagen agregada */}
            <div className="mt-6">
              <img
                src="../src/images/Imagen 1.png"  
                alt="Descripción de la imagen"
                className="w-full h-auto rounded-md shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desarrollo;
