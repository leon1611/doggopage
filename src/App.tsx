import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Introduccion from './pages/Introduccion';
import Desarrollo from './pages/Desarrollo';
import Conclusiones from './pages/Conclusiones';
import Integrantes from './pages/Integrantes';
import Documentacion from './pages/Documentacion';
import Resultados from './pages/Resultados';

function App() {
  return (
    <Router>
      <Navbar /> <br /><br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduccion" element={<Introduccion />} />
        <Route path="/desarrollo" element={<Desarrollo />} />
        <Route path="/conclusiones" element={<Conclusiones />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/documentacion" element={<Documentacion />} />
        <Route path="/resultados" element={<Resultados />} />
      </Routes>
    </Router>
  );
}

export default App;