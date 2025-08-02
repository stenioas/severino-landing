import React from 'react';
import { AppStoreButtons } from '../../components';
import { ForWhoSection, OurServicesSection } from './components';
import { getAssetUrl } from '../../utils/getAssetUrl';

const forWhoData = [
  {
    title: 'Para quem contrata',
    description:
      'Você é o ponto de partida de toda experiência que criamos. Nosso foco é facilitar seu dia a dia com agilidade, segurança e confiança. Seja para resolver algo urgente ou planejar com calma, aqui você encontra profissionais prontos para atender com qualidade e responsabilidade. Ao contratar pelo Severino App, você fortalece uma comunidade local, prática e confiável.',
    cardTitle: 'Solicitação de serviço',
    cardImgSrc: getAssetUrl(
      '/img/firefly_woman_using_cell_phone_in_apartment.png',
    ),
    cardImgText: 'Cliente: Paula Andrade',
    cardIcon: (
      <img
        src={getAssetUrl('touch_app.svg')}
        alt="Ícone de dedo tocando a tela"
      />
    ),
  },
  {
    title: 'Para quem realiza',
    description:
      'Você é a alma do nosso aplicativo. Sua habilidade, dedicação e profissionalismo movimentam nossa rede todos os dias. No Severino App, damos visibilidade ao seu talento, facilitamos sua organização e ampliamos suas oportunidades. Aqui, você tem liberdade para oferecer seus serviços, conquistar novos clientes e crescer com o apoio de uma plataforma que valoriza quem faz acontecer.',
    cardTitle: 'Prestação de serviço',
    cardImgSrc: getAssetUrl(
      '/img/firefly_service_provider_performing_work_in_apartment.png',
    ),
    cardImgText: 'Prestador: Paulo Marques',
    cardIcon: (
      <img
        src={getAssetUrl('valve.svg')}
        alt="Ícone de válvula de encanamento"
      />
    ),
  },
];

const ServicesPage: React.FC = () => (
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
          Serviços
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
            No Severino App, acreditamos que serviços bem prestados transformam
            rotinas, geram oportunidades e criam conexões humanas. Nossa
            plataforma existe para aproximar quem precisa de uma mão com quem
            sabe fazer, com confiança, agilidade e qualidade. E nada disso
            seria possível sem duas peças fundamentais: os prestadores e os
            clientes.
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
            A colaboração entre prestadores e clientes é o que torna o Severino
            mais do que uma plataforma digital. É essa conexão que consolida
            nosso compromisso com a eficiência, a confiança e a excelência na
            prestação de serviços. Cada interação fortalece uma rede dinâmica e
            profissional, voltada para facilitar a rotina e gerar valor real
            para todos os envolvidos.
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
      {forWhoData.map((item, index) => (
        <ForWhoSection key={`for-who-${index}`} {...item} />
      ))}
      <OurServicesSection />
    </main>
  </>
);

export default ServicesPage;
