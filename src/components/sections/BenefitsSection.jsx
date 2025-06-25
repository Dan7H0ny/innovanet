import React from 'react';
import { Zap, Shield, Headphones, Gift, Cpu, DollarSign, TrendingUp, Users } from 'lucide-react';
import { MAIN_BENEFITS, COMPANY_STATS } from '../../utils/constants';

const iconMap = {
  Zap,
  Shield,
  Headphones,
  Gift,
  Cpu,
  DollarSign,
  TrendingUp,
  Users
};

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Por Qué Elegir INNOVANET?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre las ventajas que nos convierten en la mejor opción para tu conectividad
          </p>
        </div>

        {/* Estadísticas principales */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {COMPANY_STATS.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Grid de beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MAIN_BENEFITS.map((benefit) => {
            const IconComponent = iconMap[benefit.icon];

            return (
              <div 
                key={benefit.id} 
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-brand/10 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-brand" />
                </div>

                <h3 className="text-xl font-semibold text-brand mb-3">
                  {benefit.title}
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Sección adicional con beneficios destacados */}
        <div className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Conectividad de Nueva Generación
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                En INNOVANET no solo ofrecemos internet, creamos experiencias digitales 
                excepcionales que impulsan el crecimiento de tu negocio o mejoran tu vida digital.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Tecnología Fiber Óptica", desc: "La conexión más estable y rápida disponible" },
                  { title: "Red Redundante", desc: "Múltiples rutas para garantizar continuidad" },
                  { title: "Equipos Premium", desc: "Hardware de última generación incluido" },
                ].map(({title, desc}, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{title}</h4>
                      <p className="text-gray-600">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-brand to-purple-600 rounded-2xl p-8 text-white">
                <div className="h-full flex flex-col justify-center items-center text-center">
                  <TrendingUp className="w-20 h-20 mb-6 opacity-80" />
                  <h4 className="text-2xl font-bold mb-4">Crecimiento Garantizado</h4>
                  <p className="text-blue-100">
                    Tu velocidad de internet puede crecer junto con tus necesidades
                  </p>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-400 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
