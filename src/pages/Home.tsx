import React from 'react';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <br /><br /><br />
      <Carousel />
      <div className="container mx-auto px-4 py-8">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-justify">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Nuestro Proyecto</h2>
            <p className="text-gray-700">
              Doggo es una aplicación móvil diseñada para el uso en la medicina veterinaria, 
              cuyo objetivo es mejorar la atención y el monitoreo de perros en tratamiento médico. 
              En Ecuador, aproximadamente el 45% de los hogares tiene al menos un perro, y en ciudades 
              como Cuenca, más del 60% de los propietarios invierten en servicios veterinarios. 
              Esto subraya la necesidad de soluciones tecnológicas que optimicen la salud y el bienestar
              de las mascotas.
            </p>
          </div>
          
          {/* Sección: Objetivos */}
          <div className="bg-white p-6 rounded-lg shadow-md text-justify">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Objetivo General</h2>
            <p className="text-gray-700 mb-4">
              Desarrollar una aplicación móvil que sea capaz de recibir y mostrar datos en tiempo real 
              mediante wifi desde un dispositivo de monitoreo.
            </p>
            <h3 className="text-xl font-bold text-indigo-600 mb-4">Objetivos específicos</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Investigar sobre el uso de aplicaciones móviles en la medicina veterinaria, 
                los logros y las posibilidades.
              </li><br />
              <li>
                Diseñar una aplicación móvil que cumpla con los criterios necesarios para mostrar 
                y almacenar datos en tiempo real desde un dispositivo de monitoreo.
              </li><br />
              <li>
                Comprobar la funcionalidad de la aplicación con el usuario.
              </li><br />
              <li>
                Recopilar los resultados y elaborar conclusiones sobre la percepción de la aplicación 
                por parte de médicos veterinarios.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
