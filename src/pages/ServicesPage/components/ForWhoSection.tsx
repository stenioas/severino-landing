import { Card, CardFooter } from '@heroui/react';

interface ForWhoSectionProps {
  title: string;
  description: string;
  cardTitle: string;
  cardImgSrc: string;
  cardImgText: string;
  cardIcon: React.ReactNode;
  cardImgAlt: string;
}

const ForWhoSection = ({
  title,
  description,
  cardTitle,
  cardImgSrc,
  cardImgText,
  cardIcon,
  cardImgAlt,
}: ForWhoSectionProps) => {
  return (
    <section aria-label={title} className="for-who-section">
      <h2>{title}</h2>
      <p className="section-description">{description}</p>
      <div className="forwho-card-container">
        <Card shadow="none" className="border-none forwho-card">
          <img alt={cardImgAlt} src={cardImgSrc} />
          <CardFooter className="forwho-card-footer">
            <p>{cardImgText}</p>
          </CardFooter>
        </Card>
        <div className="forwho-card-title">
          {cardIcon}
          {cardTitle}
        </div>
      </div>
    </section>
  );
};

import './ForWhoSection.css';

export default ForWhoSection;
