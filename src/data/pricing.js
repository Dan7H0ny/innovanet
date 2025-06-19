// src/data/pricing.js
export const plans = [
  {
    id: 1,
    name: "Básico",
    speed: "100 Mbps",
    price: "250",
    features: [
      "Velocidad simétrica",
      "Sin límite de datos",
      "Instalación gratuita",
      "Soporte 24/7"
    ],
    popular: false,
    description: "Perfecto para hogares pequeños"
  },
  {
    id: 2,
    name: "Premium",
    speed: "500 Mbps",
    price: "450",
    features: [
      "Velocidad simétrica",
      "Sin límite de datos",
      "Instalación gratuita",
      "Soporte 24/7",
      "WiFi 6 incluido"
    ],
    popular: true,
    description: "Ideal para familias numerosas"
  },
  {
    id: 3,
    name: "Empresarial",
    speed: "1000 Mbps",
    price: "800",
    features: [
      "Velocidad simétrica",
      "Sin límite de datos",
      "Instalación gratuita",
      "Soporte 24/7",
      "IP estática",
      "Seguridad avanzada"
    ],
    popular: false,
    description: "Para empresas y oficinas"
  }
];

export const coverage = [
  {
    id: 1,
    city: "Cochabamba",
    zones: ["Centro", "Norte", "Sur", "Este", "Oeste"],
    availability: "100%"
  },
  {
    id: 2,
    city: "La Paz",
    zones: ["Centro", "Zona Sur", "El Alto"],
    availability: "95%"
  },
  {
    id: 3,
    city: "Santa Cruz",
    zones: ["Equipetrol", "Centro", "Plan 3000"],
    availability: "90%"
  },
  {
    id: 4,
    city: "Sucre",
    zones: ["Centro", "Norte"],
    availability: "85%"
  },
  {
    id: 5,
    city: "Tarija",
    zones: ["Centro", "San Luis"],
    availability: "80%"
  }
];