import React from 'react';
import { Check } from 'lucide-react';
import Card from '../common/Card';
import { services } from '../../data/services';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones completas de conectividad y soporte técnico
          </p>
        </div>

        {/* Renderiza cada servicio desde el arreglo `services` en una tarjeta */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              {/* Icono del servicio */}
              <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-brand" />
              </div>

              {/* Título del servicio */}
              <h3 className="text-xl font-semibold text-brand mb-3">
                {service.title}
              </h3>

              {/* Descripción corta */}
              <p className="text-gray-700 mb-4">
                {service.description}
              </p>

              {/* Lista de características */}
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-brand/80"
                  >
                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
