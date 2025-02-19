import React from 'react';

const Integrantes = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">Integrantes del Equipo</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl text-indigo-600">DP</span>
              </div>
              <h2 className="text-xl font-bold text-indigo-600">Diego Pulgarin</h2>
              <p className="text-gray-600">Integrante 1</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl text-indigo-600">JC</span>
              </div>
              <h2 className="text-xl font-bold text-indigo-600">Jonnathan Cadme</h2>
              <p className="text-gray-600">Integrante 2</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl text-indigo-600">LL</span>
              </div>
              <h2 className="text-xl font-bold text-indigo-600">Leonardo Lituma</h2>
              <p className="text-gray-600">Integrante 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrantes;