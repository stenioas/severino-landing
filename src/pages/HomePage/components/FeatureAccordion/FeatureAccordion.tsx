import { useState, useEffect } from 'react';
import { Accordion, AccordionItem, Selection } from '@heroui/react';

import './FeatureAccordion.css';
import { ChevronRightIcon, ChevronDownIcon } from '../../../../icons';
import { getAssetUrl } from '../../../../utils/getAssetUrl';

const features = [
  {
    title: 'Chegamos pra descomplicar',
    content:
      'Com o Severino App, você encontra profissionais de confiança, escolhe o serviço que precisa e resolve tudo de forma prática, sem complicação.',
    img: '/img/1_came_to_simplify.png',
  },
  {
    title: 'Escolha um serviço ou profissional',
    content:
      'Chuveiro queimou? Luz piscando? Tomada sem funcionar? Problemas elétricos não podem esperar e nem sempre dá pra confiar em qualquer um.',
    img: '/img/2_our_services.png',
  },
  {
    title: 'Os melhores serviços para atuar',
    content:
      'Selecionamos os serviços mais procurados e bem avaliados da plataforma para você atuar com frequência e garantir bons ganhos.',
    img: '/img/3_choose_service.png',
  },
  {
    title: 'Saiba os detalhes antes de contratar',
    content:
      'Desde o início, você vê quem está por trás do serviço: perfil, avaliações e experiência. Contrate com confiança e segurança.',
    img: '/img/4_details_before_hiring.png',
  },
  {
    title: 'Valores dos serviços em tempo real',
    content:
      'Você acompanha os valores atualizados dos serviços em tempo real, direto na plataforma. Clareza e controle para tomar a melhor decisão.',
    img: '/img/5_last_services_total.png',
  },
];

const FeatureAccordion: React.FC = () => {
  // Pré-carregar imagens ao montar o componente
  useEffect(() => {
    features.forEach((feature) => {
      const img = new window.Image();
      img.src = getAssetUrl(feature.img);
    });
  }, []);

  const [selectedKeys, setSelectedKeys] = useState(new Set(['1']));

  const handleSelectionChange = (keys: Selection) => {
    setSelectedKeys(keys as Set<string>);
  };

  return (
    <section
      style={{
        width: '100%',
        maxWidth: '1280px',
        margin: '5rem auto 0',
        padding: '0 0.75rem',
        fontFamily: '"Open Sans", sans-serif',
      }}
      aria-label="Funcionalidades para transformar sua experiência"
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
        {'Projetado para simplificar'.toUpperCase()}
      </h2>
      <h3
        style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          letterSpacing: '-0.0625rem',
          color: '#1C1C1C',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        Cada funcionalidade para transformar sua experiência
      </h3>
      <Accordion
        variant="splitted"
        isCompact
        selectedKeys={selectedKeys}
        onSelectionChange={handleSelectionChange}
        defaultExpandedKeys={['1']}
        itemClasses={{
          trigger: 'featureaccordion--trigger',
          indicator: 'featureaccordion--indicator',
        }}
        style={{
          marginTop: '3.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          padding: 0,
        }}
      >
        {features.map((feature, idx) => (
          <AccordionItem
            classNames={{
              base: `featureaccordion--base ${selectedKeys.has((idx + 1).toString()) ? 'open' : ''}`,
              content: 'featureaccordion--content',
              title: `featureaccordion--title ${selectedKeys.has((idx + 1).toString()) ? 'open' : ''}`,
            }}
            key={idx + 1}
            title={feature.title}
            startContent={
              <div
                className={`featureaccordion--startcontent ${selectedKeys.has((idx + 1).toString()) ? 'open' : ''}`}
              >
                {idx + 1}
              </div>
            }
            indicator={({ isOpen }) =>
              isOpen ? (
                <ChevronRightIcon size={16} color="#000000" />
              ) : (
                <ChevronDownIcon size={16} color="#000000" />
              )
            }
            aria-expanded={selectedKeys.has((idx + 1).toString())}
            aria-controls={`feature-panel-${idx}`}
            style={{
              boxShadow: 'none',
              backgroundColor: selectedKeys.has((idx + 1).toString())
                ? '#FAFAFA'
                : '#FFFFFF',
              borderRadius: '10px',
              fontSize: '1rem',
              fontWeight: '600',
              color: '#1C1C1C',
            }}
          >
            <div
              id={`feature-panel-${idx}`}
              role="region"
              aria-labelledby={`feature-title-${idx}`}
            >
              {feature.content}
              <img
                src={getAssetUrl(feature.img)}
                style={{
                  width: '328px',
                  marginTop: '1.25rem',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FeatureAccordion;
