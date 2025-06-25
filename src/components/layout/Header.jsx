import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/images/Logo.webp'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Inicio' },
    { id: 'services', label: 'Servicios' },
    { id: 'pricing', label: 'Planes' },
    { id: 'testimonials', label: 'Testimonios' },
    { id: 'contact', label: 'Contacto' }
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src={logo} alt="Logo INNOVANET" className="h-16 w-auto" />
            </div>
          </div>
          
          {/* Navegacion de computadora */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="bg-bg text-white border hover:bg-brand hover:text-white px-4 py-2 text-sm font-semibold uppercase rounded transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          {/* boton de menu movil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-bg text-white border hover:bg-brand hover:text-white px-4 py-2 text-sm font-semibold uppercase rounded transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu movil */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="bg-bg text-white border hover:bg-brand hover:text-white px-4 py-2 text-sm font-semibold uppercase rounded transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;