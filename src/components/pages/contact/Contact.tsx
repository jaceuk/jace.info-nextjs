import * as React from 'react';
import InnerWrapper from '@components/shared/InnerWrapper';
import Image from 'next/image';
import content from '@content/contact.json';
import ContactForm from './ContactForm';
import Marty from '@images/marty.jpg';
import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <section className="with-gradient">
      <InnerWrapper>
        <div className={styles.contact}>
          <div className={styles.intro}>
            <h1>{content.title}</h1>
            <p>{content.text}</p>
          </div>

          <div className={styles.container}>
            <ContactForm />
            <div className={styles.image}>
              <Image src={Marty} alt="" fill />
            </div>
          </div>
        </div>
      </InnerWrapper>
    </section>
  );
}
