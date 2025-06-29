import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    services: [
      'Internet Fibra Óptica',
      'Mantenimiento',
      'Soporte Técnico',
      'Instalaciones'
    ],
    company: [
      'Sobre Nosotros',
      'Testimonios',
      'Carreras',
      'Noticias'
    ],
    legal: [
      'Términos y Condiciones',
      'Política de Privacidad',
      'Política de Cookies',
      'Aviso Legal'
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Informacion de la compañia*/}
          <div>
            <h3 className="text-2xl font-bold text-brand mb-4">INNOVANET</h3>
            <p className="text-gray-300 mb-4">
              La mejor conectividad para Bolivia. Internet de alta velocidad y soporte técnico especializado.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-brand rounded-full flex items-center justify-center cursor-pointer hover:bg-border transition-colors"
              >
                <span className="text-white text-sm font-bold">f</span>
              </a>

              <a
                href="https://mail.google.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-brand rounded-full flex items-center justify-center cursor-pointer hover:bg-border transition-colors"
              >
                <span className="text-white text-sm font-bold">@</span>
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-brand rounded-full flex items-center justify-center cursor-pointer hover:bg-border transition-colors"
              >
                <span className="text-white text-sm font-bold">in</span>
              </a>
            </div>
          </div>
          
          {/* Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              {footerSections.services.map((service, index) => (
                <li key={index} className="hover:text-white cursor-pointer transition-colors">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-300">
              {footerSections.company.map((item, index) => (
                <li key={index} className="hover:text-white cursor-pointer transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              {footerSections.legal.map((item, index) => (
                <li key={index} className="hover:text-white cursor-pointer transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} INNOVANET. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;