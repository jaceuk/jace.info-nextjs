'use client';

import * as React from 'react';
import styles from './ContactForm.module.scss';
import Overlay from '@components/shared/Overlay';
import Loader from '@components/shared/Loader';
import Alert from '@components/shared/Alert';
import Card from '@/components/shared/Card';

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export default function Contact() {
  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const [formState, setFormState] = React.useState<'' | 'error' | 'loading' | 'success'>('');

  function handleChange(element: { target: { id: any; value: any } }) {
    setInputs((prev) => ({
      ...prev,
      [element.target.id]: element.target.value,
    }));
  }

  async function checkRecaptcha(token: string) {
    const response = await fetch('api/contact/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reCaptchaKey: token,
      }),
    }).catch(() => {
      setFormState('error');
    });

    return response;
  }

  async function onSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState('loading');

    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: 'contactSubmit' })
        .then(async (token: string) => {
          const response = await checkRecaptcha(token);

          const { error } = await response?.json();
          console.log(error);

          if (error) {
            console.log('Captcha could not be verified. Please try again.');
            setFormState('error');
          } else {
            sendMessage();
          }
        });
    });
  }

  async function sendMessage() {
    if (inputs.name && inputs.email && inputs.message) {
      try {
        const response = await fetch('api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputs),
        });

        const { error } = await response.json();

        if (error) {
          setFormState('error');
          return;
        }

        setFormState('success');
        setInputs({
          name: '',
          email: '',
          message: '',
        });
      } catch (error) {
        setFormState('error');
      }
    }
  }

  React.useEffect(() => {
    const loadScriptByURL = (id: string, url: string, callback: () => void) => {
      const isScriptExist = document.getElementById(id);

      if (!isScriptExist) {
        const script = document.createElement('script');
        script.src = url;
        script.id = id;
        script.onload = () => {
          if (callback) callback();
        };
        document.body.appendChild(script);
      }

      if (isScriptExist && callback) callback();
    };

    // load the script by passing the URL
    loadScriptByURL(
      'recaptcha-key',
      `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`,
      () => {},
    );
  }, []);

  return (
    <div className={styles.formContainer}>
      <Card>
        {formState === 'loading' && (
          <Overlay>
            <Loader>Sending</Loader>
          </Overlay>
        )}

        {formState === 'error' && (
          <Alert type="error">
            There was a problem sending your message, please try again. If the problem perists please email
            info@jace.info.
          </Alert>
        )}

        {formState === 'success' && <Alert type="success">Your message was sent successfully</Alert>}

        <form onSubmit={(event) => onSubmitForm(event)} className={styles.form}>
          <div className={styles.row}>
            <label htmlFor="name" className={styles.label}>
              Your name (required)
            </label>
            <input
              id="name"
              type="text"
              value={inputs.name}
              className={styles.input}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.row}>
            <label htmlFor="email" className={styles.label}>
              Your email address (required)
            </label>
            <input
              id="email"
              type="email"
              className={styles.input}
              value={inputs.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.row}>
            <label htmlFor="message" className={styles.label}>
              Your message (required)
            </label>
            <textarea
              id="message"
              className={styles.input}
              value={inputs.message}
              onChange={handleChange}
              rows={5}
              required
            />
          </div>

          <button className={styles.btn}>Send your message</button>
        </form>
      </Card>
    </div>
  );
}
