
import React from 'react';
import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import BenefitsSection from './components/sections/BenefitsSection';
import PricingSection from './components/sections/PricingSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import SupportSection from './components/sections/SupportSection';
import ContactSection from './components/sections/ContactSection';

const App = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <PricingSection />
      <TestimonialsSection />
      <SupportSection />
      <ContactSection />
    </Layout>
  );
};

export default App;