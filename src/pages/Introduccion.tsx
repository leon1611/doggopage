import React from 'react';

const Introduccion = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">Introducción</h1>
        <div className="grid gap-6">
          {/* Sección: Justificación */}
          <div className="bg-white p-4 rounded-lg shadow-md text-justify">
            <div className="flex">
              <img
                src="../src/images/intro1.jpg"
                alt="Imagen de referencia"
                className="w-72 h-auto mr-6 mb-4 rounded-md shadow"
              />
              <div>
                <h2 className="text-2xl font-bold text-indigo-600 mb-4">Justificación</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  En Ecuador, existen alrededor de 3,5 millones de perros, con un 45% de hogares que 
                  posee al menos uno. Cuenca destaca con más del 60% de propietarios invirtiendo en 
                  atención veterinaria, generando una alta demanda de soluciones innovadoras. 
                  Alrededor del 20–30% de los perros en tratamiento requieren monitoreo constante de 
                  signos vitales, mientras un 25% padece enfermedades crónicas que exigen control 
                  frecuente. Muchos de estos seguimientos se realizan manualmente, incrementando el 
                  margen de error y dificultando la respuesta ante cambios súbitos.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Con más de 10 universidades que imparten la carrera de Medicina Veterinaria y 
                  alrededor de 500 profesionales graduados anualmente, se evidencia la necesidad 
                  de herramientas tecnológicas que fortalezcan la labor clínica. Ante este escenario, 
                  Doggo integra sensores de pulso y temperatura con una plataforma de datos en tiempo 
                  real, facilitando decisiones oportunas y reduciendo riesgos en la salud canina. 
                  Gracias a la gran cantidad de perros en áreas urbanas como Cuenca y la preferencia por 
                  servicios de calidad, Doggo ayuda a agilizar la labor veterinaria y promueve el bienestar 
                  animal, satisfaciendo la demanda de un público cada vez más comprometido con la salud 
                  de sus mascotas.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-justify">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">Diagrama de Desarollo</h2>
          </div>
          {/* Sección: Imagen Centrada */}
          <div className="bg-white p-6 rounded-lg shadow-md flex justify-center">
            <img
              src="../src/images/Imagen2.png"  
              alt="Imagen centrada"
              className="w-full max-w-md rounded-md shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduccion;
