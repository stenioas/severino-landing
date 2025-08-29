import {
  Button,
  Card,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@heroui/react';
import React, { useState, useEffect } from 'react';

import './NewsletterForm.css';
import { getAssetUrl } from '../../utils/getAssetUrl';
import { saveNewsletterEmail } from '../../api/newsletterApi';
import { CheckIcon } from '@heroicons/react/20/solid';
import { XMarkIcon } from '@heroicons/react/16/solid';

// Hook para detectar breakpoint
const useBreakpoint = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkBreakpoint = () => {
      setIsDesktop(window.innerWidth >= 960);
    };

    checkBreakpoint();
    window.addEventListener('resize', checkBreakpoint);

    return () => window.removeEventListener('resize', checkBreakpoint);
  }, []);

  return isDesktop;
};

const NewsletterForm: React.FC = () => {
  const isDesktop = useBreakpoint();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');

  const handleSubmit = () => {
    if (!email) return;
    setStatus('sending');
    saveNewsletterEmail(email)
      .then((response) => {
        if (response.status === 200) {
          setStatus('success');
          setEmail('');
        } else {
          setStatus('error');
        }
      })
      .catch(() => {
        setStatus('error');
      });
  };

  const handlePopoverClose = () => {
    setStatus('idle');
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (status === 'success' || status === 'error') {
      timer = setTimeout(() => setStatus('idle'), 6000);
    }
    return () => clearTimeout(timer);
  }, [status]);

  return (
    <section
      className="newsletter--section"
      aria-label="Assine nossa newsletter"
    >
      <Card shadow="none" className="newsletter--card">
        <h3 className="newsletter--title">
          Venha{' '}
          <span className="newsletter--title-highlight">com a gente</span>{' '}
          fazer parte{' '}
          <span className="newsletter--title-highlight">dessa revolução</span>
        </h3>
        <p className="newsletter--description">
          Não perca nenhuma novidade! Receba atualizações do app, promoções
          exclusivas, novos serviços, parcerias incríveis e muito mais.
        </p>

        <Popover
          placement="top-start"
          shadow="none"
          className="dark"
          classNames={{
            content: status === 'error' && 'newsletter--popover-error',
          }}
          radius="sm"
          isOpen={status === 'success' || status === 'error'}
          shouldCloseOnBlur={false}
          triggerScaleOnOpen={false}
        >
          <PopoverTrigger>
            <form
              className="newsletter--form"
              aria-label="Formulário para assinar a newsletter"
              onSubmit={(e) => {
                handleSubmit();
                e.preventDefault();
              }}
            >
              <Input
                type="email"
                variant="faded"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                endContent={
                  <Button
                    className={`newsletter--send-button ${status === 'sending' && 'newsletter--send-button-sending'} ${status === 'success' && 'newsletter--send-button-success'}`}
                    radius="sm"
                    type="submit"
                    isLoading={status === 'sending'}
                    spinnerPlacement="end"
                    endContent={
                      status === 'success' && (
                        <CheckIcon color="#ACE2CC" height={22} width={22} />
                      )
                    }
                  >
                    {status === 'sending'
                      ? 'Enviando'
                      : status === 'success'
                        ? 'Enviada'
                        : 'Enviar'}
                  </Button>
                }
                classNames={{
                  input: 'newsletter--input',
                  inputWrapper: 'newsletter--inputWrapper',
                }}
              />
            </form>
          </PopoverTrigger>
          <PopoverContent>
            <span
              className={`newsletter--popover-content-${status === 'error' ? 'error' : 'success'}`}
            >
              {status === 'error'
                ? 'Falha no envio. Por favor, tente mais tarde.'
                : 'Obrigado! Grandes novidades estão a caminho.'}
              <Button
                isIconOnly
                radius="full"
                className="newsletter--popover-content-close"
                endContent={<XMarkIcon className="w-4 h-4" color="#FFF" />}
                onPress={handlePopoverClose}
              />
            </span>
          </PopoverContent>
        </Popover>
        <img
          className="newsletter--img"
          src={getAssetUrl(
            isDesktop
              ? '/svg/newsletter_tools_large.svg'
              : '/svg/newsletter_tools.svg',
          )}
          alt="Ilustração com ferramentas"
        />
      </Card>
    </section>
  );
};

export default NewsletterForm;
