import React from 'react';
import Button from '../common/Button';
import heroBg from '../../assets/images/Fondo.webp'; // Ajusta esta ruta si está en otro lugar

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative pt-16 text-white"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Capa de superposición oscura */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 via-blue-700/70 to-indigo-800/70 z-0" />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Conectividad de Alta Velocidad
          <span className="block text-blue-200">para tu Hogar y Empresa</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Internet fibra óptica + servicios técnicos especializados en Bolivia
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            size="large"
            onClick={() => scrollToSection('contact')}
            className="bg-white text-blue-600 hover:bg-blue-50"
          >
            Solicita tu Instalación Gratuita
          </Button>
          <Button
            variant="secondary"
            size="large"
            onClick={() => scrollToSection('pricing')}
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600"
          >
            Ver Planes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
