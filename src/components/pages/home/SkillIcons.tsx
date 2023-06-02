import Image from 'next/image';
import styles from './SkillIcons.module.scss';
import reactIcon from '@/images/react.svg';
import cssIcon from '@/images/css.svg';
import jsIcon from '@/images/javascript.svg';
import htmlIcon from '@/images/html.svg';

export default function SkillIcons() {
  return (
    <>
      <div className={styles.skills}>
        <div className={styles.image}>
          <Image src={reactIcon} alt="" width={100} />
        </div>

        <div className={styles.image}>
          <Image src={cssIcon} alt="" width={100} />
        </div>

        <div className={styles.image}>
          <Image src={jsIcon} alt="" width={100} />
        </div>

        <div className={styles.image}>
          <Image src={htmlIcon} alt="" width={100} />
        </div>
      </div>
    </>
  );
}
