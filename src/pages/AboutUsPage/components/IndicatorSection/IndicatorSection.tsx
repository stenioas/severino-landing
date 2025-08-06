import React from 'react';

import './IndicatorSection.css';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from '@heroui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '../../../../icons';

const indicators = [
  {
    title: 'Ampla presença',
    value: '69',
    description:
      'das empresas e prestadores de serviços estão presentes nos municípios brasileiros, com concentração em áreas urbanas',
    source: 'IBGE',
    unit: '%',
  },
  {
    title: 'Demanda contínua',
    value: '80',
    description:
      'das residências e edifícios precisam de algum tipo de manutenção ou pequeno reparo pelo menos uma vez ao ano',
    source: 'ABNT',
    unit: '%',
  },
  {
    title: 'Crescimento no setor',
    value: '98',
    description:
      'de todos os estabelecimentos ativos no país no setor de manutenção e reparos são micro e pequenas empresas',
    source: 'Sebrae, Receita Federal',
    unit: '%',
  },
  {
    title: 'Profissionais cadastrados',
    value: '258',
    description:
      'entre 2013 e 2022 foi o aumento de cadastros de empresas que atuam no setor de manutenção e reparos',
    source: 'APC Plataformas',
    unit: '%',
  },
  {
    title: 'Potencial de mercado',
    value: '60',
    description:
      'é o valor de mercado anual no Brasil, especialmente na área de manutenção e reparos',
    source: 'APC Plataformas',
    unit: 'B',
  },
];

interface IndicatorCardProps {
  title: string;
  value: string;
  description: string;
  source?: string;
  unit: string;
}

const IndicatorCard = ({
  title,
  value,
  description,
  source,
  unit,
}: IndicatorCardProps) => (
  <Card shadow="none" className="indicator-section--card">
    <CardHeader className="indicator-section--card-header">{title}</CardHeader>
    <Divider className="indicator-section--card-divider" />
    <CardBody className="indicator-section--card-body">
      <div className="indicator-section--card-body-value">
        {value}
        <span className="indicator-section--card-body-value-unit">{unit}</span>
      </div>
      <p className="indicator-section--card-body-description">{description}</p>
    </CardBody>
    <CardFooter className="indicator-section--card-footer">
      Fonte: {source}
    </CardFooter>
  </Card>
);

const IndicatorSection: React.FC = () => {
  // Ref para o container dos indicadores
  const indicatorsRef = React.useRef<HTMLDivElement>(null);
  // Ref para o primeiro card
  const firstCardRef = React.useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = React.useState(true);
  const [isAtEnd, setIsAtEnd] = React.useState(false);

  // Função para obter o width do card
  const getCardWidth = () => {
    if (firstCardRef.current) {
      return firstCardRef.current.offsetWidth;
    }
    // fallback para 342
    return 342;
  };

  // Função para obter o gap do container
  const getGap = () => {
    if (indicatorsRef.current) {
      const style = window.getComputedStyle(indicatorsRef.current);
      // gap pode ser "16px" ou "32px" (1rem ou 2rem)
      const gap = style.gap || style.columnGap || '16px';
      return parseFloat(gap);
    }
    // fallback para 16px (1rem)
    return 16;
  };

  // Função para verificar extremidades após scroll
  const checkExtremes = React.useCallback(() => {
    const el = indicatorsRef.current;
    if (!el) return;
    // Considera margem de erro de 2px para floating point
    setIsAtStart(el.scrollLeft <= 2);
    setIsAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
  }, []);

  // Atualiza os estados ao scroll manual
  React.useEffect(() => {
    const el = indicatorsRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkExtremes);
    // Checa no mount
    checkExtremes();
    return () => {
      el.removeEventListener('scroll', checkExtremes);
    };
  }, [checkExtremes]);

  // Função para scrollar para a direita
  const handleScrollRight = () => {
    if (indicatorsRef.current) {
      const cardWidth = getCardWidth();
      const gap = getGap();
      indicatorsRef.current.scrollBy({
        left: cardWidth + gap,
        behavior: 'smooth',
      });
      setTimeout(checkExtremes, 400); // espera o scroll suave
    }
  };

  // Função para scrollar para a esquerda
  const handleScrollLeft = () => {
    if (indicatorsRef.current) {
      const cardWidth = getCardWidth();
      const gap = getGap();
      indicatorsRef.current.scrollBy({
        left: -(cardWidth + gap),
        behavior: 'smooth',
      });
      setTimeout(checkExtremes, 400);
    }
  };

  return (
    <section
      className="indicator-section"
      aria-label="Encontre o serviço ideal para você"
    >
      <h2 className="indicator-section--title">Dados de mercado</h2>
      <div className="indicator-section--indicators" ref={indicatorsRef}>
        {indicators.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            ref={index === 0 ? firstCardRef : undefined}
            style={{ display: 'flex' }}
          >
            <IndicatorCard {...item} />
          </div>
        ))}
      </div>
      <div className="indicator-section--indicators-arrows-wrapper">
        <Button
          className={`indicator-section--indicators-arrow-button ${!isAtStart ? 'active' : ''}`}
          isIconOnly
          variant="bordered"
          onPress={handleScrollLeft}
        >
          <ArrowLeftIcon
            className={`indicator-section--indicators-arrow-icon ${!isAtStart ? 'active' : ''}`}
          />
        </Button>
        <Button
          className={`indicator-section--indicators-arrow-button ${!isAtEnd ? 'active' : ''}`}
          isIconOnly
          variant="bordered"
          onPress={handleScrollRight}
        >
          <ArrowRightIcon
            className={`indicator-section--indicators-arrow-icon ${!isAtEnd ? 'active' : ''}`}
          />
        </Button>
      </div>
    </section>
  );
};

export default IndicatorSection;
