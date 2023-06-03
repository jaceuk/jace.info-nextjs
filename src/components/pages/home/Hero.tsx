import InnerWrapper from '@/components/shared/InnerWrapper';
import content from '@/content/hero.json';
import styles from './Hero.module.scss';
import Spock from '@/images/spock.jpg';
import SpockDark from '@/images/spock-dark.jpg';
import HeroImage from '@/components/shared/HeroImage';

export default function Hero() {
  return (
    <section className="with-gradient">
      <InnerWrapper>
        <div className={styles.hero}>
          <HeroImage image={Spock} darkImage={SpockDark} />

          <div>
            <h1 className="hero">{content.title}</h1>
            <div className="subtitle">{content.subtitle}</div>
          </div>
        </div>
      </InnerWrapper>
    </section>
  );
}
