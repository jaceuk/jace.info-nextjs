import * as React from 'react';
import InnerWrapper from '@components/shared/InnerWrapper';
import content from '@content/contact.json';
import styles from './Contact.module.scss';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section className="with-gradient">
      <InnerWrapper>
        <div className={styles.contact}>
          <div className={styles.intro}>
            <h1>{content.title}</h1>
            <p>{content.text}</p>
          </div>

          <ContactForm />
        </div>
      </InnerWrapper>
    </section>
  );
}
