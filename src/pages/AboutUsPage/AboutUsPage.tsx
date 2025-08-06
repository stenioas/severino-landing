import React from 'react';
import { ValuesSection, IndicatorSection } from './components';
import { AppStoreButtons } from '../../components';
import './AboutUsPage.css';

const AboutUsPage: React.FC = () => (
  <>
    <section aria-label="Sobre nós" className="aboutus-section">
      <h2 className="aboutus-section_title">Sobre nós</h2>
      <div className="aboutus-section__maintext_wrapper">
        <p className="aboutus-section_maintext">
          Nascemos com a missão de empoderar você com soluções inovadoras para
          facilitar o dia a dia na contratação e prestação de serviços. Criamos
          um aplicativo que conecta pessoas a profissionais de forma prática,
          segura e eficiente tudo em poucos cliques.
        </p>
        <p className="aboutus-section_paragraph first-paragraph">
          Com uma interface intuitiva, design centrado no usuário e segurança
          de ponta, oferecemos uma experiência fluida para que você possa
          encontrar, agendar e acompanhar serviços com total controle, a
          qualquer hora, de qualquer lugar. Seja para pequenos reparos,
          serviços especializados ou apoio no dia a dia, estamos aqui para
          tornar tudo mais simples.
        </p>
        <p className="aboutus-section_paragraph">
          Acreditamos que o tempo é um dos bens mais valiosos que temos. Por
          isso, nosso compromisso vai além da tecnologia: entregamos confiança,
          agilidade e atendimento humano em cada etapa do processo. Valorizamos
          tanto quem contrata quanto quem presta o serviço, criando uma
          comunidade baseada em respeito, transparência e qualidade.
        </p>
        <p className="aboutus-section_paragraph">
          Junte-se a nós e experimente a conveniência, a tranquilidade e o
          cuidado de um aplicativo feito para você. Vamos juntos transformar a
          forma como as pessoas acessam e oferecem serviços.
        </p>
        <div className="aboutus-section_appstore">
          <AppStoreButtons />
        </div>
      </div>
    </section>
    <ValuesSection />
    <IndicatorSection />
  </>
);

export default AboutUsPage;
