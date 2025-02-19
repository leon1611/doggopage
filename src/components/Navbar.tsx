import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import {
  Book,
  Users,
  FileText,
  LineChart,
  Home,
  Lightbulb,
  ClipboardList
} from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-[#483D8B] text-white p-4 fixed w-full top-0 z-50 h-32">
      <div className="container mx-auto h-full flex items-center justify-between">
        <RouterNavLink to="/" className="h-full flex items-center gap-2">
          <img
            src="../src/images/página.png"
            alt="Logo"
            className="h-full w-auto object-contain"
          />
        </RouterNavLink>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <CustomNavLink to="/" icon={<Home size={20} />} text="Inicio" />
          <CustomNavLink to="/introduccion" icon={<Book size={20} />} text="Introducción" />
          <CustomNavLink to="/desarrollo" icon={<Lightbulb size={20} />} text="Desarrollo" />
          <CustomNavLink to="/documentacion" icon={<FileText size={20} />} text="Documentación" />
          <CustomNavLink to="/conclusiones" icon={<ClipboardList size={20} />} text="Conclusiones" />
          <CustomNavLink to="/resultados" icon={<LineChart size={20} />} text="Resultados" />
          <CustomNavLink to="/integrantes" icon={<Users size={20} />} text="Integrantes" />

        </div>
      </div>
    </nav>
  );
};

interface CustomNavLinkProps {
  to: string;
  icon: React.ReactNode;
  text: string;
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({ to, icon, text }) => (
  <RouterNavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors bg-transparent ${
        isActive ? "bg-[#6A5ACD]" : "hover:bg-[#6A5ACD]"
      }`
    }
  >
    {icon}
    <span>{text}</span>
  </RouterNavLink>
);

export default Navbar;
