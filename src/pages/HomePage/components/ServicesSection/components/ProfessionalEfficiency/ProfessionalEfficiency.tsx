import { getAssetUrl } from '../../../../../../utils/getAssetUrl';
import './ProfessionalEfficiency.css';

const ProfessionalEfficiency = () => (
  <div className="professional-efficiency" role="listitem">
    <img
      src={getAssetUrl('/img/professional_painter.png')}
      alt="Profissional de pintura"
      className="professional-efficiency__img"
    />
    {/* Gradiente sobre a imagem */}
    <div className="professional-efficiency__gradient" />
    <h3 className="professional-efficiency__title">
      Eficiência profissional é o que buscamos em cada Prestador
    </h3>
    <p className="professional-efficiency__description">
      Nossos prestadores passam por uma análise de perfil criteriosa antes de
      iniciarem qualquer tipo de serviço.
    </p>
  </div>
);

export default ProfessionalEfficiency;
