import InnerWrapper from '@/components/shared/InnerWrapper';
import content from '@/content/hero.json';
import styles from './Hero.module.scss';
import HeroImage from './HeroImage';

export default function Hero() {
  return (
    <section className="with-gradient">
      <InnerWrapper>
        <div className={styles.hero}>
          <HeroImage />

          <div>
            <h1 className="hero">{content.title}</h1>
            <div className="subtitle">{content.subtitle}</div>
          </div>
        </div>
      </InnerWrapper>
    </section>
  );
}
