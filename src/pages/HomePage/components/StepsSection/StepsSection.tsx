import React from 'react';
import StepCard from '../StepCard';

import { getAssetUrl } from '../../../../utils/getAssetUrl';

const steps = [
  {
    stepNumber: 1,
    icon: (
      <img
        src={getAssetUrl('/mystery.svg')}
        alt="Pesquise o serviço que deseja"
        className="step-card-header-icon"
      />
    ),
    title: 'Pesquise o serviço que deseja',
    description:
      'Precisa de um eletricista, encanador ou pintor? Nossa busca inteligente conecta você rapidamente aos melhores serviços e prestadores, sempre próximos de você. As melhores opções com rapidez e confiança em um clique.',
  },
  {
    stepNumber: 2,
    icon: (
      <img
        src={getAssetUrl('/engineering.svg')}
        alt="Escolha o tipo de profissional"
        className="step-card-header-icon"
      />
    ),
    title: 'Escolha o tipo de profissional',
    description:
      'Navegue pelas categorias de serviços e selecione o profissional ideal para resolver sua demanda. Seja para construção ou pequenos reparos, aqui você encontra as melhores opções sempre a sua disposição.',
  },
  {
    stepNumber: 3,
    icon: (
      <img
        src={getAssetUrl('/list_alt_add.svg')}
        alt="Preenchimento dos dados"
        className="step-card-header-icon"
      />
    ),
    title: 'Preenchimento dos dados',
    description:
      'Informe os detalhes do serviço, escolha o melhor horário e finalize sua solicitação em poucos passos. Assim, o profissional recebe todas as informações necessárias para atender você com rapidez , eficiência e segurança.',
  },
  {
    stepNumber: 4,
    icon: (
      <img
        src={getAssetUrl('/list_alt_check.svg')}
        alt="Aprovação da solicitação"
        className="step-card-header-icon"
      />
    ),
    title: 'Aprovação da solicitação',
    description:
      'Sua solicitação foi enviada com sucesso?! Agora é só aguardar o prestador analisar os detalhes e confirmar a disponibilidade. Assim que ele aprovar, a solicitação vai para a seção ”aguardando início” na seção serviços.',
  },
];

import './StepsSection.css';

const StepsSection: React.FC = () => (
  <section aria-label="Solução em serviços" className="steps-section">
    <h2 className="steps-section__title">
      {'Solução em serviços'.toUpperCase()}
    </h2>
    <h3 className="steps-section__subtitle">
      Simplicidade na hora de
      <br /> contratar quem você precisa
    </h3>
    <div className="steps-section__steps">
      {steps.map((step) => (
        <StepCard key={step.stepNumber} {...step} />
      ))}
    </div>
  </section>
);

export default StepsSection;
