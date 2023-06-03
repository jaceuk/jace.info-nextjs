import * as React from 'react';
import InnerWrapper from '@components/shared/InnerWrapper';
import content from '@content/contact.json';
import ContactForm from './ContactForm';
import styles from './Page.module.scss';
import Marty from '@/images/marty.jpg';
import MartyDark from '@/images/marty-dark.jpg';
import HeroImage from '@components/shared/HeroImage';

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
            <HeroImage image={Marty} darkImage={MartyDark} />
          </div>
        </div>
      </InnerWrapper>
    </main>
  );
}
