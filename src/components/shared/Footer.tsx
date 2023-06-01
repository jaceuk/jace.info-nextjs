import styles from './Footer.module.scss';
import InnerWrapper from '@components/shared/InnerWrapper';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <InnerWrapper>&copy; {currentYear} Jason Newington</InnerWrapper>
    </footer>
  );
}
