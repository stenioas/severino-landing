import React from 'react';
import {
  HeroSection,
  StepsSection,
  ServicesSection,
  FeatureAccordion,
} from './components';

const HomePage: React.FC = () => (
  <>
    <main className="bg-white min-h-screen flex flex-col">
      <HeroSection />
      <StepsSection />
      <ServicesSection />
      <FeatureAccordion />
    </main>
  </>
);

export default HomePage;
