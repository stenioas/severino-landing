import ContactForm from './components/ContactForm';

const ContactPage = () => {
  return (
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
          Contato
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
            Tem dúvidas, sugestões ou precisa de ajuda? Estamos aqui para ouvir
            você. Nossa equipe está pronta para oferecer o suporte que você
            precisa e garantir a melhor experiência com o Severino App. Entre
            em contato e envie suas dúvida, realize parcerias e outros
            assuntos.
          </p>
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
