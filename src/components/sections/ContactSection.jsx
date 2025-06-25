import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import Swal from 'sweetalert2';

const ContactSection = () => {
  // Manejador del formulario que muestra un mensaje de éxito y limpia los campos
  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: 'success',
      title: '¡Mensaje enviado!',
      text: 'Nos pondremos en contacto contigo pronto.',
      confirmButtonColor: '#0cad97', 
    });

    e.target.reset(); // Limpia los campos del formulario
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y descripción central */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Solicita información o agenda tu instalación gratuita
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Sección de información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                {/* Datos de contacto con íconos */}
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-brand mr-3" />
                  <span className="text-gray-700">+591 79899909</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-brand mr-3" />
                  <span className="text-gray-700">info@innovanet.bo</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-brand mr-3" />
                  <span className="text-gray-700">Av. Heroínas 123, Cochabamba, Bolivia</span>
                </div>
              </div>
            </div>

            {/* Horarios de atención */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Horarios de Atención</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Lunes a Viernes:</strong> 8:00 AM - 7:00 PM</p>
                <p><strong>Sábados:</strong> 9:00 AM - 5:00 PM</p>
                <p><strong>Domingos:</strong> 10:00 AM - 2:00 PM</p>
                <p className="text-green-600 font-semibold">Soporte técnico: 24/7</p>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Campos del formulario con estilos y validación */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                placeholder="Cuéntanos sobre tus necesidades de conectividad..."
              ></textarea>
            </div>
            {/* Botón de envío con icono */}
            <button
              type="submit"
              className="w-full bg-brand text-white font-semibold py-3 px-6 rounded-lg hover:bg-brand/80 transition-colors"
            >
              Enviar <ArrowRight className="inline ml-2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
