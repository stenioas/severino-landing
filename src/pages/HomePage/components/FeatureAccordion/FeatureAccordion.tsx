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
  const [lastSelectedIdx, setLastSelectedIdx] = useState(1);

  const handleSelectionChange = (keys: Selection) => {
    setSelectedKeys(keys as Set<string>);
    // Se houver algum selecionado, atualiza o último selecionado
    const arr = Array.from(keys as Set<string>);
    if (arr.length > 0) {
      setLastSelectedIdx(Number(arr[arr.length - 1]));
    }
    console.log('Selected keys:', keys);
  };

  return (
    <section
      className="featureaccordion-section"
      aria-label="Cada funcionalidade para transformar sua experiência"
    >
      <h2 className="featureaccordion-section__title">
        {'Projetado para simplificar'.toUpperCase()}
      </h2>
      <h3 className="featureaccordion-section__subtitle">
        Cada funcionalidade para
        <br /> transformar sua experiência
      </h3>
      <div className="featureaccordion-section__content_wrapper">
        {features.map((feature, idx) => {
          // Se houver algum selecionado, mostra a imagem correspondente; se não, mostra a última selecionada
          const isOpen =
            selectedKeys.size > 0
              ? selectedKeys.has((idx + 1).toString())
              : lastSelectedIdx === idx + 1;
          return (
            <div
              key={idx}
              className={`featureaccordion-section__content_img_wrapper ${isOpen ? 'open' : ''}`}
            >
              <img
                src={getAssetUrl(feature.img)}
                className="featureaccordion-section__content_img"
              />
            </div>
          );
        })}
        <Accordion
          variant="splitted"
          isCompact
          selectedKeys={selectedKeys}
          onSelectionChange={handleSelectionChange}
          defaultExpandedKeys={['1']}
          itemClasses={{
            trigger: 'featureaccordion-section__children_accordion_trigger',
            indicator: 'featureaccordion--indicator',
          }}
          className="featureaccordion-section__parent_accordion"
        >
          {features.map((feature, idx) => (
            <AccordionItem
              classNames={{
                base: `featureaccordion-section__children_accordion_base ${selectedKeys.has((idx + 1).toString()) ? 'open' : ''}`,
                content:
                  'featureaccordion-section__children_accordion_content',
                title: `featureaccordion-section__children_accordion_title ${selectedKeys.has((idx + 1).toString()) ? 'open' : ''}`,
              }}
              key={idx + 1}
              title={feature.title}
              startContent={
                <div
                  className={`featureaccordion-section__children_accordion_startcontent ${selectedKeys.has((idx + 1).toString()) ? 'open' : ''}`}
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
            >
              <div
                id={`feature-panel-${idx}`}
                role="region"
                aria-labelledby={`feature-title-${idx}`}
              >
                {feature.content}
                <img
                  src={getAssetUrl(feature.img)}
                  className="featureaccordion-section__children_accordion_img"
                />
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FeatureAccordion;
