import ContactForm from './components/ContactForm';

import './ContactPage.css';

const ContactPage = () => {
  return (
    <main>
      <section aria-label="Contato" className="contactpage--section">
        <h2 className="contactpage--title">Contato</h2>
        <div className="contactpage--description-and-form-wrapper">
          <p
            className="contactpage--description"
            aria-label="Texto informativo de contato"
          >
            Tem dúvidas, sugestões ou precisa de ajuda?
            <br />
            Estamos aqui para ouvir você. Nossa equipe está pronta para
            oferecer o suporte que você precisa e garantir a melhor experiência
            com o Severino App. Entre em contato e envie suas dúvida, realize
            parcerias e outros assuntos.
          </p>
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
