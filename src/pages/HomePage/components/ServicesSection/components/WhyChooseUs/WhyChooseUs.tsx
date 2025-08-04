const whyChooseUsItems = [
  {
    label: 'SEVERINO APP',
    style: {
      fontWeight: 600,
      background: '#9CF0CD',
      color: '#1C1C1C',
      border: '1.5px solid #9CF0CD',
    },
  },
  {
    label: 'DESIGN MINIMALISTA',
    style: {},
  },
  {
    label: 'MELHOR TECNOLOGIA',
    style: {},
  },
  {
    label: 'EXPERIÊNCIA SIMPLES',
    style: {},
  },

  {
    label: 'SEGURANÇA NO USO',
    style: {},
  },
  {
    label: 'DIVERSOS SERVIÇOS',
    style: {},
  },
];

import './WhyChooseUs.css';

const WhyChooseUs = () => (
  <div className="whychooseus-wrapper">
    <h3 className="whychooseus-title">Porque escolher a gente?</h3>
    <div className="whychooseus-tags">
      {whyChooseUsItems.map((item) => (
        <span
          key={item.label}
          className={`whychooseus-tag`}
          style={item.style}
        >
          {item.label}
        </span>
      ))}
    </div>
  </div>
);

export default WhyChooseUs;
