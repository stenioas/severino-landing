import { Button, Card } from '@heroui/react';
import AppStoreButtons from '../../../../components/AppStoreButtons';
import { getAssetUrl } from '../../../../utils/getAssetUrl';

import './HeroSection.css';
import { ChevronDownIcon } from '../../../../icons';

const HeroSection: React.FC = () => {
  const handleHeroButtonClick = () => {
    const stepsTitle = document.getElementById('steps-section-title');
    if (stepsTitle) {
      const y =
        stepsTitle.getBoundingClientRect().top + window.pageYOffset - 128;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <Card className="hero-card" shadow="none" aria-label="Hero section card">
        <img
          src={getAssetUrl('hero-illustration.svg')}
          alt="Ilustração de contratação de serviços"
          className="hero-image"
        />
        <div className="hero-title-and-description-container">
          <p className="hero-title">
            Contrate Profissionais de
            <br /> Serviço de{' '}
            <span className="hero-highlight">forma rápida</span>
            <br />
            com <span className="hero-highlight">facilidade</span> e{' '}
            <span className="hero-highlight">segurança</span>
          </p>
          <p className="hero-subtitle">
            Conectamos você aos melhores serviços para ajudar no seu dia a dia.
          </p>
          <div className="hero-appstore-btns">
            <AppStoreButtons />
          </div>
        </div>
        <Button
          isIconOnly
          className="hero-button"
          onPress={handleHeroButtonClick}
        >
          <ChevronDownIcon color="#FFFFFF" size={16} />
        </Button>
      </Card>
    </section>
  );
};

export default HeroSection;
