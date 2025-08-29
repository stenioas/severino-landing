import { getAssetUrl } from '../../../utils/getAssetUrl';

import './OurServicesSection.css';

const ourServicesData = [
  {
    label: 'Chaveiro',
    icon: getAssetUrl('/svg/key.svg'),
  },
  {
    label: 'Coberturas e fachadas',
    icon: getAssetUrl('/svg/home_work.svg'),
  },
  {
    label: 'Decoração',
    icon: getAssetUrl('/svg/table_lamp.svg'),
  },
  {
    label: 'Elétrica',
    icon: getAssetUrl('/svg/electrical_services.svg'),
  },
  {
    label: 'Hidráulica',
    icon: getAssetUrl('/svg/shower.svg'),
  },
  {
    label: 'Instalação de telas',
    icon: getAssetUrl('/svg/curtains.svg'),
  },
  {
    label: 'Jardinagem',
    icon: getAssetUrl('/svg/potted_plant.svg'),
  },
  {
    label: 'limpeza pós-obra',
    icon: getAssetUrl('/svg/garden_cart.svg'),
  },
  {
    label: 'Pequenos reparos',
    icon: getAssetUrl('/svg/engineering_gears.svg'),
  },
  {
    label: 'Pintura',
    icon: getAssetUrl('/svg/format_paint.svg'),
  },
  {
    label: 'Vidraçaria',
    icon: getAssetUrl('/svg/window.svg'),
  },
  {
    label: 'Serviços gerais',
    icon: getAssetUrl('/svg/cleaning_services.svg'),
  },
  {
    label: 'Serviços domésticos',
    icon: getAssetUrl('/svg/vacuum.svg'),
  },
  {
    label: 'Serviços de marcenaria',
    icon: getAssetUrl('/svg/carpenter.svg'),
  },
  {
    label: 'Mais serviços em breve',
    icon: getAssetUrl('/svg/add_circle.svg'),
  },
];

const ServiceCard = (label: string, icon: string) => {
  return (
    <div
      className={`our-services-section__card ${label === 'Mais serviços em breve' ? 'our-services-section__card-active' : ''}`}
    >
      <img
        src={icon}
        alt={label}
        className="our-services-section__card-icon"
      />
      <p
        className={`our-services-section__card-label ${label === 'Mais serviços em breve' ? 'our-services-section__card-label-active' : ''}`}
      >
        {label}
      </p>
    </div>
  );
};

const OurServicesSection = () => {
  return (
    <section aria-label="Nossos serviços" className="our-services-section">
      <h2 className="our-services-section__title">Nossos serviços</h2>
      <p className="our-services-section__description">
        No Severino App, cada serviço disponível foi pensado para facilitar o
        seu dia a dia com agilidade, confiança e qualidade. Reunimos
        profissionais experientes e preparados para atender às suas
        necessidades, seja em casa, no trabalho ou onde quiser.
      </p>
      <div className="our-services-section__card-container">
        <h3 className="our-services-section__subtitle">
          Serviços disponíveis no momento
        </h3>
        <div className="our-services-section__cards">
          {ourServicesData.map((item) => ServiceCard(item.label, item.icon))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
