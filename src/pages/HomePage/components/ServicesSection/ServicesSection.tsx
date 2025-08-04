import React from 'react';

import './ServiceSection.css';
import IdealService from './components/IdealService/IdealService';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import ProfessionalEfficiency from './components/ProfessionalEfficiency/ProfessionalEfficiency';

const ServicesSection: React.FC = () => (
  <section className="services-section" aria-label="Cada detalhe é importante">
    <h2 className="services-section__title">
      {'Cada detalhe é importante'.toUpperCase()}
    </h2>
    <p className="services-section__description">
      Mais que "Pau pra toda obra"
      <br />
      somos eficiência e resultado
    </p>
    <div className="services-section__content_wrapper">
      <div className="services-section__content_left">
        <WhyChooseUs />
        <IdealService />
      </div>
      <ProfessionalEfficiency />
    </div>
  </section>
);

export default ServicesSection;
