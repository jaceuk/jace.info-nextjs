import Image from 'next/image';
import InnerWrapper from '@/components/shared/InnerWrapper';
import Spock from '@/images/spock.jpg';
import content from '@/content/hero.json';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className="with-gradient">
      <InnerWrapper>
        <div className={styles.hero}>
          <div className={styles.image}>
            <Image src={Spock} alt="" fill priority />
          </div>

          <div>
            <h1 className="hero">{content.title}</h1>
            <div className="subtitle">{content.subtitle}</div>
          </div>
        </div>
      </InnerWrapper>
    </section>
  );
}
