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

  const [form, setForm] = React.useState({
    state: '',
    message: '',
  });

  const handleChange = (element: { target: { id: any; value: any } }) => {
    setInputs((prev) => ({
      ...prev,
      [element.target.id]: element.target.value,
    }));
  };

  const onSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputs.name && inputs.email && inputs.message) {
      setForm({ state: 'loading', message: 'Loading.' });

      try {
        const res = await fetch('api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputs),
        });

        const { error } = await res.json();

        if (!error) {
          setForm({
            state: 'error',
            message: error,
          });
          return;
        }

        setForm({
          state: 'success',
          message: 'Your message was sent successfully',
        });
        setInputs({
          name: '',
          email: '',
          message: '',
        });
      } catch (error) {
        setForm({
          state: 'error',
          message: 'Something went wrong',
        });
      }
    }
  };

  return (
    <div className={styles.formContainer}>
      <Card>
        {form.state === 'loading' ? (
          <Overlay>
            <Loader>Sending</Loader>
          </Overlay>
        ) : form.state === 'error' ? (
          <Alert type="error">
            There was a problem sending your message, please try again. If the problem perists please email
            info@jace.info.
          </Alert>
        ) : (
          form.state === 'success' && <Alert type="success">Your message was sent successfully</Alert>
        )}

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
