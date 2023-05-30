'use client';

import * as React from 'react';
import styles from './ContactForm.module.scss';
import Overlay from '@components/shared/Overlay';
import Loader from '@components/shared/Loader';
import Alert from '@components/shared/Alert';
import Card from '@/components/shared/Card';

export default function Contact() {
  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const [formState, setFormState] = React.useState('');

  const handleChange = (element: { target: { id: any; value: any } }) => {
    setInputs((prev) => ({
      ...prev,
      [element.target.id]: element.target.value,
    }));
  };

  const onSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputs.name && inputs.email && inputs.message) {
      setFormState('loading');

      try {
        const res = await fetch('api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputs),
        });

        const { error } = await res.json();

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
  };

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
