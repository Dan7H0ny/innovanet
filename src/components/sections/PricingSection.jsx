import React from 'react';
import { Check, MessageCircle } from 'lucide-react';
import { plans } from '../../data/pricing';

const PricingSection = () => {
  const enviarWhatsApp = (plan) => {
    const mensaje = `Hola, estoy interesado en el plan *${plan.name}* con velocidad *${plan.speed}* a Bs. ${plan.price}/mes. ¿Podrían brindarme más información?`;
    const numero = '59179899909'; 
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Planes y Precios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elige el plan perfecto para tus necesidades
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-brand transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-brand text-white text-center py-2 font-semibold">
                  Más Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-brand">{plan.speed}</span>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">Bs. {plan.price}</span>
                  <span className="text-gray-600">/mes</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => enviarWhatsApp(plan)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors ${
                    plan.popular
                      ? 'bg-brand text-white hover:bg-brand/80'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  <MessageCircle className="w-5 h-5" />
                  Elegir Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
