import {
  Button,
  Form,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from '@heroui/react';
import { useEffect, useState } from 'react';

import './ContactForm.css';
import { CheckIcon } from '@heroicons/react/16/solid';
import { XMarkIcon } from '@heroicons/react/16/solid';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    }, 2000);
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
    <Form className="contact-form" onSubmit={handleSubmit}>
      <h3 className="contact-form-title">Preencha os campos</h3>
      <div className="contact-form-fields">
        <div className="contact-form-fields-inputs">
          <Input
            required
            type="text"
            variant="faded"
            placeholder="Digite seu nome e sobrenome"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            classNames={{
              input: 'contact--input',
              inputWrapper: 'contact--inputWrapper',
            }}
          />
          <Input
            required
            type="email"
            variant="faded"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            classNames={{
              input: 'contact--input',
              inputWrapper: 'contact--inputWrapper',
            }}
          />
        </div>
        <Textarea
          required
          variant="faded"
          placeholder="Digite sua mensagem..."
          maxRows={9}
          maxLength={440}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          endContent={
            <span className="contact--textarea-count">
              {message.length}
              <span className="contact--textarea-count-max">/440</span>
            </span>
          }
          classNames={{
            input: 'contact--textarea',
            inputWrapper: 'contact--textareaWrapper',
          }}
        />
      </div>
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
          <Button
            className={`contact--send-button ${status === 'sending' && 'contact--send-button-sending'} ${status === 'success' && 'contact--send-button-success'}`}
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
        </PopoverTrigger>
        <PopoverContent>
          <span
            className={`newsletter--popover-content-${status === 'error' ? 'error' : 'success'}`}
          >
            {status === 'error'
              ? 'Falha no envio. Por favor, tente mais tarde.'
              : 'Obrigado! Em breve, entraremos em contato'}
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
    </Form>
  );
};

export default ContactForm;
