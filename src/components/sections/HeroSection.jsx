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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/40 via-blue-500/40 to-indigo-400/40 z-0" />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Conectividad de Alta Velocidad
          <span className="block text-brand/90">para tu Hogar y Empresa</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-black max-w-3xl mx-auto">
          Internet fibra óptica + servicios técnicos especializados en Bolivia
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            size="large"
            onClick={() => scrollToSection('contact')}
            className="bg-brand text-border-600 hover:bg-border hover:text-white"
          >
            Solicita tu Instalación Gratuita
          </Button>
          <Button
            variant="secondary"
            size="large"
            onClick={() => scrollToSection('pricing')}
            className="border-2 border-border text-border hover:bg-border hover:text-white"
          >
            Ver Planes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
