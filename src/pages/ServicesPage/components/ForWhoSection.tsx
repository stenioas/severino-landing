import { Card, CardFooter } from '@heroui/react';

interface ForWhoSectionProps {
  title: string;
  description: string;
  cardTitle: string;
  cardImgSrc: string;
  cardImgText: string;
  cardIcon: React.ReactNode;
}

const ForWhoSection = ({
  title,
  description,
  cardTitle,
  cardImgSrc,
  cardImgText,
  cardIcon,
}: ForWhoSectionProps) => {
  return (
    <section
      aria-label="Nossos valores"
      style={{
        width: '100%',
        maxWidth: '1280px',
        minWidth: '360px',
        margin: '4.5rem auto 0',
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
        {title}
      </h2>
      <p
        style={{
          fontSize: '0.75rem',
          lineHeight: '1.125rem',
          letterSpacing: '-0.0625rem',
          color: '#7b7b7b',
          marginTop: '2rem',
        }}
      >
        {description}
      </p>
      <div
        style={{
          width: '100%',
          backgroundColor: '#E8F7F1',
          marginTop: '2.5rem',
          borderRadius: '1rem',
        }}
      >
        <Card
          shadow="none"
          isFooterBlurred
          className="border-none"
          radius="lg"
          style={{
            position: 'relative',
            width: '100%',
            height: '16rem',
            borderRadius: '1rem',
            alignItems: 'center',
          }}
        >
          <img
            alt="Woman listing to music"
            src={cardImgSrc}
            style={{
              width: '100%',
              objectFit: 'contain',
            }}
          />
          <CardFooter
            style={{
              position: 'absolute',
              width: 'auto',
              display: 'flex',
              justifyContent: 'center',
              bottom: '1.5rem',
              borderRadius: '2rem',
              padding: '0.8125rem 1rem',
              backdropFilter: 'blur(3px) saturate(1.5)',
              WebkitBackdropFilter: 'blur(3px) saturate(1.5)',
              backgroundColor: 'rgb(10, 10, 10, 0.38)',
              zIndex: 10,
            }}
          >
            <p
              style={{
                fontSize: '0.875rem',
                lineHeight: '100%',
                letterSpacing: '-0.0625rem',
                color: '#FFFFFF',
              }}
            >
              {cardImgText}
            </p>
          </CardFooter>
        </Card>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.375rem',
            padding: '1.5rem 1rem',
            color: '#7b7b7b',
            letterSpacing: '-0.0625rem',
          }}
        >
          {cardIcon}
          {cardTitle}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
