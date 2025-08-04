import { Card, CardFooter } from '@heroui/react';
import { getAssetUrl } from '../../../../../../utils/getAssetUrl';
import animation from '../../../../../../animations/choose_service_animation.json';
import Lottie from 'lottie-react';
import './IdealService.css';

const Animation = () => (
  <Lottie
    animationData={animation}
    loop={true}
    className="ideal-service__animation"
  />
);

const IdealService = () => (
  <Card className="ideal-service__card">
    <img
      src={getAssetUrl('/img/firefly_black_woman.png')}
      alt="Firefly Black Woman"
      className="ideal-service__image"
    />
    {/* Gradiente sobre a imagem */}
    <div className="ideal-service__gradient" />
    <h3 className="ideal-service__title">
      Encontre o serviço
      <br /> ideal para você
    </h3>
    <div className="ideal-service__footer-wrapper">
      <CardFooter className="ideal-service__footer">
        <Animation />
      </CardFooter>
    </div>
  </Card>
);

export default IdealService;
