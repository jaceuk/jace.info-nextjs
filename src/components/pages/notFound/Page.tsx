import InnerWrapper from '@/components/shared/InnerWrapper';
import styles from './Page.module.scss';
import Borg from '@/images/borg.jpg';
import BorgDark from '@/images/borg-dark.jpg';
import HeroImage from '@/components/shared/HeroImage';

export default function Page() {
  return (
    <main className="with-gradient">
      <InnerWrapper>
        <div className={styles.container}>
          <div className={styles.intro}>
            <h1>Error 404</h1>
            <p className="subtitle">You will be assimilated, restistance is futile.</p>
          </div>

          <HeroImage image={Borg} darkImage={BorgDark} />
        </div>
      </InnerWrapper>
    </main>
  );
}
