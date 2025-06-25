import React from 'react';
import { Check } from 'lucide-react';
import { SUPPORT_TYPES } from '../../utils/constants';

const SupportSection = () => {
  const faqs = SUPPORT_TYPES;

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Centro de Soporte
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Preguntas frecuentes y recursos de ayuda
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm mb-4">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={scrollToContact}
            className="bg-brand text-white font-semibold py-3 px-8 rounded-lg hover:bg-brand/80 transition-colors"
          >
            Contactar Soporte Técnico
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
