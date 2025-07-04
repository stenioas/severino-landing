import { Card } from '@heroui/react';
import AppStoreButtons from '../../../../components/AppStoreButtons';
import { getAssetUrl } from '../../../../utils/getAssetUrl';

const HeroSection: React.FC = () => {
  return (
    <section
      style={{
        width: '100%',
        maxWidth: '1280px',
        margin: '2rem auto 0',
        padding: '0 1rem',
        fontFamily: '"Open Sans", sans-serif',
      }}
    >
      <Card
        className="flex flex-col items-center justify-center"
        shadow="none"
        aria-label="Hero section"
        style={{ padding: '2rem 1rem 1.5rem', backgroundColor: '#096C76' }}
      >
        <div className="mb-4">
          <img
            src={getAssetUrl('hero-illustration.svg')}
            alt="Ilustração de contratação de serviços"
            className="h-32 w-32"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <p
            style={{
              fontSize: '1.5rem',
              lineHeight: '2rem',
              letterSpacing: '-0.0625rem',
              color: '#FFFFFF',
              fontWeight: '400',
              textAlign: 'center',
            }}
          >
            Contrate Profissionais de Serviço de{' '}
            <span style={{ fontWeight: '600', color: '#9CF0CD' }}>
              forma rápida
            </span>
            <br />
            com{' '}
            <span style={{ fontWeight: '600', color: '#9CF0CD' }}>
              facilidade e segurança
            </span>
          </p>
          <p
            style={{
              fontSize: '0.875rem',
              color: '#FFFFFF',
              textAlign: 'center',
            }}
          >
            Conectamos você aos melhores <br /> serviços para ajudar no seu dia
            a dia.
          </p>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <AppStoreButtons />
        </div>
      </Card>
    </section>
  );
};

export default HeroSection;
