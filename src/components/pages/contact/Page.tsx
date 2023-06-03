import * as React from 'react';
import InnerWrapper from '@components/shared/InnerWrapper';
import content from '@content/contact.json';
import ContactForm from './ContactForm';
import styles from './Page.module.scss';
import HeroImage from './HeroImage';

export default function Page() {
  return (
    <main className="with-gradient">
      <InnerWrapper>
        <div className={styles.contact}>
          <div className={styles.intro}>
            <h1>{content.title}</h1>
            <p>{content.text}</p>
          </div>

          <div className={styles.container}>
            <ContactForm />
            <HeroImage />
          </div>
        </div>
      </InnerWrapper>
    </main>
  );
}
