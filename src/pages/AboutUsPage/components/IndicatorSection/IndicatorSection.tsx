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
      'das empresas e prestadores de serviços estão presentes no municípios brasileiros, com concentração em áreas urbanas',
    source: 'IBGE',
    minWidth: '17rem',
  },
  {
    title: 'Demanda contínua',
    value: '80',
    description:
      'das residências e edifícios precisam de algum tipo de manutenção ou pequeno reparo pelo menos uma vez ao ano',
    source: 'ABNT',
    minWidth: '17rem',
  },
  {
    title: 'Crescimento no setor',
    value: '98',
    description:
      'de todos os estabelecimentos ativos no país no setor de manutenção e reparos são micro e pequenas empresas',
    source: 'Sebrae, Receita Federal',
    minWidth: '17rem',
  },
  {
    title: 'Profissionais cadastrados',
    value: '258',
    description:
      'entre 2013 e 2022 foi o aumento de cadastros de empresas que atuam no setor de manutenção e reparos',
    source: 'APC Plataformas',
    minWidth: '17rem',
  },
  {
    title: 'Potencial de mercado',
    value: '60',
    description:
      'é considerado o tamanho do mercado no Brasil e o aumento da terceirização desses serviços, com potencial de crescimento',
    source: 'APC Plataformas',
    minWidth: '17rem',
  },
];

interface IndicatorCardProps {
  title: string;
  value: string;
  description: string;
  source?: string;
  minWidth?: string;
}

const IndicatorCard = ({
  title,
  value,
  description,
  source,
  minWidth = '17rem',
}: IndicatorCardProps) => (
  <Card shadow="none" className="indicator-section--card" style={{ minWidth }}>
    <CardHeader className="indicator-section--card-header">{title}</CardHeader>
    <Divider className="indicator-section--card-divider" />
    <CardBody className="indicator-section--card-body">
      <div className="indicator-section--card-body-value">
        {value}
        <span
          style={{
            fontSize: '2.25rem',
            lineHeight: 0,
            letterSpacing: '-0.25rem',
          }}
        >
          %
        </span>
      </div>
      <p className="indicator-section--card-body-description">{description}</p>
    </CardBody>
    <CardFooter className="indicator-section--card-footer">
      Fonte: {source}
    </CardFooter>
  </Card>
);

const IndicatorSection: React.FC = () => (
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
      {'Indicadores em potencial'.toUpperCase()}
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
      Desde do início, os dados guiam a nossa jornada
    </p>
    <div className="indicator-section--indicators">
      {indicators.map((item, index) => (
        <IndicatorCard {...item} key={`${item.title}-${index}`} />
      ))}
    </div>
    <div
      style={{
        display: 'flex',
        gap: '0.875rem',
        paddingLeft: '1rem',
        marginTop: '1.5rem',
      }}
    >
      <Button
        className="indicator-section--indicators-arrow-right"
        isIconOnly
        variant="bordered"
      >
        <ArrowLeftIcon size={'0.875rem'} />
      </Button>
      <Button
        className="indicator-section--indicators-arrow-right"
        isIconOnly
        variant="solid"
      >
        <ArrowRightIcon size={'0.875rem'} />
      </Button>
    </div>
  </section>
);

export default IndicatorSection;
