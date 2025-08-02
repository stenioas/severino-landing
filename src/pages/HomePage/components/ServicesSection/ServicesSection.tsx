import React from 'react';
import { Button, Card, CardFooter } from '@heroui/react';
import Lottie from 'lottie-react';

import animation from '../../../../animations/choose_service_animation.json';
import './ServiceSection.css';
import { getAssetUrl } from '../../../../utils/getAssetUrl';

const whyChooseUsItems = [
  {
    label: 'SEVERINO APP',
    style: {
      background: '#9CF0CD',
      color: '#1C1C1C',
      border: '1.5px solid #9CF0CD',
    },
  },
  {
    label: 'DESIGN MINIMALISTA',
    style: {},
  },
  {
    label: 'MELHOR TECNOLOGIA',
    style: {},
  },
  {
    label: 'EXPERIÊNCIA SIMPLES',
    style: {},
  },

  {
    label: 'SEGURANÇA NO USO',
    style: {},
  },
  {
    label: 'DIVERSOS SERVIÇOS',
    style: {},
  },
];

const WhyChooseUs = () => (
  <div
    style={{
      background: '#3B6F75',
      borderRadius: '1rem',
      padding: '1.75rem 0.875rem 2.25rem 0.875rem',
      maxWidth: '304px',
      margin: '0 auto',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    }}
  >
    <h3
      style={{
        fontWeight: 600,
        fontSize: '1.25rem',
        color: '#fff',
      }}
    >
      Porque escolher a gente?
    </h3>
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginTop: '1.25rem',
      }}
    >
      {whyChooseUsItems.map((item) => (
        <span
          key={item.label}
          className="servicesection--tag"
          style={{
            padding: '0.1875rem 0.6875rem',
            borderRadius: '999px',
            fontSize: '0.75rem',
            lineHeight: '1.625rem',
            fontWeight: 400,
            letterSpacing: '-1px',
            textAlign: 'center',
            verticalAlign: 'middle',
            textTransform: 'uppercase',
            ...item.style,
          }}
        >
          {item.label}
        </span>
      ))}
    </div>
  </div>
);

const IdealService = () => (
  <Card
    style={{
      position: 'relative',
      borderRadius: '1rem',
      padding: '1.75rem 0.875rem 1rem 0.875rem',
      width: '304px',
      minHeight: '226px',
      margin: '0 auto',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    }}
  >
    <img
      src={getAssetUrl('/img/firefly_black_woman.png')}
      alt="Firefly Black Woman"
      style={{
        position: 'absolute',
        borderRadius: '1rem',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: 1,
      }}
    />
    {/* Gradiente sobre a imagem */}
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '1rem',
        background:
          'linear-gradient(135deg, #3d3d3d -23.51%, rgba(10, 10, 10, 0.627198) 22.7%, rgba(0, 0, 0, 0) 57.6%)',
        zIndex: 2,
        pointerEvents: 'none',
      }}
    />
    <h3
      style={{
        fontWeight: 600,
        fontSize: '1.25rem',
        color: '#fff',
        zIndex: 3,
      }}
    >
      Encontre o serviço
      <br /> ideal para você
    </h3>
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <CardFooter
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '9.125rem',
          height: '2.125rem',
          borderRadius: '1rem',
          zIndex: 2,
          backdropFilter: 'blur(3px) saturate(1.5)',
          WebkitBackdropFilter: 'blur(3px) saturate(1.5)',
          backgroundColor: 'rgb(10, 10, 10, 0.38)',
        }}
      >
        <Animation />
      </CardFooter>
    </div>
  </Card>
);

const ProfessionalEfficiency = () => (
  <div
    style={{
      position: 'relative',
      borderRadius: '1rem',
      padding: '1.75rem 0.875rem 2.25rem 0.875rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      minWidth: '304px',
      minHeight: '470px',
      background: '#fff',
      boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
      border: '1px solid #f3f4f6',
    }}
    role="listitem"
  >
    <img
      src={getAssetUrl('/img/professional_painter.png')}
      alt="Profissional de pintura"
      style={{
        position: 'absolute',
        borderRadius: '1rem',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: 1,
      }}
    />
    {/* Gradiente sobre a imagem */}
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '1rem',
        background:
          'linear-gradient(180deg, #000000 -46.57%, rgba(0, 0, 0, 0.5) 23.59%, rgba(0, 0, 0, 0) 91.13%)',
        zIndex: 2,
        pointerEvents: 'none',
      }}
    />
    <h3
      style={{
        fontWeight: 600,
        fontSize: '1.25rem',
        letterSpacing: '-0.0625rem',
        color: '#fff',
        zIndex: 3,
      }}
    >
      Eficiência profissional é o que buscamos em cada Prestador
    </h3>
    <p
      style={{
        fontSize: '0.75rem',
        letterSpacing: '-0.0625rem',
        color: '#fff',
        marginTop: '0.4rem',
        zIndex: 3,
      }}
    >
      Nossos prestadores passam por uma análise de perfil criteriosa antes de
      iniciarem qualquer tipo de serviço.
    </p>
    <Button
      color="primary"
      size="md"
      style={{
        position: 'absolute',
        zIndex: 3,
        bottom: '1.25rem',
        right: '1.25rem',
        backgroundColor: '#ffffff',
        borderRadius: '0.5rem',
        color: '#096C76',
        fontSize: '0.875rem',
      }}
    >
      Mais detalhes
    </Button>
  </div>
);

const Animation = () => (
  <Lottie
    animationData={animation}
    loop={true}
    style={{ position: 'absolute', width: '9.125rem' }}
  />
);

const ServicesSection: React.FC = () => (
  <section
    style={{
      width: '100%',
      maxWidth: '1280px',
      margin: '5rem auto 0',
      fontFamily: '"Open Sans", sans-serif',
    }}
    aria-label="Encontre o serviço ideal para você"
  >
    <h2
      style={{
        fontSize: '0.875rem',
        fontWeight: '600',
        letterSpacing: '-0.025rem',
        color: '#096C76',
        textAlign: 'center',
      }}
    >
      {'Cada detalhe é importante'.toUpperCase()}
    </h2>
    <p
      style={{
        fontSize: '1.5rem',
        fontWeight: '600',
        letterSpacing: '-0.0625rem',
        color: '#1C1C1C',
        textAlign: 'center',
        marginTop: '1rem',
      }}
    >
      Mais que "Pau pra toda obra" somos eficiência e resultado
    </p>
    <div
      style={{
        marginTop: '3.5rem',
        display: 'flex',
        gap: '1.125rem',
        overflowX: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        padding: '0 1rem',
      }}
    >
      <div
        style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}
      >
        <WhyChooseUs />
        <IdealService />
      </div>
      <ProfessionalEfficiency />
    </div>
  </section>
);

export default ServicesSection;
