import React from 'react';
import { ValuesSection, IndicatorSection } from './components';
import { AppStoreButtons } from '../../components';

const AboutUsPage: React.FC = () => (
  <>
    <main className="bg-white min-h-screen flex flex-col">
      <section
        aria-label="Sobre nós"
        style={{
          width: '100%',
          maxWidth: '1280px',
          margin: '2rem auto 0',
          padding: '0 1rem',
          fontFamily: '"Open Sans", sans-serif',
        }}
      >
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            letterSpacing: '-0.0625rem',
            color: '#1C1C1C',
          }}
        >
          Sobre nós
        </h2>
        <div
          style={{
            marginTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <p
            style={{
              lineHeight: '1.5rem',
              letterSpacing: '-0.03125rem',
              color: '#096C76',
            }}
          >
            Nascemos com a missão de empoderar você com soluções inovadoras
            para facilitar o dia a dia na contratação e prestação de serviços.
            Criamos um aplicativo que conecta pessoas a profissionais de forma
            prática e eficiente.
          </p>
          <p
            style={{
              fontSize: '0.75rem',
              lineHeight: '1.125rem',
              letterSpacing: '-0.03125rem',
              color: '#7B7B7B',
              marginTop: '2rem',
            }}
          >
            Com uma interface intuitiva, design centrado no usuário e segurança
            de ponta, oferecemos uma experiência fluida para que você possa
            encontrar, agendar e acompanhar serviços com total controle, a
            qualquer hora, de qualquer lugar. Seja para pequenos reparos,
            serviços especializados ou apoio no dia a dia, estamos aqui para
            tornar tudo mais simples.
          </p>
          <p
            style={{
              fontSize: '0.75rem',
              lineHeight: '1.125rem',
              letterSpacing: '-0.03125rem',
              color: '#7B7B7B',
              marginTop: '1.5rem',
            }}
          >
            Acreditamos que o tempo é um dos bens mais valiosos que temos. Por
            isso, nosso compromisso vai além da tecnologia: entregamos
            confiança, agilidade e atendimento humano em cada etapa do
            processo. Valorizamos tanto quem contrata quanto quem presta o
            serviço, criando uma comunidade baseada em respeito, transparência
            e qualidade.
          </p>
          <p
            style={{
              fontSize: '0.75rem',
              lineHeight: '1.125rem',
              letterSpacing: '-0.03125rem',
              color: '#7B7B7B',
              marginTop: '1.5rem',
            }}
          >
            Junte-se a nós e experimente a conveniência, a tranquilidade e o
            cuidado de um aplicativo feito para você. Vamos juntos transformar
            a forma como as pessoas acessam e oferecem serviços.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '2.5rem',
            }}
          >
            <AppStoreButtons />
          </div>
        </div>
      </section>
      <ValuesSection />
      <IndicatorSection />
    </main>
  </>
);

export default AboutUsPage;
