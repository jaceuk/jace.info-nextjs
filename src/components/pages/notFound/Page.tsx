import Image from 'next/image';
import InnerWrapper from '@/components/shared/InnerWrapper';
import styles from './Page.module.scss';
import Borg from '@/images/borg.jpg';

export default function Page() {
  return (
    <main className="with-gradient">
      <InnerWrapper>
        <div className={styles.container}>
          <div className={styles.intro}>
            <h1>Error 404</h1>
            <p className="subtitle">You will be assimilated, restistance is futile.</p>
          </div>

          <div className={styles.image}>
            <Image src={Borg} alt="" fill priority />
          </div>
        </div>
      </InnerWrapper>
    </main>
  );
}
