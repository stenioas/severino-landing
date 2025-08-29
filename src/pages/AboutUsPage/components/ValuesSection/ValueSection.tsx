import React from 'react';
import ValueCard from '../ValueCard';

import './ValueSection.css';
import { getAssetUrl } from '../../../../utils/getAssetUrl';

const ValueCardProps = [
  {
    icon: (
      <img
        src={getAssetUrl('/svg/handshake.svg')}
        alt="Relações de confiança"
      />
    ),
    title: 'Relações de confiança',
    description:
      'Selecionamos e conectamos profissionais comprometidos com a qualidade, para que você tenha sempre a segurança de contar com um serviço bem feito.',
  },
  {
    icon: (
      <img
        src={getAssetUrl('/svg/diamond.svg')}
        alt="Compromisso com a qualidade"
      />
    ),
    title: 'Compromisso com a qualidade',
    description:
      'Acreditamos que um bom serviço vai além de cumprir uma tarefa, ele deve surpreender, resolver de verdade e deixar uma boa impressão sempre para o cliente e prestador.',
  },
  {
    icon: (
      <img
        src={getAssetUrl('/svg/smartphone.svg')}
        alt="Simplicidade que resolve"
      />
    ),
    title: 'Simplicidade que resolve',
    description:
      'Nossa plataforma foi criada para facilitar sua vida. Agende, acompanhe e resolva tudo de forma rápida e descomplicada como deve ser.',
  },
  {
    icon: (
      <img
        src={getAssetUrl('/svg/diversity.svg')}
        alt="Valorização de pessoas"
      />
    ),
    title: 'Valorização de pessoas',
    description:
      'Acreditamos no poder da colaboração. Criamos oportunidades para prestadores crescerem e para clientes encontrarem exatamente o que precisar.',
  },
];

const ValuesSection: React.FC = () => (
  <section aria-label="Nossos valores" className="values-section">
    <h2 className="values-section__title">Nossos valores</h2>
    <div className="values-section__list">
      {ValueCardProps.map((step, index) => (
        <ValueCard key={index} {...step} />
      ))}
    </div>
  </section>
);

export default ValuesSection;
