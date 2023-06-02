import * as React from 'react';
import InnerWrapper from '@components/shared/InnerWrapper';
import Image from 'next/image';
import content from '@content/contact.json';
import ContactForm from './ContactForm';
import Marty from '@/images/marty.jpg';
import styles from './Page.module.scss';

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
            <div className={styles.image}>
              <Image src={Marty} alt="" fill priority />
            </div>
          </div>
        </div>
      </InnerWrapper>
    </main>
  );
}
