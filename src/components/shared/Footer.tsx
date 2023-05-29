import styles from './Footer.module.scss';
import InnerWrapper from '@components/shared/InnerWrapper';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <InnerWrapper>&copy; 2022 Jason Newington</InnerWrapper>
    </footer>
  );
}
