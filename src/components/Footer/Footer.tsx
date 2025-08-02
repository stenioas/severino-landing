import { Divider, Link } from '@heroui/react';
import React from 'react';
import { getAssetUrl } from '../../utils/getAssetUrl';

import './Footer.css';

const Footer: React.FC = () => (
  <footer className="footer" role="contentinfo">
    <div className="logo-and-email">
      <img
        src={getAssetUrl('logo.svg')}
        alt="Severino logo"
        className="logo"
      />
      <div className="email-section">
        <img
          src={getAssetUrl('email.svg')}
          alt="Email"
          className="email-icon"
        />
        <Link href="mailto:contato@severino.app.br" className="email-link">
          contato@severino.app.br
        </Link>
      </div>
    </div>
    <Divider className="divider" />
    <div className="socials-and-copy">
      <div className="socials">
        <div className="social">
          <Link
            href="https://www.instagram.com/severinoappbr/"
            target="_blank"
            aria-label="Instagram"
            className="social-link"
          >
            <img src={getAssetUrl('instagram.svg')} alt="Instagram" />
          </Link>
        </div>
        <div className="social">
          <Link
            href="https://www.linkedin.com/company/severinoappbr/"
            target="blank"
            aria-label="LinkedIn"
            className="social-link"
          >
            <img src={getAssetUrl('linkedin.svg')} alt="LinkedIn" />
          </Link>
        </div>
      </div>
      <span className="copyright">
        © 2025 Severino. Todos os direitos reservados.
      </span>
    </div>
  </footer>
);

export default Footer;
