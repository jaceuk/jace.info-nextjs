import styles from './Card.module.scss';

interface Props {
  children: React.ReactNode;
}

export default function Card({ children }: Props) {
  return <article className={styles.card}>{children}</article>;
}
